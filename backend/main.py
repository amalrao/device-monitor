from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from datetime import datetime, timedelta

from database import SessionLocal
from models import Base, Device
from database import engine
from schemas import DeviceSchema

# Create Database Tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Device Monitoring System")

# ---------------- CORS ---------------- #

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- Database ---------------- #

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ---------------- Routes ---------------- #

@app.get("/")
def root():
    return {
        "message": "Device Monitoring System Running"
    }


@app.post("/heartbeat")
def heartbeat(device: DeviceSchema, db: Session = Depends(get_db)):

    existing = db.query(Device).filter(
        Device.device_id == device.device_id
    ).first()

    if existing:

        existing.hostname = device.hostname
        existing.ip = device.ip
        existing.last_seen = datetime.now()

    else:

        new_device = Device(
            device_id=device.device_id,
            hostname=device.hostname,
            ip=device.ip,
            last_seen=datetime.now()
        )

        db.add(new_device)

    db.commit()

    return {
        "status": "Heartbeat Received"
    }


@app.get("/devices")
def get_devices(db: Session = Depends(get_db)):

    devices = db.query(Device).all()

    result = []

    for d in devices:

        seconds = (datetime.now() - d.last_seen).total_seconds()

        status = "Online"

        if seconds > 30:
            status = "Offline"

        result.append({

            "id": d.id,
            "device_id": d.device_id,
            "hostname": d.hostname,
            "ip": d.ip,
            "last_seen": d.last_seen,
            "status": status,
            "seconds": int(seconds)

        })

    return result