export default function Mentorship() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Mentorship & Book a Session</h2>
      <form className="bg-white shadow rounded p-6 max-w-md mb-6">
        <label className="block text-blue-900 font-semibold mb-1">Choose Mentor:</label>
        <select className="w-full mb-3 p-2 border rounded">
          <option>Anjali (Career Guidance)</option>
          <option>Rohit (Tech Internship)</option>
        </select>
        <label className="block text-blue-900 font-semibold mb-1">Date & Time:</label>
        <input type="datetime-local" className="w-full mb-3 p-2 border rounded" />
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-500">Book Session</button>
      </form>
      <div>
        <h3 className="text-lg font-semibold text-blue-600 mb-2">My Sessions</h3>
        <ul>
          <li>Oct 10, 4pm — Anjali (Career Guidance)</li>
          <li>Oct 15, 2pm — Rohit (Tech Internship)</li>
        </ul>
      </div>
    </div>
  );
}
