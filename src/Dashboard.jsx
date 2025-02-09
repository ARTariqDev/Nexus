import React from 'react';
function Dashboard({ setPage }) {
    const handleLogout = () => {
      localStorage.removeItem("token");
      setPage("login");
    };
  
    return (
      <div className="p-6 bg-gray-800 text-text rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold text-primary">Dashboard</h2>
        <p className="my-4">Welcome! You are logged in.</p>
        <button
          onClick={handleLogout}
          className="w-full p-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    );
  }
  
  export default Dashboard;
  