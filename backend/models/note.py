import uuid
from datetime import datetime, timezone
from pydantic import BaseModel, Field

class NoteCreate(BaseModel):
    text: str = Field(min_length=1, max_length=2000)

class Note(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    text: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
