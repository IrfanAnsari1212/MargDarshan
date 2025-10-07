import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    educationLevel: "",
    careerInterests: "",
    careerGoals: "",
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.educationLevel) newErrors.educationLevel = "Education Level is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    setSuccess(false);
    if (!validate()) return;
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(res.ok){
        setSuccess(true);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setApiError(data.message || "Registration failed");
      }
    } catch (err) {
      setApiError("Network error");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-8 rounded-xl shadow-2xl bg-gradient-to-bl from-blue-50 to-blue-100">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-800">Student Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <label className="block mb-1 font-semibold text-blue-700">Name</label>
        <input className="w-full border border-gray-300 rounded px-3 py-2" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        {/* ...repeat for each field, similar as before... */}
        <label className="block mb-1 font-semibold text-blue-700">Email</label>
        <input className="w-full border border-gray-300 rounded px-3 py-2" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

        <label className="block mb-1 font-semibold text-blue-700">Password</label>
        <input className="w-full border border-gray-300 rounded px-3 py-2" type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

        <label className="block mb-1 font-semibold text-blue-700">Confirm Password</label>
        <input className="w-full border border-gray-300 rounded px-3 py-2" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}

        <label className="block mb-1 font-semibold text-blue-700">Education Level</label>
        <select className="w-full border border-gray-300 rounded px-3 py-2" name="educationLevel" value={formData.educationLevel} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="High School">High School</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Postgraduate">Postgraduate</option>
          <option value="Other">Other</option>
        </select>
        {errors.educationLevel && <p className="text-red-600 text-sm">{errors.educationLevel}</p>}

        <label className="block mb-1 font-semibold text-blue-700">Career Interests</label>
        <textarea className="w-full border border-gray-300 rounded px-3 py-2" name="careerInterests" value={formData.careerInterests} onChange={handleChange} />

        <label className="block mb-1 font-semibold text-blue-700">Career Goals</label>
        <textarea className="w-full border border-gray-300 rounded px-3 py-2" name="careerGoals" value={formData.careerGoals} onChange={handleChange} />

        {apiError && <div className="text-red-600 text-center my-2">{apiError}</div>}
        {success && <div className="text-green-600 text-center my-2">Registration successful! Redirecting to login...</div>}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2 hover:bg-blue-700 transition">Register</button>
      </form>
    </div>
  );
}
