import time
import socket
import requests

SERVER_URL = "https://device-monitor-api-0yl1.onrender.com/heartbeat"
# SERVER_URL = "http://127.0.0.1:8000/heartbeat"

while True:
    try:
        data = {
            "device_id": socket.gethostname(),
            "hostname": socket.gethostname(),
            "ip": socket.gethostbyname(socket.gethostname())
        }

        r = requests.post(SERVER_URL, json=data, timeout=5)

        print("Heartbeat Sent:", r.status_code)

    except Exception as e:
        print("Error:", e)

    time.sleep(10)