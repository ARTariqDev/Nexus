import React, { useState } from "react";
import axios from "axios";

function Signup({ onLoginRedirect }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/auth/signup", formData);
      setSuccess("Account created successfully! Please log in.");
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
      });
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="bg-[#111111] min-h-screen flex items-center justify-center text-white">
      <div className="w-full max-w-sm bg-[#111111] p-8 rounded-lg border border-[#ffaa00] shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        {error && <p className="text-[#ffaa00] mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#222222] text-white border border-[#ffaa00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffaa00]"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#222222] text-white border border-[#ffaa00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffaa00]"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#222222] text-white border border-[#ffaa00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffaa00]"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#222222] text-white border border-[#ffaa00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffaa00]"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Choose a password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#222222] text-white border border-[#ffaa00] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffaa00]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#ffaa00] text-black font-bold rounded-md hover:bg-[#e89a00] transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <button
            className="text-[#ffaa00] hover:underline"
            onClick={onLoginRedirect}
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;


