import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of courses are offered?",
      answer:
        "We offer a wide range of courses, including beginner-friendly programming courses, advanced web development, backend development, and full-stack tracks.",
    },
    {
      question: "How much do the courses cost?",
      answer:
        "Our courses start at an affordable price of ₹399. Prices vary depending on the course level and content.",
    },
    {
      question: "Do you provide certification upon completion?",
      answer:
        "Yes, we provide a certificate of completion for every course you finish. These certificates can be shared on LinkedIn or added to your resume.",
    },
    {
      question: "Is the platform user-friendly for beginners?",
      answer:
        "Absolutely! Our platform is designed to be intuitive and easy to use. We also provide a dedicated FAQ and support section to help new users.",
    },
  ];

  return (
    <section
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 transition duration-300"
      
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-lg font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform ${
                    activeIndex === index ? "rotate-180" : ""
                  } transition-transform duration-300`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
