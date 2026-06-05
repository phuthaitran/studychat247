from pydantic import BaseModel, ConfigDict, Field, EmailStr, field_validator
from enum import Enum
from typing import Any

class RoleEnum(str, Enum):
    ADMIN = "admin"
    USER = "user"

class UserBase(BaseModel):
    username: str = Field(min_length=1, max_length=50)
    email: EmailStr = Field(max_length=120)

class UserCreate(UserBase):
    password: str = Field(min_length=8)
    confirm_password: str = Field(min_length=8)
    role: RoleEnum = Field(default=RoleEnum.USER)

class UserPublic(BaseModel):
    model_config = ConfigDict(from_attributes=True, use_enum_values=True)

    id: int
    username: str
    roles: list[RoleEnum] = []

    @field_validator("roles", mode="before")
    @classmethod
    def extract_roles(cls, value: Any) -> list[RoleEnum]:
        """Unwrap list[UserRole] ORM objects into list[RoleEnum] values.

        The ORM structure is: User.roles → list[UserRole], and each
        UserRole.role is a Role ORM object whose .role attribute is RoleEnum.
        So we must traverse: UserRole → Role → RoleEnum (two hops).
        """
        result = []
        for item in value:
            role_val = item
            # Hop 1: UserRole → its Role relationship
            if hasattr(item, "role"):
                role_val = item.role
            # Hop 2: Role ORM object → its RoleEnum column value
            if hasattr(role_val, "role"):
                role_val = role_val.role
            result.append(role_val)
        return result

class UserPrivate(UserPublic):
    email: EmailStr

class UserUpdate(BaseModel):
    username: str | None = Field(default=None, min_length=1, max_length=50)
    email: EmailStr | None = Field(default=None, max_length=120)
    role: RoleEnum | None = Field(default=None)

class Token(BaseModel):
    access_token: str
    token_type: str