from fastapi import FastAPI
from routers import home_router, sdvx_router, iidx_router

app = FastAPI()

app.include_router(home_router.router)
app.include_router(sdvx_router.router)
app.include_router(iidx_router.router)
