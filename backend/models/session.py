from __future__ import annotations

from datetime import UTC, datetime
from typing import TYPE_CHECKING

from sqlalchemy import DateTime, ForeignKey, Integer, String, Uuid
from sqlalchemy.orm import Mapped, mapped_column, relationship

from core.database import Base

if TYPE_CHECKING:
    from user import User
    from message import Message

class Session(Base):
    __tablename__ = "chat_session"

    id: Mapped[Uuid] = mapped_column(Uuid, primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False, index=True)
    subject: Mapped[str] = mapped_column(String(50), nullable=False, index=True)
    grade: Mapped[int] = mapped_column(Integer, nullable=False, index=True)
    title: Mapped[str] = mapped_column(String(30), nullable=True, index=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(UTC),
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(UTC),
        onupdate=lambda: datetime.now(UTC),
        index=True
    )

    user: Mapped[User] = relationship(back_populates="chat_sessions")
    messages: Mapped[list[Message]] = relationship(back_populates="chat_session", cascade="all, delete-orphan")