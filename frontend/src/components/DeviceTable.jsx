import { Search, Monitor } from "lucide-react";
import { useState } from "react";

export default function DeviceTable({ devices }) {

  const [search, setSearch] = useState("");

  const filtered = devices.filter(
    (device) =>
      device.hostname.toLowerCase().includes(search.toLowerCase()) ||
      device.ip.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-card">

      <div className="table-header">

        <div>
          <h3>Workstations</h3>
          <p>Real-Time Connected Devices</p>
        </div>

        <div className="search-wrapper">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search workstation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-box"
          />

        </div>

      </div>

      <table className="device-table">

        <thead>

          <tr>

            <th>Device</th>
            <th>IP Address</th>
            <th>Last Seen</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {filtered.length === 0 ? (

            <tr>

              <td colSpan="4" className="empty">
                No Workstations Found
              </td>

            </tr>

          ) : (

            filtered.map((device) => (

              <tr key={device.id}>

                <td>

                  <div className="device-name">

                    <Monitor size={18} />

                    <strong>{device.hostname}</strong>

                  </div>

                </td>

                <td>{device.ip}</td>

                <td>
                  {new Date(device.last_seen).toLocaleString("en-IN")}
                </td>

                <td>

                  {device.status === "Online" ? (

                    <span className="status online">
                      ● Online
                    </span>

                  ) : (

                    <span className="status offline">
                      ● Offline
                    </span>

                  )}

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}