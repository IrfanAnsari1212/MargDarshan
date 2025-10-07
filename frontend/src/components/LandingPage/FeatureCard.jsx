export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-xl hover:scale-105 hover:bg-blue-50 transition">
      <div>{icon}</div>
      <h3 className="text-xl font-semibold text-blue-700 my-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}
