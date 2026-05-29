"""
rag_services.py - RAG chain with async LangChain invocation.

Key changes from the original:
• `generate_answer` now uses `rag_chain.ainvoke()` instead of `invoke()`.
  The synchronous `invoke()` would block the entire asyncio event loop for
  the duration of the LLM + embedding calls, preventing FastAPI from serving
  any other requests in the meantime.
• The `history` placeholder now accepts an empty string ("") gracefully.
"""

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough, RunnableLambda
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv
import os

load_dotenv()

CHROMA_PATH = "vectorstore/chroma"

TEMPLATE = """Bạn là một gia sư thông minh và thân thiện, chuyên hỗ trợ học sinh trung học phổ thông Việt Nam.
 
Nhiệm vụ của bạn:
- Giải thích các khái niệm một cách rõ ràng, dễ hiểu, phù hợp với học sinh THPT
- Trả lời bằng tiếng Việt, trừ khi học sinh hỏi bằng tiếng Anh
- Chỉ dựa vào tài liệu được cung cấp trong phần [Tài liệu tham khảo] để trả lời, kết hợp với tin nhắn trong [Lịch sử trò chuyện] để tránh mất ngữ cảnh
- Nếu không tìm thấy thông tin trong tài liệu, hãy nói thật là không tìm thấy thông tin này trong tài liệu hiện có
- Khuyến khích học sinh suy nghĩ và đặt câu hỏi thêm
- Sử dụng ví dụ thực tế khi cần thiết
- Trình bày công thức toán học rõ ràng nếu có
- Nếu có thể, hãy trích dẫn nguồn theo (title) dựa trên metadata

Hãy luôn thân thiện, kiên nhẫn và động viên học sinh!

[Lịch sử trò chuyện]
{history}

[Tài liệu tham khảo]
{context}

[Câu hỏi]
{question}
 
[Hướng dẫn trả lời]
Dựa vào tài liệu trên, hãy trả lời câu hỏi một cách đầy đủ và dễ hiểu.
Nếu cần, hãy chia nhỏ câu trả lời thành các bước hoặc điểm chính.
"""

# --- Load embeddings and vector store ONCE at module level ---
# This avoids reloading on every question.
print("Loading embeddings model...")
embeddings = HuggingFaceEmbeddings(model_name="keepitreal/vietnamese-sbert")

print(f"Loading vector store from '{CHROMA_PATH}'...")
vector_store = Chroma(
    collection_name="textbooks",
    collection_metadata={"hnsw:space": "cosine"},
    embedding_function=embeddings,
    persist_directory=CHROMA_PATH,
)
print("Vector store loaded. Ready to answer questions.")


def filter_books(subject: str | None = None, grade: int | None = None) -> dict | None:
    """Build a Chroma metadata filter dict from optional subject and grade.

    Grade logic: grade 11 can also access grade 10 material, etc.
    Returns None when no filters are specified (retrieves from all books).
    """
    if subject is None and grade is None:
        return None

    conditions = []

    if subject is not None:
        conditions.append({"subject": {"$eq": subject}})

    if grade is not None:
        # A student at grade N can access material from grade 10 up to N.
        allowed_grades = list(range(10, grade + 1))
        if len(allowed_grades) == 1:
            conditions.append({"grade": {"$eq": allowed_grades[0]}})
        else:
            conditions.append({"grade": {"$in": allowed_grades}})

    if len(conditions) == 1:
        return conditions[0]
    return {"$and": conditions}


model = ChatGoogleGenerativeAI(
    model="gemini-3.1-flash-lite",
    temperature=1.0,
    api_key=os.getenv("GOOGLE_API_KEY"),
)

prompt_template = ChatPromptTemplate.from_messages(
    [
        ("system", TEMPLATE),
        ("human", "{question}"),
    ]
)


def format_docs(docs) -> str:
    """Format retrieved documents into a single context string."""
    if not docs:
        return "Không tìm thấy tài liệu liên quan."
    parts = []
    for doc in docs:
        source = doc.metadata.get("title", "unknown")
        parts.append(f"{doc.page_content}\n({source})")
    return "\n\n---\n\n".join(parts)


async def generate_answer(
    question: str,
    subject: str | None = None,
    grade: int | None = None,
    history: str = "",
) -> str:
    """
    Run the RAG chain asynchronously and return the answer string.

    Args:
        question: The user's question (current turn).
        subject:  Optional subject filter, e.g. "toan" or "ly".
        grade:    Optional grade filter (10, 11, or 12).
        history:  Formatted conversation history string produced by
                  `get_recent_messages`.  Pass "" (empty string) for the
                  very first message in a session.

    Why async?
    ----------
    `ainvoke` releases the event loop while waiting for the LLM / embedding
    responses.  Using the synchronous `invoke` would block all other FastAPI
    requests for the entire duration of the LLM call.
    """
    metadata_filter = filter_books(subject=subject, grade=grade)

    search_kwargs: dict = {"k": 10, "score_threshold": 0.2}
    if metadata_filter is not None:
        search_kwargs["filter"] = metadata_filter

    retriever = vector_store.as_retriever(
        search_type="similarity_score_threshold",
        search_kwargs=search_kwargs,
    )

    # `history` is a plain string, not a runnable – wrap it in a lambda so
    # LangChain can inject it into the chain inputs correctly.
    rag_chain = (
        {
            "context": retriever | format_docs,
            "history": RunnableLambda(lambda _: history),
            "question": RunnablePassthrough(),
        }
        | prompt_template
        | model
        | StrOutputParser()
    )

    try:
        answer = await rag_chain.ainvoke(question)
    except Exception as exc:
        answer = f"Xin lỗi, đã có lỗi xảy ra: {exc}"

    return answer
