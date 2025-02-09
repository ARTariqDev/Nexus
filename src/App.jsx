import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLogged = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(isLogged);
    if (isLogged) {
      setCurrentPage("welcome");
    }
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    setCurrentPage("welcome");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setCurrentPage("login");
  };

  const handleSignupRedirect = () => setCurrentPage("signup");
  const handleLoginRedirect = () => setCurrentPage("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] text-[#ffffff]">
      <div className="w-full max-w-md p-6 bg-[#1a1a1a] rounded-2xl shadow-lg">
        {currentPage === "login" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <Login onLogin={handleLoginSuccess} onSignupRedirect={handleSignupRedirect} />
          </div>
        )}
        {currentPage === "signup" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <Signup onLoginRedirect={handleLoginRedirect} />
          </div>
        )}
        {currentPage === "welcome" && (
          <div className="space-y-6 text-center">
            <h1 className="text-3xl font-extrabold text-[#ffaa00]">Welcome to the App!</h1>
            <p className="text-[#ffffff80]">You are successfully logged in.</p>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-[#111111] bg-[#ffaa00] hover:bg-[#ff9900] rounded-lg font-medium transition-all"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;