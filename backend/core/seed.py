"""
core/seed.py - Idempotent database seeding run once at server startup.

Two tasks:
1. Ensure every value in RoleEnum exists as a row in the `role` table.
2. Ensure a default admin account exists (username=admin, email=admin@google.com).

Both operations are idempotent: if the rows are already there, nothing changes.
"""

import logging

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from models.user import Role, RoleEnum, User, UserRole
from services.auth import hash_password

logger = logging.getLogger(__name__)

# ── Default admin credentials ─────────────────────────────────────────────────
_ADMIN_USERNAME = "admin"
_ADMIN_EMAIL = "admin@gmail.com"
_ADMIN_PASSWORD = "admin"


async def seed_roles(db: AsyncSession) -> dict[RoleEnum, Role]:
    """
    Insert any missing Role rows and return a mapping of RoleEnum → Role.

    Safe to call multiple times; existing rows are never modified.
    """
    result = await db.execute(select(Role))
    existing_roles: list[Role] = list(result.scalars().all())
    existing_enums = {r.role for r in existing_roles}

    role_map: dict[RoleEnum, Role] = {r.role: r for r in existing_roles}

    for role_enum in RoleEnum:
        if role_enum not in existing_enums:
            new_role = Role(role=role_enum)
            db.add(new_role)
            await db.flush()  # populate new_role.id before we store it in the map
            role_map[role_enum] = new_role
            logger.info("Seeded role: %s", role_enum.value)

    return role_map


async def seed_admin(db: AsyncSession, role_map: dict[RoleEnum, Role]) -> None:
    """
    Create the default admin account if it does not already exist.

    Checks by username so re-running on a server with the admin already
    present is a no-op.
    """
    result = await db.execute(
        select(User).where(User.username == _ADMIN_USERNAME)
    )
    if result.scalars().first() is not None:
        logger.debug("Admin account already exists - skipping seed.")
        return

    admin_user = User(
        username=_ADMIN_USERNAME,
        email=_ADMIN_EMAIL,
        password_hash=hash_password(_ADMIN_PASSWORD),
    )
    db.add(admin_user)
    await db.flush()  # populate admin_user.id

    admin_role = role_map.get(RoleEnum.ADMIN)
    if admin_role is None:
        logger.error("ADMIN role not found in role_map - admin account will have no role.")
    else:
        db.add(UserRole(user_id=admin_user.id, role_id=admin_role.id))

    logger.info("Seeded default admin account (username=%s).", _ADMIN_USERNAME)


async def run_seeds(db: AsyncSession) -> None:
    """
    Entry point called from the FastAPI lifespan.

    Runs all seed functions inside a single transaction so either everything
    succeeds or nothing is committed.
    """
    role_map = await seed_roles(db)
    await seed_admin(db, role_map)
    await db.commit()
    logger.info("Database seeding complete.")
