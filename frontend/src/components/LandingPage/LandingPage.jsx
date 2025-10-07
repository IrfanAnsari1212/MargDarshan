import React from "react";
import { FaUserTie, FaLightbulb, FaHandshake, FaUserFriends, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import FeatureCard from "./FeatureCard";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 relative">
        <div className="z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-5 text-blue-800">
            Empowering Students with Guidance & Mentorship
          </h1>
          <p className="max-w-lg text-lg mb-9 text-gray-700 mx-auto">
            Margdarshan is your gateway to trusted mentors, expert advice, and a truly inclusive learning community.
          </p>
          <div className="flex justify-center gap-8">
            <Link to="/register" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg transition text-lg">
              Get Started
            </Link>
            <Link to="/login" className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold border border-blue-600 hover:bg-blue-50 shadow-lg transition text-lg">
              Login
            </Link>
          </div>
        </div>
        {/* (Optional) Hero Illustration */}
        <img src="/student-mentor-illustration.svg" alt="Mentorship" className="absolute bottom-0 right-0 w-1/4 opacity-40 pointer-events-none" />
      </section>
      
      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-3">About Margdarshan</h2>
          <p className="text-lg text-gray-600">
            Margdarshan provides free and premium career guidance and mentorship solutions, empowering every student—especially underprivileged youth—through supportive educational networks and expert advice.
          </p>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-8">Platform Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={<FaLightbulb className="text-yellow-500 text-3xl"/>} title="Career Guidance" description="Personalized resources to plan your career path." />
            <FeatureCard icon={<FaUserTie className="text-blue-500 text-3xl"/>} title="Expert Counselors" description="Mentoring by academic and industry experts." />
            <FeatureCard icon={<FaHandshake className="text-green-600 text-3xl"/>} title="Free Counseling" description="No-cost sessions for underprivileged students with NGO partners." />
            <FeatureCard icon={<FaUserFriends className="text-purple-600 text-3xl"/>} title="Interactive Community" description="Ask, answer, and engage with students and mentors." />
            <FeatureCard icon={<FaGlobe className="text-blue-700 text-3xl"/>} title="Global Access" description="Explore top colleges and online learning resources." />
          </div>
        </div>
      </section>
      
      {/* Testimonials & Partners Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-8">Student Success & Partners</h2>
          <TestimonialsCarousel />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-blue-900 text-white mt-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-center text-sm gap-4">
          <span>&copy; {new Date().getFullYear()} Margdarshan. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
