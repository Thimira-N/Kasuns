import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSlider = () => {
  const testimonials = [
    { id: 1, text: "The craftsmanship is unparalleled!", author: "Jane Doe" },
    { id: 2, text: "The workshop was a memorable experience.", author: "John Smith" },
    { id: 3, text: "I’ve never seen such quality products before!", author: "Sara Lee" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    fade: true, // Smooth fade transitions
    arrows: false,
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "#C6AC8E", // Updated dot color
          borderRadius: "50%",
          margin: "0 auto",
          marginTop: "20px",
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots", // Add custom class for further styling
  };

  return (
    <div className="bg-[#0A0908] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#EAE0D5] mb-12 tracking-widest">
          What Our Customers Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="relative bg-gradient-to-r from-[#22333B] to-[#5E503F] rounded-2xl shadow-lg p-10 max-w-3xl mx-auto transform transition-all hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#C6AC8E] via-transparent to-transparent opacity-20 rounded-2xl pointer-events-none"></div>
                <p className="text-2xl text-[#EAE0D5] italic font-light leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="mt-6 text-right">
                  <span className="font-semibold text-[#C6AC8E] text-lg tracking-wide">
                    - {testimonial.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-12 flex justify-center">
          <a
            href="/testimonials"
            className="bg-[#C6AC8E] text-[#0A0908] px-6 py-3 rounded-lg font-medium shadow-md hover:bg-[#5E503F] hover:text-[#EAE0D5] transition duration-300 animate-bounce"
          >
            Read More Testimonials
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
