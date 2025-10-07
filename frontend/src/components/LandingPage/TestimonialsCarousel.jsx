const testimonials = [
  { name: "Aman Singh", text: "Margdarshan connected me with my dream college mentor.", logo: "/ngo-logo1.png" },
  { name: "Priya Shah", text: "Free counseling gave me options I never knew existed.", logo: "/ngo-logo2.png" }
];

export default function TestimonialsCarousel() {
  return (
    <div className="flex gap-8 justify-center flex-wrap">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-blue-50 p-6 rounded-xl shadow-lg w-80 text-center flex flex-col items-center">
          <img src={t.logo} alt="Partner Logo" className="w-16 h-16 object-contain mb-2" />
          <p className="italic text-blue-700">"{t.text}"</p>
          <span className="font-bold mt-3 text-blue-900">{t.name}</span>
        </div>
      ))}
    </div>
  );
}
