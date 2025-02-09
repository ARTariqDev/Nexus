import React, { useState } from "react";
import axios from "axios";

function Login({ onLogin, onSignupRedirect }) {
  const [email, setEmail] = useState(""); // Email input
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/auth/login", {
        email, // Ensure it sends the correct field
        password,
      });
      onLogin(response.data.user);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-[#111111] min-h-screen flex items-center justify-center text-white">
      <div className="w-full max-w-sm bg-[#111111] p-8 rounded-lg border border-[#ffaa00] shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <p className="text-[#ffaa00] mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-[#222222] text-white border border-[#ffaa00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffaa00]"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-[#222222] text-white border border-[#ffaa00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffaa00]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#ffaa00] text-black font-bold rounded-md hover:bg-[#e89a00] transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <button
            className="text-[#ffaa00] hover:underline"
            onClick={onSignupRedirect}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
