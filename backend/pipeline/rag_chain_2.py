"""
pipeline/rag_chain.py — Core RAG pipeline with MySQL-backed chat history.

Each call to ask() or ask_stream():
    1. Loads the full chat history for the given session_id from MySQL
    2. Retrieves relevant chunks from ChromaDB (filtered by subject + grade)
    3. Builds a prompt: system + history + retrieved context + new question
    4. Calls the LLM and returns the answer
    5. Saves both the user message and AI answer back to MySQL

This makes the conversation run infinitely — there is no in-memory state.
Each request is fully self-contained and session-isolated.
"""

import logging
from pathlib import Path
from typing import AsyncGenerator, Optional

from langchain_core.messages import AIMessage, BaseMessage, HumanMessage, SystemMessage
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from sqlalchemy.orm import Session

import sys
sys.path.append(str(Path(__file__).parent.parent))
from config import get_settings
from api.models import ChatMessage, ChatSession

logger = logging.getLogger(__name__)


# ─── System prompt ────────────────────────────────────────────────────────────

SYSTEM_PROMPT = """Bạn là một gia sư thông minh và thân thiện, chuyên hỗ trợ học sinh trung học phổ thông Việt Nam.

Nhiệm vụ của bạn:
- Giải thích các khái niệm một cách rõ ràng, dễ hiểu, phù hợp với học sinh THPT
- Trả lời bằng tiếng Việt, trừ khi học sinh hỏi bằng tiếng Anh
- Chỉ dựa vào tài liệu trong phần [Tài liệu tham khảo] để trả lời
- Nếu không tìm thấy thông tin, hãy nói thật thay vì bịa đặt
- Khuyến khích học sinh suy nghĩ và đặt câu hỏi thêm
- Trình bày công thức toán học rõ ràng nếu có

Hãy luôn thân thiện, kiên nhẫn và động viên học sinh!"""


# ─── LLM factory ─────────────────────────────────────────────────────────────

def get_llm(settings=None):
    from langchain_google_genai import ChatGoogleGenerativeAI
    return ChatGoogleGenerativeAI(
        model=settings.llm_model,
        temperature=settings.llm_temperature,
        max_output_tokens=settings.llm_max_tokens,
        google_api_key=settings.google_api_key,
        streaming=True,
    )
    


# ─── History loader ───────────────────────────────────────────────────────────

def load_history_from_db(session_id: str, db: Session) -> list[BaseMessage]:
    """
    Load the full chat history for a session from MySQL and convert to
    LangChain message objects.

    This is the core mechanism that makes the chat infinite — every turn's
    history is persisted in MySQL and reloaded fresh on each request.
    Session isolation is guaranteed by the session_id WHERE clause.

    Args:
        session_id: The unique ID of the chat session (UUID string).
        db:         SQLAlchemy database session.

    Returns:
        List of LangChain BaseMessage objects in chronological order.
        Empty list if this is the first message in the session.
    """
    rows = (
        db.query(ChatMessage)
        .filter(ChatMessage.session_id == session_id)  # ← isolation happens here
        .order_by(ChatMessage.created_at.asc())
        .all()
    )

    messages: list[BaseMessage] = []
    for row in rows:
        if row.role == "user":
            messages.append(HumanMessage(content=row.content))
        elif row.role == "assistant":
            messages.append(AIMessage(content=row.content))

    logger.info(f"Loaded {len(messages)} messages for session {session_id[:8]}...")
    return messages


def save_messages_to_db(
    session_id: str,
    user_question: str,
    ai_answer: str,
    num_sources: int,
    db: Session,
) -> ChatMessage:
    """
    Persist the user's question and the AI's answer to MySQL.
    Both are tagged with session_id so they're always retrieved together.

    Returns the saved assistant ChatMessage (needed for feedback endpoint).
    """
    user_msg = ChatMessage(
        session_id=session_id,
        role="user",
        content=user_question,
    )
    db.add(user_msg)

    assistant_msg = ChatMessage(
        session_id=session_id,
        role="assistant",
        content=ai_answer,
        num_sources=num_sources,
    )
    db.add(assistant_msg)
    db.commit()
    db.refresh(assistant_msg)
    return assistant_msg


# ─── RAG chain ────────────────────────────────────────────────────────────────

class VietnameseTutorRAG:
    """
    RAG pipeline with MySQL-backed infinite chat history.

    Each instance is created per request (or cached per subject).
    All session state lives in MySQL — the RAG object itself is stateless.
    """

    def __init__(self, subject: Optional[str] = None, grade: Optional[int] = None):
        self.settings = get_settings()
        self.subject = subject
        self.grade = grade
        self.embeddings = self._load_embeddings()
        self.vectorstore = self._load_vectorstore()
        self.retriever = self._build_retriever()
        self.llm = get_llm(self.settings)
        logger.info(
            f"RAG ready | subject={subject or 'all'} | "
            f"grade={grade or 'all'} | model={self.settings.llm_model}"
        )

    def _load_embeddings(self) -> HuggingFaceEmbeddings:
        return HuggingFaceEmbeddings(
            model_name=self.settings.embedding_model,
            model_kwargs={"device": "cpu"},
            encode_kwargs={"normalize_embeddings": True},
        )

    def _load_vectorstore(self) -> Chroma:
        return Chroma(
            collection_name=self.settings.chroma_collection_name,
            embedding_function=self.embeddings,
            persist_directory=self.settings.chroma_persist_dir,
        )

    def _build_retriever(self):
        """
        Build a ChromaDB retriever filtered by subject and grade.

        Grade filtering implements the cumulative rule:
            Grade 10 → books from grade 10 only
            Grade 11 → books from grades 10 and 11
            Grade 12 → books from grades 10, 11, and 12
        """
        search_kwargs: dict = {"k": self.settings.retrieval_top_k}

        filters = []
        if self.subject:
            filters.append({"subject": {"$eq": self.subject}})
        if self.grade:
            allowed_grades = list(range(10, self.grade + 1))
            filters.append({"grade": {"$in": allowed_grades}})

        if len(filters) == 2:
            search_kwargs["filter"] = {"$and": filters}
        elif len(filters) == 1:
            search_kwargs["filter"] = filters[0]

        return self.vectorstore.as_retriever(
            search_type="similarity",
            search_kwargs=search_kwargs,
        )

    def _retrieve_context(self, question: str) -> tuple[str, list[dict]]:
        """
        Embed the question, retrieve top-K chunks from ChromaDB,
        and format them into a readable context string.

        Returns:
            context_str: Formatted string to inject into the prompt.
            sources:     List of source dicts for the API response.
        """
        docs = self.retriever.invoke(question)

        if not docs:
            return "Không tìm thấy tài liệu liên quan.", []

        context_parts = []
        sources = []

        for i, doc in enumerate(docs, 1):
            subject_name = doc.metadata.get("subject_name", "")
            grade = doc.metadata.get("grade", "")
            source_file = doc.metadata.get("source_file", "unknown")

            context_parts.append(
                f"[Đoạn {i} | {subject_name} Lớp {grade} | {source_file}]\n"
                f"{doc.page_content}"
            )
            sources.append({
                "chunk":        i,
                "subject":      doc.metadata.get("subject", ""),
                "subject_name": subject_name,
                "grade":        grade,
                "source_file":  source_file,
                "preview":      doc.page_content[:200] + "...",
            })

        return "\n\n---\n\n".join(context_parts), sources

    def _build_prompt(
        self,
        question: str,
        context: str,
        history: list[BaseMessage],
        subject_name: str,
    ) -> list[BaseMessage]:
        """
        Assemble the full message list for the LLM:

            [SystemMessage]
            [HumanMessage]  ← turn 1 (from MySQL history)
            [AIMessage]     ← turn 1 reply
            [HumanMessage]  ← turn 2
            [AIMessage]     ← turn 2 reply
            ...             ← all previous turns (infinite, from MySQL)
            [HumanMessage]  ← current question + retrieved context

        The history can be arbitrarily long — it all comes from MySQL.
        There is no hard cap, but you may want to trim very long histories
        to stay within the LLM's context window (see note below).
        """
        messages: list[BaseMessage] = [SystemMessage(content=SYSTEM_PROMPT)]

        # ── Append full history from MySQL ──
        # All previous turns from this session. Because each request reloads
        # history from the DB, this works for any number of turns.
        #
        # Context window note: Most LLMs support 128k+ tokens today, so for a
        # typical tutoring session you won't hit the limit. If you do, trim
        # with:  history = history[-20:]  (keep last 20 messages)
        messages.extend(history)

        # ── Append current question with retrieved context ──
        current_turn = (
            f"[Tài liệu tham khảo — Môn: {subject_name}]\n"
            f"{context}\n\n"
            f"[Câu hỏi]\n{question}"
        )
        messages.append(HumanMessage(content=current_turn))
        return messages

    # ── Public API ────────────────────────────────────────────────────────────

    def ask(
        self,
        question: str,
        session_id: str,
        db: Session,
        subject_name: str = "",
    ) -> dict:
        """
        Answer a question using RAG + full session history from MySQL.

        Args:
            question:     The student's question.
            session_id:   UUID of the chat session (used to load + save history).
            db:           SQLAlchemy session (injected by FastAPI).
            subject_name: Display name of the subject (e.g. "Toán học").

        Returns:
            {
                "answer":      str,
                "message_id":  str,   ← ID of the saved assistant message
                "sources":     list,
                "num_sources": int,
                "turn":        int,   ← which turn number this is
            }
        """
        # 1. Load full history from MySQL (session-isolated)
        history = load_history_from_db(session_id, db)
        turn = len(history) // 2 + 1  # each turn = 1 human + 1 AI message

        # 2. Retrieve relevant chunks
        context, sources = self._retrieve_context(question)
        logger.info(f"Session {session_id[:8]} | Turn {turn} | Retrieved {len(sources)} chunks")

        # 3. Build prompt with full history
        messages = self._build_prompt(question, context, history, subject_name)

        # 4. Call LLM
        response = self.llm.invoke(messages)
        answer = response.content if hasattr(response, "content") else str(response)

        # 5. Save both messages to MySQL
        assistant_msg = save_messages_to_db(
            session_id=session_id,
            user_question=question,
            ai_answer=answer,
            num_sources=len(sources),
            db=db,
        )

        return {
            "answer":      answer,
            "message_id":  assistant_msg.id,
            "sources":     sources,
            "num_sources": len(sources),
            "turn":        turn,
        }

    async def ask_stream(
        self,
        question: str,
        session_id: str,
        db: Session,
        subject_name: str = "",
    ) -> AsyncGenerator[str, None]:
        """
        Streaming version of ask(). Yields tokens as they arrive from the LLM.
        Saves the complete answer to MySQL after streaming finishes.

        Usage in FastAPI:
            return StreamingResponse(rag.ask_stream(...), media_type="text/event-stream")
        """
        # 1. Load history + retrieve context (same as ask())
        history = load_history_from_db(session_id, db)
        context, sources = self._retrieve_context(question)

        # 2. Save user message immediately so it's in the DB before streaming starts
        user_msg = ChatMessage(
            session_id=session_id,
            role="user",
            content=question,
        )
        db.add(user_msg)
        db.commit()

        # 3. Build prompt
        messages = self._build_prompt(question, context, history, subject_name)

        # 4. Stream tokens + collect full answer
        full_answer: list[str] = []
        async for chunk in self.llm.astream(messages):
            token = chunk.content if hasattr(chunk, "content") else str(chunk)
            if token:
                full_answer.append(token)
                yield f"data: {token}\n\n"

        # 5. Save complete AI answer to MySQL after streaming finishes
        assistant_msg = ChatMessage(
            session_id=session_id,
            role="assistant",
            content="".join(full_answer),
            num_sources=len(sources),
        )
        db.add(assistant_msg)
        db.commit()

        yield "data: [DONE]\n\n"