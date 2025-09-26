"use client"
import React, { useState } from "react";

const faqs = [
  {
    question: "Is the app free to use?",
    answer:
      "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
  },
  {
    question: "Can I assign multiple employees to one job?",
    answer:
      "Absolutely. You can assign multiple employees to a single job, making it easy to collaborate and manage larger tasks.",
  },
  {
    question: "Does it work on both mobile and desktop?",
    answer:
      "Yes, our app is fully responsive and works seamlessly on mobile devices, tablets, and desktops.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We use enterprise-grade encryption and follow industry best practices to keep your data safe and private.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-green-50/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 sm:mt-3 text-gray-500 text-center text-sm sm:text-base">
          Quick answers to help you get the most out of our app.
        </p>

        {/* FAQ Items */}
        <div className="mt-10 sm:mt-12 space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white shadow border border-[#C7E6C5] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left focus:outline-none"
              >
                <span className="font-medium text-gray-800 text-sm sm:text-base md:text-lg">
                  {faq.question}
                </span>
                <span className="text-gray-500 text-lg sm:text-xl">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === idx && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 text-sm sm:text-base leading-relaxed">
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

export default FAQSection;
