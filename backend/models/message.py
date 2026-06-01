from __future__ import annotations
import enum

from datetime import UTC, datetime
from typing import TYPE_CHECKING

from sqlalchemy import DateTime, ForeignKey, Text, Uuid, Integer, Index, Enum
from sqlalchemy.orm import Mapped, mapped_column, relationship

from core.database import Base

if TYPE_CHECKING:
    from session import Session
    
class MsgRoleEnum(enum.Enum):
    USER = "user"
    ASSISTANT = "assistant"

class Message(Base):
    __tablename__ = "message"
    __table_args__ = (
        # Composite index for fast lookup of messages in a session ordered by sequence
        Index('ix_message_sequence', 'session', 'sequence_number'),
    )

    id: Mapped[Uuid] = mapped_column(Uuid(as_uuid=True), primary_key=True, index=True)
    session_id: Mapped[Uuid] = mapped_column(
        ForeignKey("chat_session.id"), nullable=False, index=True, name="session"
    )
    role: Mapped[MsgRoleEnum] = mapped_column(Enum(MsgRoleEnum), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(UTC),
    )
    sequence_number: Mapped[int] = mapped_column(Integer, nullable=False, index=True)
    token_count: Mapped[int] = mapped_column(Integer, nullable=True)

    chat_session: Mapped[Session] = relationship(back_populates="messages")