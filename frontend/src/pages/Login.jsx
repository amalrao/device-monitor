import { useState } from "react";
import { Monitor } from "lucide-react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      username === "amanrao8871@gmail.com" &&
      password === "Aman@7470"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      onLogin();
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          <Monitor size={48} />
        </div>

        <h1>Agile Tech Solutions</h1>

        <p>
          Warehouse Surveillance Monitoring System
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Official Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          <button type="submit">
            Login to Dashboard
          </button>

        </form>

      </div>
    </div>
  );
}