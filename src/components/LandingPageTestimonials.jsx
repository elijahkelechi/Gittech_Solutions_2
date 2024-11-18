import React from "react";

const LandingPageTestimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Amazing service! The aerial footage exceeded our expectations.",
    },
    {
      name: "Jane Smith",
      feedback:
        "Professional and efficient. Helped us complete our project on time.",
    },
    {
      name: "Paul Brown",
      feedback:
        "High-quality results, and the team was fantastic to work with.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-12">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-teal-600 to-teal-400 p-6 rounded-lg shadow-lg"
        >
          <p className="italic text-gray-50">"{testimonial.feedback}"</p>
          <p className="text-gray-50 mt-4">- {testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

export default LandingPageTestimonials;
