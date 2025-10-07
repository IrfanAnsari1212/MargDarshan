import React from "react";
import { FaBook, FaVideo, FaUserFriends, FaBell, FaChartBar } from "react-icons/fa";

export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Welcome to Your Dashboard!</h1>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-8">
        <Card icon={<FaBook />} label="Articles" count={12} />
        <Card icon={<FaVideo />} label="Videos" count={7} />
        <Card icon={<FaUserFriends />} label="Mentors" count={3} />
      </div>
      {/* Upcoming Sessions */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-blue-600 mb-2 flex items-center gap-2"><FaBell /> Upcoming Sessions</h2>
        <ul className="bg-white rounded-lg shadow p-4">
          <li className="mb-2">Meet with Ms. Anjali (Career Guidance) - Oct 10, 4pm</li>
          <li>Mock Interview Session - Oct 15, 2pm</li>
        </ul>
      </section>
      {/* Analytics Chart Placeholder */}
      <section>
        <h2 className="text-xl font-bold text-blue-600 mb-2 flex items-center gap-2"><FaChartBar /> Growth Analytics</h2>
        {/* Insert chart library or chart SVG/img here */}
        <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center text-gray-400 h-48">
          [Placeholder: Progress chart goes here]
        </div>
      </section>
    </div>
  );
}

function Card({ icon, label, count }) {
  return (
    <div className="bg-white shadow-lg rounded-xl flex flex-col p-6 items-center hover:scale-105 transition">
      <span className="text-3xl text-blue-500 mb-2">{icon}</span>
      <div className="text-3xl font-extrabold text-blue-800 mb-1">{count}</div>
      <div className="text-lg font-semibold text-blue-900">{label}</div>
    </div>
  );
}
