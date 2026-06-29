from pydantic import BaseModel


class DeviceSchema(BaseModel):
    device_id: str
    hostname: str
    ip: str