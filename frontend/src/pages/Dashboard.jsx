import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import DeviceTable from "../components/DeviceTable";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [devices, setDevices] = useState([]);

  const loadDevices = async () => {
    try {
      const res = await axios.get("https://device-monitor-api-0yl1.onrender.com");
      setDevices(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadDevices();

    const interval = setInterval(() => {
      loadDevices();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const online = devices.filter(d => d.status === "Online").length;
  const offline = devices.filter(d => d.status === "Offline").length;

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar onRefresh={loadDevices} />

        <div className="stats-grid">
  <StatsCard
    title="Total Workstations"
    value={devices.length}
    color="#2563eb"
  />

  <StatsCard
    title="Online"
    value={online}
    color="#16a34a"
  />

  <StatsCard
    title="Offline"
    value={offline}
    color="#dc2626"
  />

  <StatsCard
    title="Last Refresh"
    value="5 Sec"
    color="#f59e0b"
  />
</div>

        <DeviceTable devices={devices} />

      </main>

    </div>
  );
}