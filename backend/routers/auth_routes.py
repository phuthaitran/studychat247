# Register, Login, Refresh token, Logout
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Request, Response, status
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from models import user
from core.database import get_db
from schemas.user_schema import Token, UserCreate, UserPrivate

from datetime import datetime, timedelta, UTC
from fastapi.security import OAuth2PasswordRequestForm
from services.auth import (
    create_access_token,
    create_refresh_token,
    get_refresh_token_record,
    hash_password,
    verify_password,
    CurrentUser,
)
from core.security import settings

from starlette.concurrency import run_in_threadpool

router = APIRouter()

# Register
@router.post(
    "/register",
    response_model=UserPrivate,
    status_code=status.HTTP_201_CREATED,
)
async def create_user(user_: UserCreate, db: Annotated[AsyncSession, Depends(get_db)]):
    result = await db.execute(
        select(user.User).where(func.lower(user.User.username) == user_.username.lower()),
    )
    existing_user = result.scalars().first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already exists",
        )

    result = await db.execute(
        select(user.User).where(func.lower(user.User.email) == user_.email.lower()),
    )
    existing_email = result.scalars().first()
    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

    # Fetch the role row matching the requested role (defaults to USER)
    role_result = await db.execute(
        select(user.Role).where(user.Role.role == user.RoleEnum(user_.role))
    )
    default_role = role_result.scalars().first()
    if not default_role:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Role '{user_.role}' not configured in database",
        )

    new_user = user.User(
        username=user_.username,
        email=user_.email.lower(),
        password_hash=hash_password(user_.password),
    )
    db.add(new_user)
    await db.flush()  # Populate new_user.id before creating the join record

    # Assign default USER role via the join table
    user_role = user.UserRole(user_id=new_user.id, role_id=default_role.id)
    db.add(user_role)

    await db.commit()

    # Re-fetch with roles eager-loaded for response serialisation
    result = await db.execute(
        select(user.User)
        .where(user.User.id == new_user.id)
        .options(selectinload(user.User.roles).selectinload(user.UserRole.role))
    )
    return result.scalars().first()

## login_for_access_token
@router.post("/login", response_model=Token)
async def login_for_access_token(
    response: Response,
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    db: Annotated[AsyncSession, Depends(get_db)],
):
    # Look up user by email (case-insensitive)
    # Note: OAuth2PasswordRequestForm uses "username" field, but we treat it as email
    result = await db.execute(
        select(user.User)
        .where(func.lower(user.User.email) == form_data.username.lower())
        .options(selectinload(user.User.roles).selectinload(user.UserRole.role))
    )
    user_ = result.scalars().first()

    # Verify user exists and password is correct
    # Don't reveal which one failed (security best practice)
    if not user_ or not verify_password(form_data.password, user_.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Create access token with user id as subject
    access_token_expires = timedelta(minutes=settings.access_token_expire_minutes)
    access_token = create_access_token(
        data={"sub": str(user_.id)},
        expires_delta=access_token_expires,
    )

    # Create and persist the refresh token
    raw_refresh_token = create_refresh_token()
    db_refresh_token = user.RefreshToken(
        token=raw_refresh_token,
        user_id=user_.id,
        expires_at=datetime.now(UTC) + timedelta(days=settings.refresh_token_expire_days),
    )
    db.add(db_refresh_token)
    await db.commit()

    # Set refresh token as httpOnly cookie — JS cannot read this
    response.set_cookie(
        key="refresh_token",
        value=raw_refresh_token,
        httponly=True,   # Protects against XSS
        samesite="lax",  # Mitigates CSRF
        secure=False,    # Set to True in production (requires HTTPS)
        max_age=60 * 60 * 24 * settings.refresh_token_expire_days,
    )
    return Token(access_token=access_token, token_type="bearer")

@router.post("/refresh", response_model=Token)
async def refresh_access_token(
    request: Request,
    db: Annotated[AsyncSession, Depends(get_db)],
):
    raw_token = request.cookies.get("refresh_token")
    if not raw_token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="No refresh token provided")

    record = await get_refresh_token_record(raw_token, db)
    if not record:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired refresh token")

    new_access_token = create_access_token(
        data={"sub": str(record.user_id)},
        expires_delta=timedelta(minutes=settings.access_token_expire_minutes),
    )
    return Token(access_token=new_access_token, token_type="bearer")

@router.post("/logout", status_code=status.HTTP_204_NO_CONTENT)
async def logout(
    request: Request,
    response: Response,
    current_user: CurrentUser,
    db: Annotated[AsyncSession, Depends(get_db)],
):
    raw_token = request.cookies.get("refresh_token")
    if raw_token:
        record = await get_refresh_token_record(raw_token, db)
        if record and record.user_id == current_user.id:
            await db.delete(record)
            await db.commit()
    response.delete_cookie(key="refresh_token")