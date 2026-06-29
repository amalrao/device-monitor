import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const login = () => setLoggedIn(true);

  if (!loggedIn) {
    return <Login onLogin={login} />;
  }

  return <Dashboard />;
}

export default App;