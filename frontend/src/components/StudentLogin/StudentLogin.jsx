import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setApiError("");
    if (!validate()) return;
    
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      console.log('Login response:', data); // Debug log
      
      // Fixed condition - only check for token existence
      if (data.token) {
  localStorage.setItem("studentToken", data.token);
  localStorage.setItem("studentData", JSON.stringify(data.student)); // Store student info
  navigate("/dashboard");
      } else {
        setApiError(data.message || "Login failed");
      }
    } catch (err) {
      console.error('Login error:', err); // Debug log
      setApiError("Network error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-blue-50 to-blue-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Student Login</h2>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <label className="block mb-1 font-medium text-blue-700">Email</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

        <label className="block mb-1 font-medium text-blue-700">Password</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

        {apiError && <div className="text-red-600 text-center my-2">{apiError}</div>}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </form>
    </div>
  );
}
