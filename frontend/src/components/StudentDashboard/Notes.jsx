export default function Notes() {
  const notes = [
    { title: "Roadmap to Getting a Good Internship", date: "2025-07-22" },
    { title: "Scholarship List for Indian Students", date: "2025-08-14" }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Notes</h2>
      <ul className="space-y-4">
        {notes.map((n, i) => (
          <li key={i} className="bg-white shadow rounded p-4">
            <div className="font-bold text-blue-900">{n.title}</div>
            <div className="text-gray-500 text-sm">{n.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
