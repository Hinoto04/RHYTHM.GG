from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import home_router, sdvx_router, iidx_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(home_router.router)
app.include_router(sdvx_router.router)
app.include_router(iidx_router.router)
