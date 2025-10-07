import React, { useState } from 'react';

export default function ChatForum() {
  const [messages, setMessages] = useState([
    { name: "You", text: "How do I choose an internship?" },
    { name: "Mentor", text: "Focus on your interests and apply early!" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (input) {
      setMessages([...messages, { name: "You", text: input }]);
      setInput("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Community Forum</h2>
      <div className="bg-white shadow rounded p-4 h-64 overflow-y-auto mb-4">
        {messages.map((m, i) => (
          <div key={i} className="my-2"><span className="font-semibold text-blue-800">{m.name}:</span> {m.text}</div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} className="border p-2 rounded flex-1" placeholder="Type message…" />
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500">Send</button>
      </form>
    </div>
  );
}
