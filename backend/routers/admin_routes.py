# For admins to handle file ingestion
import asyncio
from datetime import datetime

from fastapi import APIRouter, HTTPException, status
from pipeline.ingestion import generate_data_store
from services.rag_services import close_vector_store, reload_vector_store

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

        # 1. Release the Chroma SQLite file lock held by rag_services so that
        #    save_to_db() can delete and recreate the vectorstore directory.
        close_vector_store()

        # 2. Run the blocking ingestion work in a thread-pool executor so the
        #    async event loop is not blocked for the duration of the operation.
        loop = asyncio.get_event_loop()
        await loop.run_in_executor(None, generate_data_store)

        # 3. Reopen the vector store so subsequent RAG queries keep working.
        reload_vector_store()

        end_time = datetime.now()
        return {"message": f"Operation finished after {end_time - start_time}"}
    except Exception as e:
        # Always try to reload so the app doesn't stay in a broken state.
        try:
            reload_vector_store()
        except Exception:
            pass
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred: {e}",
        )