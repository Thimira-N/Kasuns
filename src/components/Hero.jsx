import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/FeaturedSection/Pottery Masterpieces.jpg'; // Adjust the path based on your file structure


const Hero = () => (
  <div
    className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white relative"
    style={{ backgroundImage: `url(${heroImage})` }} // Replace with the correct image path
  >
    {/* Overlay with Updated Gradient */}
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(135deg, #0A0908, #22333B)",
      }}
    ></div>

    {/* Content */}
    <div className="relative z-10 p-8 md:p-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow text-[#EAE0D5]">
        Authentic Sri Lankan Craftsmanship
      </h1>
      <p className="text-xl md:text-2xl mb-6 text-shadow text-[#C6AC8E]">
        Handmade with Passion
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link
          to="/products"
          className="bg-[#C6AC8E] hover:bg-[#5E503F] text-[#0A0908] px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          Shop Now
        </Link>
        <Link
          to="/workshops"
          className="bg-[#5E503F] hover:bg-[#22333B] text-[#EAE0D5] px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          Book a Workshop
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
