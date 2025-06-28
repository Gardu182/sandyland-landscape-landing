const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Russel",
    date: "March 2023",
    quote:
      "Their knowledge of California native plants and efficient irrigation systems transformed our garden into an oasis that requires very little maintenance.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Steve Davis",
    date: "February 2024",
    quote:
      "Excellent service and attention to detail. Our yard has never looked better.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1671228457342-3c07f645ca78?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jennifer Smith",
    date: "January 2025",
    quote:
      "Professional and friendly team. Highly recommended for any landscaping project.",
  },
];

const Testimonials = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-[#f0eee8] p-8 m-5 md:m-2 rounded-xl text-center"
        >
          <img
            className="w-24 h-24 mb-3 rounded-full mx-auto shadow-lg object-cover"
            src={testimonial.image}
            alt={testimonial.name}
          />
          <h5 className="mb-1 text-xl font-bold text-gray-900">
            {testimonial.name}
          </h5>
          <p className="text-xs text-gray-500 mb-2">{testimonial.date}</p>
          {/* ⭐⭐⭐⭐⭐ */}
          <div className="flex justify-center mb-3 text-emerald-700 text-lg">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            {testimonial.quote}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
