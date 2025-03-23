import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amaya Perera",
      image: "https://via.placeholder.com/100",
      feedback:
        "The handmade crafts are absolutely stunning! Each product has a unique touch, and I love the attention to detail. Highly recommend!",
      rating: 5,
    },
    {
      name: "Ruwan Silva",
      image: "https://via.placeholder.com/100",
      feedback:
        "Attending the workshops has been an amazing experience. I learned so much and made my own decor items. A must-try for anyone!",
      rating: 4,
    },
    {
      name: "Naveen Fernando",
      image: "https://via.placeholder.com/100",
      feedback:
        "The organic skincare products are of exceptional quality. They feel luxurious and are perfect for daily use. Will definitely purchase again!",
      rating: 5,
    },
    {
      name: "Naveen Fernando",
      image: "https://via.placeholder.com/100",
      feedback:
        "The organic skincare products are of exceptional quality. They feel luxurious and are perfect for daily use. Will definitely purchase again!",
      rating: 5,
    },
    {
      name: "Naveen Fernando",
      image: "https://via.placeholder.com/100",
      feedback:
        "The organic skincare products are of exceptional quality. They feel luxurious and are perfect for daily use. Will definitely purchase again!",
      rating: 5,
    },
    {
      name: "Naveen Fernando",
      image: "https://via.placeholder.com/100",
      feedback:
        "The organic skincare products are of exceptional quality. They feel luxurious and are perfect for daily use. Will definitely purchase again!",
      rating: 5,
    },
    {
      name: "Naveen Fernando",
      image: "https://via.placeholder.com/100",
      feedback:
        "The organic skincare products are of exceptional quality. They feel luxurious and are perfect for daily use. Will definitely purchase again!",
      rating: 5,
    },
    {
      name: "Naveen Fernando",
      image: "https://via.placeholder.com/100",
      feedback:
        "The organic skincare products are of exceptional quality. They feel luxurious and are perfect for daily use. Will definitely purchase again!",
      rating: 5,
    },
    {
      name: "Naveen Fernando",
      image: "https://via.placeholder.com/100",
      feedback:
        "The organic skincare products are of exceptional quality. They feel luxurious and are perfect for daily use. Will definitely purchase again!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0908] to-[#22333B] text-[#EAE0D5] py-12 px-6">
      <h1 className="text-center text-5xl font-extrabold mb-12 tracking-wide text-[#C6AC8E]">
        What Our Customers Say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#0A0908] border border-[#5E503F] rounded-lg p-6 shadow-xl hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-105 hover:bg-[#22333B] relative"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-12 h-12 bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] rounded-full flex items-center justify-center shadow-md">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4 mb-4 mt-8">
              <h2 className="text-xl font-semibold">{testimonial.name}</h2>
            </div>
            <p className="text-sm text-[#C6AC8E] italic">
              "{testimonial.feedback}"
            </p>
            <div className="flex items-center mt-4">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <FaStar key={i} className="text-[#C6AC8E] mr-1" />
              ))}
              {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                <FaStar key={i + 5} className="text-[#5E503F] mr-1" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
