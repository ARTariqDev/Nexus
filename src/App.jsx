import React from 'react';
import { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [page, setPage] = useState(token ? "dashboard" : "login");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <div className="bg-background text-text min-h-screen flex items-center justify-center">
      {page === "signup" && <Signup setToken={setToken} setPage={setPage} />}
      {page === "login" && <Login setToken={setToken} setPage={setPage} />}
      {page === "dashboard" && token && <Dashboard setPage={setPage} />}
    </div>
  );
}

export default App;
