from contextlib import asynccontextmanager

from fastapi.exception_handlers import http_exception_handler, request_validation_exception_handler
from fastapi import FastAPI

from core.database import Base, engine, AsyncSessionLocal
from core.seed import run_seeds

from routers import user_routes, auth_routes, chat_routes, admin_routes


@asynccontextmanager
async def lifespan(_app: FastAPI):
    # Startup: create tables, then seed reference data
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with AsyncSessionLocal() as db:
        await run_seeds(db)

    yield
    # Shutdown
    await engine.dispose()

app = FastAPI(lifespan=lifespan)

app.include_router(auth_routes.router, prefix="/api/auth", tags=["auth"])
app.include_router(user_routes.router, prefix="/api/user", tags=["users"])
app.include_router(chat_routes.router, prefix="/api/chat", tags=["chat"])
app.include_router(admin_routes.router, prefix="/api/admin", tags=["admin"])

@app.get("/")
def home():
    return {"message": "Hello world"}