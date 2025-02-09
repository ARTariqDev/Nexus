import React from 'react';
import { useState } from "react";

function Login({ setToken, setPage }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      setToken(data.token);
      setPage("dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6 bg-gray-800 text-text rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-primary">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 my-2 bg-gray-700 border border-gray-600 text-text rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full p-2 my-2 bg-gray-700 border border-gray-600 text-text rounded-lg"
          onChange={handleChange}
        />
        <button className="w-full mt-4 p-2 bg-primary text-black font-bold rounded-lg hover:bg-yellow-500">
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <button className="text-primary underline" onClick={() => setPage("signup")}>
          Signup
        </button>
      </p>
    </div>
  );
}

export default Login;
