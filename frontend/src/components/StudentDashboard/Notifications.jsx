import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

export default function Notifications() {
  // Example data; swap for API call if needed
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your mentorship session is tomorrow at 4pm.", read: false },
    { id: 2, message: "New article on Interview Skills added.", read: true },
    { id: 3, message: "Update your profile for personalized suggestions.", read: false },
  ]);

  // Notification badge count
  const unreadCount = notifications.filter(n => !n.read).length;

  // Mark notifications as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map(n =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-blue-600 mb-2 flex items-center gap-2">
        <FaBell />
        Notifications
        {unreadCount > 0 && (
          <span className="bg-red-500 text-white rounded-full px-2 py-0.5 text-xs ml-2 font-bold">
            {unreadCount}
          </span>
        )}
      </h2>
      <ul className="bg-white rounded-lg shadow p-4">
        {notifications.length === 0 && (
          <li className="text-gray-500 font-medium">No notifications!</li>
        )}
        {notifications.map(n => (
          <li
            key={n.id}
            className={`flex justify-between items-center py-2 ${n.read ? "text-gray-600" : "text-blue-700 font-semibold"}`}
          >
            <span>{n.message}</span>
            {!n.read && (
              <button
                className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded hover:bg-green-200 font-semibold ml-4"
                onClick={() => markAsRead(n.id)}
              >
                Mark as read
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
