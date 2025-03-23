import React from 'react';
import Hero from '../components/Hero';
import TestimonialsSlider from '../components/TestimonialsSlider';
import FeaturedSection from '../components/FeaturedSection';

const Home = () => (
  <div className="bg-[#0A0908]">
    {/* Hero Section */}
    <Hero />

    {/* Featured Section */}
    <div className="py-12 bg-[#22333B] px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#EAE0D5] mb-8">
        Discover the World of Sri Lankan Craftsmanship
      </h2>
      <FeaturedSection />
    </div>

    {/* Testimonials Section */}
    <TestimonialsSlider />

    {/* Workshops Section */}
    <div className="py-12 bg-gradient-to-b from-[#C6AC8E] to-[#5E503F] px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#EAE0D5] mb-8">
        Join Our Workshops
      </h2>
      <p className="text-center text-base sm:text-lg lg:text-xl text-[#EAE0D5] max-w-3xl mx-auto mb-6">
        Experience the magic of creating your own unique crafts with our guided workshops. 
        Perfect for beginners and enthusiasts alike!
      </p>
      <div className="mt-6 flex justify-center">
        <a
          href="/workshops"
          className="px-6 sm:px-8 lg:px-10 py-3 text-base sm:text-lg lg:text-xl font-semibold text-[#0A0908] bg-[#EAE0D5] hover:bg-[#C6AC8E] rounded-lg shadow-lg transition-all"
        >
          Book a Workshop
        </a>
      </div>
    </div>
  </div>
);

export default Home;
