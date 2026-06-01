# Chat-related APIs
from typing import Annotated

from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

from core.database import get_db
from schemas.chat_schema import ChatRequest, AskResponse, MessageOut, SessionResponse
from services.auth import CurrentUser
from services.chat_services import create_session, process_chat, get_sessions, delete_session

router = APIRouter()


@router.post(
    "/ask",
    response_model=AskResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Send a message and receive an AI answer",
)
async def ask(
    request: ChatRequest,
    db: Annotated[AsyncSession, Depends(get_db)],
    current_user: CurrentUser,
) -> AskResponse:
    """
    Full RAG chat endpoint.

    Flow
    ────
    1. If `session_id` is None, create a new session and set `session_id`.
    2. Save the user's message to the DB (inside `process_chat`).
    3. Load recent chat history (token-limited to 3 000 tokens).
    4. Run the RAG chain (vector retrieval + LLM).
    5. Save the assistant's reply to the DB.
    6. Bump `session.updated_at` so the sidebar reflects recent activity.
    7. Return `AskResponse` containing the new `session_id` and the reply.

    Security
    ────────
    JWT validation is handled transparently by the `CurrentUser` dependency
    (see `services/auth.py`).  The endpoint is completely unreachable without
    a valid, non-expired access token.
    """
    session_created = False

    if request.session_id is None:
        new_session = await create_session(
            db=db,
            user_id=current_user.id,
            subject=request.subject,
            grade=request.grade,
            first_message=request.message,
        )
        request.session_id = str(new_session.id)
        session_created = True

    assistant_msg = await process_chat(
        db=db,
        session_id=request.session_id,
        user_message=request.message,
        subject=request.subject,
        grade=request.grade,
    )

    return AskResponse(
        session_id=request.session_id,
        session_created=session_created,
        message=MessageOut.model_validate(assistant_msg),
    )

# Get current user sessions
@router.get(
    "/sessions",
    response_model=list[SessionResponse],
    status_code=status.HTTP_200_OK,
    summary="Get all sessions for the current user, ordered by most recently updated",
)
async def get_user_sessions(
    db: Annotated[AsyncSession, Depends(get_db)],
    current_user: CurrentUser,
) -> list[SessionResponse]:
    """
    Returns all chat sessions belonging to the authenticated user,
    sorted by `updated_at` descending (most recent activity first).

    Security
    ────────
    JWT validation is handled transparently by the `CurrentUser` dependency.
    The endpoint is completely unreachable without a valid, non-expired access token.
    """
    sessions = await get_sessions(db, current_user.id)
    return sessions

@router.delete(
    "/sessions/{session_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Delete session"
)
async def delete_user_session(
    db: Annotated[AsyncSession, Depends(get_db)],
    current_user: CurrentUser,
    session_id: str
):
    await delete_session(db, current_user.id, session_id)