import React from 'react';

const UserReview = () => {
    const testimonials = [
        {
            name: "Farzana H.",
            role: "Owner, CleanPro Services",
            text: "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
            name: "Ahmed R.",
            role: "Technician",
            text: "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Farzana H.",
            role: "Rafiq M., Homeowner",
            text: "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
            img: "https://randomuser.me/api/portraits/women/65.jpg",
        },
    ];

    return (
  <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Users Are Saying
        </h2>
        <p className="mt-3 text-gray-500 text-sm md:text-base">
          Real stories from clients, employees, and business owners who use <br /> our app every day.
        </p>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow/5 rounded-xl transition p-6 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default UserReview;