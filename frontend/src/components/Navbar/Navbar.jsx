import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBookReader, FaUser, FaSignOutAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("studentToken");
  
  // Get student info from localStorage if available
  const getStudentName = () => {
    try {
      const studentData = localStorage.getItem("studentData");
      return studentData ? JSON.parse(studentData).name : "Student";
    } catch {
      return "Student";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("studentToken");
    localStorage.removeItem("studentData");
    navigate("/");
  };

  const notificationCount = 3; // Replace with context or props if needed

<Link to="/dashboard/notifications" className="relative text-blue-700 hover:text-blue-900 mx-2">
  <FaBell className="text-xl" />
  {notificationCount > 0 && (
    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
      {notificationCount}
    </span>
  )}
</Link>

  return (
    <nav className="bg-white shadow-lg border-b border-blue-200 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <FaBookReader className="text-blue-600 text-2xl" />
            <span className="text-2xl font-bold text-blue-700">Margdarshan</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {!isLoggedIn ? (
              // Guest Navigation
              <>
                <Link 
                  to="/about" 
                  className="text-blue-700 hover:text-blue-900 font-medium transition"
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="text-blue-700 hover:text-blue-900 font-medium transition"
                >
                  Contact
                </Link>
                <Link 
                  to="/login" 
                  className="text-blue-700 hover:text-blue-900 font-medium transition"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Get Started
                </Link>
              </>
            ) : (
              // Logged-in Navigation
              <>
                <Link 
                  to="/dashboard" 
                  className="text-blue-700 hover:text-blue-900 font-medium transition"
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-2 text-blue-700">
                  <FaUser className="text-sm" />
                  <span className="font-medium">{getStudentName()}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-800 font-medium transition"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
