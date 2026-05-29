from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field, UUID4
from typing import Optional


# ── Inbound ──────────────────────────────────────────────────────────────────

class ChatRequest(BaseModel):
    """Payload sent by the frontend to /api/chat/ask."""
    session_id: Optional[str] = Field(
        default=None,
        description="Existing session UUID, or null for the first message in a conversation.",
    )
    message: str = Field(..., min_length=1)
    subject: str
    grade: int


# ── Outbound ──────────────────────────────────────────────────────────────────

class MessageOut(BaseModel):
    """Serialised representation of a single Message row."""
    model_config = ConfigDict(from_attributes=True)

    id: UUID4
    session_id: UUID4
    role: str
    content: str
    sequence_number: int
    token_count: int
    created_at: datetime


class AskResponse(BaseModel):
    """
    Full response returned by POST /api/chat/ask.

    Includes the session_id so the frontend can store it after the very first
    message (when no session existed yet).
    """
    session_id: str          # UUID string – needed by the frontend
    session_created: bool    # True when a brand-new session was created
    message: MessageOut      # The assistant's reply