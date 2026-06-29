import { RefreshCw, Bell, Wifi, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="navbar">

      <div className="navbar-left">

        <h1>Warehouse Surveillance Monitoring System</h1>

        <p>
          Agile Tech Solutions Pvt. Ltd. • Real-Time Workstation Health Dashboard
        </p>

      </div>

      <div className="nav-right">

        <div className="live">

          <Wifi size={16} />

          <span>System Online</span>

        </div>

        <div className="clock">

          <Clock size={16} />

          <span>{time}</span>

        </div>

        <button className="icon-btn">

          <Bell size={18} />

        </button>

        <button className="refresh">

          <RefreshCw size={18} />

          <span>Refresh</span>

        </button>

      </div>

    </header>
  );
}