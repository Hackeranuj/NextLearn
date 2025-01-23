import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback: "This platform transformed my career! The courses are top-notch.",
      image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Amazing instructors and very interactive courses. Highly recommended!",
      image: "https://plus.unsplash.com/premium_photo-1677094310956-7f88ae5f5c6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Mark Lee",
      feedback: "Loved the hands-on projects. They really help in understanding the concepts.",
      image: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12 px-6 transition duration-300" id="FAQs">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
        What Our Students Say
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg rounded-lg p-6 text-center transition duration-300"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              src={testimonial.image}
              alt={testimonial.name}
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {testimonial.name}
            </h3>
            <p className="text-yellow-500 mt-2">
              {"★".repeat(Math.floor(testimonial.rating))}
              {testimonial.rating % 1 !== 0 ? "½" : ""}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
