from fastapi import APIRouter, HTTPException
from models.note import Note, NoteCreate
from database import get_db

router = APIRouter(prefix="/api/notes", tags=["notes"])

@router.get("")
async def list_notes():
    db = get_db()
    docs = await db.notes.find({}, {"_id": 0}).sort("created_at", -1).limit(100).to_list(100)
    return {"notes": docs}

@router.post("", status_code=201)
async def create_note(payload: NoteCreate):
    db = get_db()
    note = Note(text=payload.text)
    await db.notes.insert_one(note.model_dump())
    return note.model_dump()
