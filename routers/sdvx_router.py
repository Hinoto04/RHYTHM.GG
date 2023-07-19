from fastapi import APIRouter

router = APIRouter(
    prefix = "/sdvx",
    tags=['sdvx'],
    responses = {404: {"description": "Not found"}}
)

@router.get("/")
async def main():
    return {"text": "SDVX Page"}

