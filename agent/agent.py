import time
import socket
import platform
import requests

import time
import socket
import requests

SERVER = "http://192.168.29.35:8000/heartbeat"

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