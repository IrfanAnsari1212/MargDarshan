import React from "react";
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import Articles from "./Articles";
import Videos from "./Videos";
import Notes from "./Notes";
import Mentorship from "./Mentorship";
import ChatForum from "./ChatForum";
import Analytics from "./Analytics";
import Profile from "./Profile";
import { Routes, Route } from "react-router-dom";
import Notifications from "./Notifications";
export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="articles" element={<Articles />} />
          <Route path="videos" element={<Videos />} />
          <Route path="notes" element={<Notes />} />
          <Route path="mentorship" element={<Mentorship />} />
          <Route path="chat" element={<ChatForum />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
        </Routes>
      </div>
    </div>
  );
}
