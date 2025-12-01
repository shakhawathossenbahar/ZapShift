import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

// FAQ DATA
const faqData = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. It functions by improving shoulder alignment and reducing strain.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes! It is designed to comfortably fit and support a wide range of body shapes and ages.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Consistent use encourages better posture habits and may reduce back discomfort for many users.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some versions include smart reminders that vibrate when slouching is detected.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You will get notified via email or SMS based on your selected preference.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center mb-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          Frequently Asked Question (FAQ)
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly. Achieve proper
          alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            /* Make FAQ item card responsive + hover effect */
            className={`w-full bg-white rounded-lg shadow-sm border transition-all duration-300 ${
              openIndex === index ? "border-green-400" : "border-gray-200"
            }`}
          >
            {/* FAQ HEADER */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 md:p-5 text-left"
            >
              <span className="font-semibold text-gray-800 text-sm md:text-base">
                {faq.question}
              </span>

              {/* Smooth rotating icon */}
              <span className="text-xl text-gray-700 transition-transform duration-300">
                {openIndex === index ? <IoChevronUp /> : <IoChevronDown />}
              </span>
            </button>

            {/* FAQ BODY (Animated Height) */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="px-4 md:px-5 pb-4 text-gray-600 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA BUTTON */}
      <div className="text-center mt-10">
        <button
          className="
          bg-lime-500 hover:bg-lime-600 text-black px-7 py-3 rounded-full
          flex items-center gap-2 mx-auto font-medium
          transition-all duration-300 hover:scale-105
        "
        >
          See More FAQ’s
          <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
            ➜
          </span>
        </button>
      </div>
    </section>
  );
}
