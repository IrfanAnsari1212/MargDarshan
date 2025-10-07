export default function Articles() {
  const articles = [
    { title: "How to Choose a Career", author: "Dr. Sharma", date: "2025-09-20" },
    { title: "10 Skills You Need", author: "Ms. Kapoor", date: "2025-08-12" }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Articles</h2>
      <ul className="space-y-4">
        {articles.map((a, i) => (
          <li key={i} className="bg-white shadow rounded p-4">
            <div className="font-bold text-blue-900">{a.title}</div>
            <div className="text-gray-500 text-sm">By {a.author} • {a.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
