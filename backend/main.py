from fastapi import FastAPI
from pydantic import BaseModel
from ai_service import analyze_txt
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextRequest(BaseModel):
    text: str   

@app.post("/analyze")
async def analyze(request: TextRequest):
    result = analyze_txt(request.text)
    return result