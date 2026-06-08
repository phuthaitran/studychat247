# For admins to handle file ingestion
import asyncio
from datetime import datetime

from fastapi import APIRouter, HTTPException, status
from pipeline.ingestion import prepare_chunks
from services.rag_services import reingest_documents

from models import user
from services.auth import CurrentUser

router = APIRouter()


def _is_admin(current_user: user.User) -> bool:
    """Return True if the user has the ADMIN role."""
    return any(ur.role.role == user.RoleEnum.ADMIN for ur in current_user.roles)


@router.get("/ingest")
async def data_ingestion(current_user: CurrentUser):
    if not _is_admin(current_user):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized for this operation",
        )

    try:
        start_time = datetime.now()

        # Step 1: Load, annotate, and split documents in a thread pool so
        # the async event loop is not blocked during file I/O.
        loop = asyncio.get_running_loop()
        chunks = await loop.run_in_executor(None, prepare_chunks)

        # Step 2: Replace the vector store collection in-place.
        # reingest_documents() reuses the open chromadb client, so it NEVER
        # closes or deletes the SQLite file — no [WinError 32] possible.
        # It is also run in a thread pool because add_documents() is CPU-heavy.
        await loop.run_in_executor(None, reingest_documents, chunks)

        end_time = datetime.now()
        return {"message": f"Operation finished after {end_time - start_time}"}

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Ingestion failed: {e}",
        )