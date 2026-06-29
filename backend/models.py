from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

from database import Base


class Device(Base):
    __tablename__ = "devices"

    id = Column(Integer, primary_key=True, index=True)
    device_id = Column(String, unique=True)
    hostname = Column(String)
    ip = Column(String)
    last_seen = Column(DateTime, default=datetime.utcnow)