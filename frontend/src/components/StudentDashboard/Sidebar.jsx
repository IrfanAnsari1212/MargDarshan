import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBook, FaVideo, FaStickyNote, FaUserFriends, FaChartLine, FaUser, FaComments } from "react-icons/fa";

const links = [
  { to: "/dashboard", icon: <FaHome />, label: "Dashboard" },
  { to: "/dashboard/articles", icon: <FaBook />, label: "Articles" },
  { to: "/dashboard/videos", icon: <FaVideo />, label: "Videos" },
  { to: "/dashboard/notes", icon: <FaStickyNote />, label: "Notes" },
  { to: "/dashboard/mentorship", icon: <FaUserFriends />, label: "Mentorship" },
  { to: "/dashboard/chat", icon: <FaComments />, label: "Chat/Forum" },
  { to: "/dashboard/analytics", icon: <FaChartLine />, label: "Analytics" },
  { to: "/dashboard/profile", icon: <FaUser />, label: "Profile" },
];

export default function Sidebar() {
  return (
    <nav className="w-64 bg-white shadow-xl flex flex-col py-8 px-4">
      <h2 className="mx-auto mb-10 text-2xl font-bold text-blue-700">Student Panel</h2>
      <ul className="flex flex-col gap-3">
        {links.map(link => (
          <li key={link.label}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex gap-3 items-center px-3 py-2 rounded-lg font-medium transition ${
                  isActive ? "bg-blue-700 text-white" : "text-blue-800 hover:bg-blue-200"
                }`
              }
              end // Makes home exact
            >
              {link.icon} {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
