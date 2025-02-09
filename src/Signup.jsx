import React from 'react';
import { useState } from "react";

function Signup({ setToken, setPage }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5001/api/auth/signup", {
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
      <h2 className="text-2xl font-bold text-primary">Signup</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-4">
        {["firstName", "lastName", "username", "email", "password"].map((field) => (
          <input
            key={field}
            type={field === "password" ? "password" : "text"}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            required
            className="w-full p-2 my-2 bg-gray-700 border border-gray-600 text-text rounded-lg"
            onChange={handleChange}
          />
        ))}
        <button className="w-full mt-4 p-2 bg-primary text-black font-bold rounded-lg hover:bg-yellow-500">
          Signup
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <button className="text-primary underline" onClick={() => setPage("login")}>
          Login
        </button>
      </p>
    </div>
  );
}

export default Signup;
