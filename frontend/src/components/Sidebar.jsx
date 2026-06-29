import {
  LayoutDashboard,
  Monitor,
  Bell,
  Settings,
  LogOut,
  Activity
} from "lucide-react";

export default function Sidebar() {

  return (

    <aside className="sidebar">

      <div>

        <div className="logo">

          <div className="logo-circle">

            <Activity size={30}/>

          </div>

          <div>

            <h2>Agile Tech</h2>

            <p>Monitoring System</p>

          </div>

        </div>

        <nav>

          <a className="active">

            <LayoutDashboard size={20}/>

            Dashboard

          </a>

          <a>

            <Monitor size={20}/>

            Workstations

          </a>

          <a>

            <Bell size={20}/>

            Alerts

          </a>

          <a>

            <Settings size={20}/>

            Settings

          </a>

        </nav>

      </div>

      <button
  className="logout"
  onClick={()=>{
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  }}
>
  Logout
</button>

    </aside>

  );

}