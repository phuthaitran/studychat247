from __future__ import annotations
import enum

from datetime import UTC, datetime
from typing import TYPE_CHECKING

from sqlalchemy import ForeignKey, Integer, String, DateTime, Enum
from sqlalchemy.orm import Mapped, mapped_column, relationship

from core.database import Base

if TYPE_CHECKING:
    from session import Session

class RoleEnum(enum.Enum):
    ADMIN = "admin"
    USER = "user"

class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    password_hash: Mapped[str] = mapped_column(String(200), nullable=False)

    roles: Mapped[list[UserRole]] = relationship(back_populates="user", cascade="all, delete-orphan")
    refresh_tokens: Mapped[list[RefreshToken]] = relationship(back_populates="user", cascade="all, delete-orphan")
    chat_sessions: Mapped[list[Session]] = relationship(back_populates="user", cascade="all, delete-orphan")

class Role(Base):
    __tablename__ = "role"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    role: Mapped[RoleEnum] = mapped_column(Enum(RoleEnum), nullable=False)

    user_roles: Mapped[list[UserRole]] = relationship(back_populates="role")

class UserRole(Base):
    __tablename__ = "user_role"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False, index=True)
    role_id: Mapped[int] = mapped_column(ForeignKey("role.id"), nullable=False, index=True)

    user: Mapped[User] = relationship(back_populates="roles")
    role: Mapped[Role] = relationship(back_populates="user_roles")

class RefreshToken(Base):
    __tablename__ = "refresh_token"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    token: Mapped[str] = mapped_column(String(512), unique=True, nullable=False, index=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False, index=True)
    expires_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)

    user: Mapped[User] = relationship(back_populates="refresh_tokens")