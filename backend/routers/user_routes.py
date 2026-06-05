# User Information, User Management
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from models import user
from core.database import get_db
from schemas.user_schema import UserUpdate, UserPublic, UserPrivate

from services.auth import CurrentUser

router = APIRouter()

def _user_with_roles():
    """Reusable selectinload option for user + roles."""
    return selectinload(user.User.roles).selectinload(user.UserRole.role)


# get_current_user
@router.get("/me", response_model=UserPrivate)
async def get_current_user(current_user: CurrentUser):
    """Get the currently authenticated user (roles already loaded by CurrentUser dependency)."""
    return current_user

# return users list (for Admin page)
@router.get("/users", response_model=list[UserPrivate])
async def get_users(db: Annotated[AsyncSession, Depends(get_db)]):
    result = await db.execute(
        select(user.User)
        .options(_user_with_roles())
    )

    users = result.scalars().all()

    return users


@router.get("/{user_id}", response_model=UserPrivate)
async def get_user(user_id: int, db: Annotated[AsyncSession, Depends(get_db)]):
    result = await db.execute(
        select(user.User)
        .where(user.User.id == user_id)
        .options(_user_with_roles())
    )
    user_ = result.scalars().first()

    if user_:
        return user_
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

def _is_admin(current_user: user.User) -> bool:
    """Return True if the user has the ADMIN role."""
    return any(ur.role.role == user.RoleEnum.ADMIN for ur in current_user.roles)


# update_user
@router.patch("/{user_id}", response_model=UserPrivate)
async def update_user(
    user_id: int,
    user_update: UserUpdate,
    current_user: CurrentUser,
    db: Annotated[AsyncSession, Depends(get_db)],
):
    is_admin = _is_admin(current_user)
    is_self = user_id == current_user.id

    # Only the user themselves or an admin may update this record
    if not is_self and not is_admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to update this user",
        )

    # Non-admins cannot change roles (prevents privilege escalation)
    if user_update.role is not None and not is_admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Only admins can change a user's role",
        )

    result = await db.execute(
        select(user.User)
        .where(user.User.id == user_id)
        .options(_user_with_roles())
    )
    user_ = result.scalars().first()
    if not user_:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )

    if user_update.username is not None and user_update.username.lower() != user_.username.lower():
        result = await db.execute(
            select(user.User).where(func.lower(user.User.username) == user_update.username.lower()),
        )
        if result.scalars().first():
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Username already exists",
            )

    if user_update.email is not None and user_update.email.lower() != user_.email.lower():
        result = await db.execute(
            select(user.User).where(func.lower(user.User.email) == user_update.email.lower()),
        )
        if result.scalars().first():
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered",
            )

    if user_update.username is not None:
        user_.username = user_update.username
    if user_update.email is not None:
        user_.email = user_update.email.lower()

    # Role update: replace all existing UserRole rows with the new role
    if user_update.role is not None:
        role_result = await db.execute(
            select(user.Role).where(user.Role.role == user.RoleEnum(user_update.role))
        )
        new_role = role_result.scalars().first()
        if not new_role:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Role '{user_update.role}' not found in database",
            )
        # Delete existing role assignments for this user
        for ur in user_.roles:
            await db.delete(ur)
        await db.flush()
        # Insert the new role assignment
        db.add(user.UserRole(user_id=user_.id, role_id=new_role.id))

    await db.commit()

    # Re-fetch with roles after commit (db.refresh clears eager-loaded collections)
    result = await db.execute(
        select(user.User)
        .where(user.User.id == user_.id)
        .options(_user_with_roles())
    )
    return result.scalars().first()



# Delete user
@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int, current_user: CurrentUser, db: Annotated[AsyncSession, Depends(get_db)]):
    is_admin = _is_admin(current_user)
    is_self = user_id == current_user.id
    if not is_self and not is_admin:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized to delete this user",
        )
    result = await db.execute(select(user.User).where(user.User.id == user_id))
    user_ = result.scalars().first()
    if not user_:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )

    await db.delete(user_)
    await db.commit()