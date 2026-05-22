from __future__ import annotations

from datetime import UTC, datetime
from typing import TYPE_CHECKING

from sqlalchemy import DateTime, ForeignKey, String, Text, Uuid
from sqlalchemy.orm import Mapped, mapped_column, relationship

from core.database import Base

if TYPE_CHECKING:
    from session import Session

class Message(Base):
    __tablename__ = "message"

    id: Mapped[Uuid] = mapped_column(Uuid, primary_key=True, index=True)
    session_id: Mapped[Uuid] = mapped_column(
        ForeignKey("chat_session.id"), nullable=False, index=True, name="session"
    )
    role: Mapped[str] = mapped_column(String(50), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(UTC),
    )

    chat_session: Mapped[Session] = relationship(back_populates="messages")