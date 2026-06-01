"""
chat_services.py - Business logic for the /ask endpoint.

Design notes
────────────
• All DB-touching helpers receive a plain `AsyncSession` (not a FastAPI
  Depends-wrapped type).  Depends() is only resolved by FastAPI inside a
  route handler; calling it from a service would silently pass the *type*
  annotation rather than an actual session.

• `save_user_message` is called BEFORE `get_recent_messages`.
  This means the user's own message IS included in the history window.
  That is intentional: the RAG prompt gets the full conversation context,
  including the question that was just asked. The LLM therefore sees:
      …previous turns…
      user: <new question>
  which is the natural context a human tutor would have.

• `get_recent_messages` walks backwards from the most-recent message and
  accumulates up to `max_tokens` tokens, then reverses the list to preserve
  chronological order before returning a formatted string.

• `generate_answer` (in rag_services) is called with `await` because it
  uses LangChain's async `ainvoke` under the hood.

• `updated_at` on the Session row is refreshed by SQLAlchemy's `onupdate`
  hook automatically whenever we flush/commit a change on a related row.
  We additionally call `update_session_timestamp` explicitly so the value
  is always current even if SQLAlchemy skips the hook (e.g. bulk updates).
"""

import uuid
import tiktoken
from fastapi import HTTPException, status
from datetime import datetime, UTC
from sqlalchemy import select, desc, func, update
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from models.message import Message, MsgRoleEnum
from models.session import Session as ChatSession
from services.rag_services import generate_answer

# Reuse a single encoder instance – loading it is expensive.
_encoding = tiktoken.get_encoding("cl100k_base")

MAX_HISTORY_TOKENS = 3000


# ── Token helpers ─────────────────────────────────────────────────────────────

def _count_tokens(text: str) -> int:
    """Return the number of tokens in *text* using the cl100k_base encoding."""
    return len(_encoding.encode(text))


# ── Sequence numbers ──────────────────────────────────────────────────────────

async def _next_sequence_number(db: AsyncSession, session_id: str) -> int:
    """Return the next available sequence number for a session."""
    result = await db.execute(
        select(func.max(Message.sequence_number)).where(
            Message.session_id == session_id
        )
    )
    current_max = result.scalar()
    return 1 if current_max is None else current_max + 1


# ── Session management ────────────────────────────────────────────────────────

async def create_session(
    db: AsyncSession,
    user_id: int,
    subject: str,
    grade: int,
    first_message: str,
) -> ChatSession:
    """
    Create and persist a new chat session.

    The title is derived from the first message (truncated to 28 chars) so
    the sidebar can display something meaningful without a separate LLM call.
    """
    session_id = str(uuid.uuid4())
    title = (first_message[:28] + "…") if len(first_message) > 28 else first_message
    new_session = ChatSession(
        id=session_id,
        user_id=user_id,
        subject=subject,
        grade=grade,
        title=title,
    )
    db.add(new_session)
    # Flush to DB so foreign-key constraints are satisfied before we insert
    # messages, but stay inside the same transaction.
    await db.flush()
    return new_session


# ── Message persistence ───────────────────────────────────────────────────────

async def save_message(
    db: AsyncSession,
    session_id: str,
    role: MsgRoleEnum,
    content: str,
) -> Message:
    """
    Persist a single message (user or assistant) and return the ORM object.

    Token count is stored so `get_recent_messages` can implement a cheap
    sliding-window without re-encoding every message on every request.
    """
    token_count = _count_tokens(content)
    sequence = await _next_sequence_number(db, session_id)
    msg = Message(
        id=str(uuid.uuid4()),
        session_id=session_id,
        role=role,
        content=content,
        token_count=token_count,
        sequence_number=sequence,
    )
    db.add(msg)
    await db.flush()   # make the row visible within the transaction
    return msg


# ── Chat history ──────────────────────────────────────────────────────────────

async def get_recent_messages(
    db: AsyncSession,
    session_id: str,
    max_tokens: int = MAX_HISTORY_TOKENS,
) -> str:
    """
    Load recent messages for a session up to *max_tokens* tokens.

    Strategy:
    1. Fetch all messages newest-first (DESC sequence_number).
    2. Accumulate until the token budget is exhausted.
    3. Reverse the accumulated list to restore chronological order.
    4. Format as "role: content" pairs separated by a blank line.

    Returns a single string ready to be injected into the RAG prompt's
    {history} placeholder.  Returns an empty string when there are no messages.
    """
    result = await db.execute(
        select(Message)
        .where(Message.session_id == session_id)
        .order_by(desc(Message.sequence_number))
    )
    all_messages: list[Message] = list(result.scalars().all())

    selected: list[Message] = []
    total_tokens = 0

    for msg in all_messages:
        msg_tokens = msg.token_count or _count_tokens(msg.content)
        if total_tokens + msg_tokens > max_tokens:
            break
        selected.append(msg)
        total_tokens += msg_tokens

    # Restore chronological order before formatting
    selected.reverse()

    if not selected:
        return ""

    parts = [f"{m.role.value}: {m.content}" for m in selected]
    return "\n\n".join(parts)


# ── Session timestamp ─────────────────────────────────────────────────────────

async def update_session_timestamp(db: AsyncSession, session_id: str) -> None:
    """
    Explicitly bump `updated_at` on the session row.

    SQLAlchemy's `onupdate` hook fires when the *session* ORM object is
    modified, but not when we only touch related *message* rows.  We call
    this function after every successful answer so the session list on the
    frontend can be sorted by activity.
    """
    await db.execute(
        update(ChatSession)
        .where(ChatSession.id == session_id)
        .values(updated_at=datetime.now(UTC))
    )


# ── Main orchestrator ─────────────────────────────────────────────────────────

async def process_chat(
    db: AsyncSession,
    session_id: str,
    user_message: str,
    subject: str,
    grade: int,
) -> Message:
    """
    Full RAG chat pipeline for a single turn.

    Order of operations
    ────────────────────
    1. Save the user's message to the DB.
       Saving first ensures the user turn is included in the history window
       that the LLM receives, giving it the clearest view of the conversation.

    2. Load recent history (includes the message just saved).

    3. Call the RAG chain (async, non-blocking).

    4. Save the assistant's answer to the DB.

    5. Bump `updated_at` on the session so the sidebar reflects recent activity.

    6. Commit everything in one transaction and return the assistant Message.
    """
    # Step 1: persist the user's message
    await save_message(db, session_id, MsgRoleEnum.USER, user_message)

    # Step 2: load history (now includes the user message we just saved)
    history = await get_recent_messages(db, session_id)

    # Step 3: run the RAG chain – async so the event loop stays free
    answer_text = await generate_answer(
        question=user_message,
        subject=subject,
        grade=grade,
        history=history,
    )

    # Step 4: persist the assistant's reply
    assistant_msg = await save_message(db, session_id, MsgRoleEnum.ASSISTANT, answer_text)

    # Step 5: keep session's `updated_at` current
    await update_session_timestamp(db, session_id)

    # Step 6: commit the whole transaction atomically
    await db.commit()

    return assistant_msg

async def get_sessions(
    db: AsyncSession,
    user_id: int
):
    # Get user session 
    result = await db.execute(
        select(ChatSession)
        .options(selectinload(ChatSession.user))
        .where(ChatSession.user_id == user_id)
        .order_by(desc(ChatSession.updated_at))
    )
    
    sessions = result.scalars().all()
    
    return sessions

async def delete_session(
    db: AsyncSession,
    user_id: int,
    session_id: str
):
    result = await db.execute(
        select(ChatSession)
        .where(ChatSession.id == session_id)
    )
    session = result.scalars().first()
    if not session:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found",
        )

    if session.user_id != user_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to delete this session"
        )

    await db.delete(session)
    await db.commit()

async def show_messages(
    db: AsyncSession,
    user_id: int,
    session_id: str
):
    result = await db.execute(
        select(ChatSession)
        .where(ChatSession.id == session_id)
    )
    session = result.scalars().first()
    if not session:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Session not found",
        )

    if session.user_id != user_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to view this session"
        )

    result = await db.execute(
        select(Message)
        .where(Message.session_id == session_id)
    )
    messages = result.scalars().all()
    return messages