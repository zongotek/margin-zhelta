import os
from motor.motor_asyncio import AsyncIOMotorClient

_client: AsyncIOMotorClient | None = None
_db = None

async def connect_db():
    global _client, _db
    _client = AsyncIOMotorClient(os.environ["MONGO_URL"])
    _db = _client[os.environ.get("DB_NAME", "app_db")]

async def close_db():
    global _client
    if _client: _client.close()

def get_db():
    if _db is None: raise RuntimeError("DB not initialized")
    return _db
