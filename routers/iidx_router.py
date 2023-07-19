from fastapi import APIRouter

router = APIRouter(
    prefix = "/iidx",
    tags=['iidx'],
    responses = {404: {"description": "Not found"}}
)

@router.get("/")
async def main():
    return {"text": "IIDX Page"}

