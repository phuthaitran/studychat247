from contextlib import asynccontextmanager
from typing import Annotated

from fastapi.exception_handlers import http_exception_handler, request_validation_exception_handler
from fastapi import FastAPI, HTTPException, Request, status, Depends
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException

from models import user, message, session
from core.database import Base, engine, get_db

from routers import user_routes, auth_routes


@asynccontextmanager
async def lifespan(_app: FastAPI):
    # Startup
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    # Shutdown
    await engine.dispose()

app = FastAPI(lifespan=lifespan)

app.include_router(auth_routes.router, prefix="/api/auth", tags=["auth"])
app.include_router(user_routes.router, prefix="/api/user", tags=["users"])

@app.get("/")
def home():
    return {"message": "Hello world"}