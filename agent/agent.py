import time
import socket
import platform
import requests

import time
import socket
import requests

SERVER_URL = "https://device-monitor-api-0yl1.onrender.com"

while True:
    try:
        data = {
            "device_id": socket.gethostname(),
            "hostname": socket.gethostname(),
            "ip": socket.gethostbyname(socket.gethostname())
        }

        r = requests.post(SERVER, json=data, timeout=5)

        print("Heartbeat Sent:", r.status_code)

    except Exception as e:
        print("Error:", e)

    time.sleep(10)