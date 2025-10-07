export default function Videos() {
  const videos = [
    { title: "Resume Building", url: "https://youtube.com", date: "2025-10-01" },
    { title: "Interview Tips", url: "https://youtube.com", date: "2025-09-15" }
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Videos</h2>
      <ul className="space-y-4">
        {videos.map((v, i) => (
          <li key={i} className="bg-white shadow rounded p-4">
            <div className="font-bold text-blue-900">{v.title}</div>
            <div className="text-gray-500 text-sm">{v.date}</div>
            <a href={v.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Watch</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
