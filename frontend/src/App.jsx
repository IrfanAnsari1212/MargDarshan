import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import StudentRegistration from "./components/StudentRegistration/StudentRegistration";
import StudentLogin from "./components/StudentLogin/StudentLogin";
import DashboardLayout from "./components/StudentDashboard/DashboardLayout";
import ProtectedRoute from "./components/StudentDashboard/ProtectedRoute";

// Simple info pages for footer, can be improved later
function About() {
  return (
    <div className="min-h-screen flex items-center justify-center text-2xl text-blue-800">
      About Margdarshan
    </div>
  );
}
function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center text-2xl text-blue-800">
      Contact Us
    </div>
  );
}
function Privacy() {
  return (
    <div className="min-h-screen flex items-center justify-center text-2xl text-blue-800">
      Privacy Policy
    </div>
  );
}
function Terms() {
  return (
    <div className="min-h-screen flex items-center justify-center text-2xl text-blue-800">
      Terms & Conditions
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<StudentRegistration />} />
      <Route path="/login" element={<StudentLogin />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      />
      {/* Dashboard with nested routes for student functionalities */}
      <Route path="/dashboard/*" element={<DashboardLayout />} />
      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
            Page not here
          </div>
        }
      />
    </Routes>
  );
}
