from fastapi import FastAPI
from db.database import engine
from sqlalchemy import text

app = FastAPI()

@app.get("/")
def root():
    try:
        #test connection
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        return {"message" : "Connected to MySQL successfully!"}
    except Exception as e:
        return {"error": str(e)}
     