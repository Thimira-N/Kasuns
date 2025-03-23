import React from 'react';
import GalleryCarousel from '../components/GalleryCarousel';

const Gallery = () => (
  <div className="bg-gradient-to-b from-[#EAE0D5] via-[#F6F4F1] to-[#C6AC8E] min-h-screen font-sans leading-relaxed">
    {/* Hero Section */}
    <header
      className="relative bg-cover text-white h-96 flex flex-col items-center justify-center space-y-6"
      style={{ backgroundImage: "url('/assets/images/gallery-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#0A0908] bg-opacity-50"
          style={{background: "linear-gradient(135deg, #0A0908, #22333B)",}}></div>
      <div className="relative text-center text-[#EAE0D5] space-y-4">
        <h1 className="text-5xl font-extrabold tracking-wider drop-shadow-lg animate-fadeIn">
          Artistry in Every Detail
        </h1>
        <p className="text-lg md:text-xl font-medium animate-fadeIn delay-200" style={{ color: '#C6AC8E' }}>
          Explore the beauty and craftsmanship behind our handmade creations.
        </p>
      </div>
    </header>

    {/* Collection Section */}
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-[#22333B] mb-8 animate-fadeIn">
        Our Curated Collection
      </h2>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeIn delay-200">
        Discover a selection of our most cherished handmade products, behind-the-scenes stories, and unforgettable moments from our workshops. Each piece reflects the passion and skill of our artisans.
      </p>
      <div className="relative max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        <GalleryCarousel />
        <div className="absolute -top-14 -right-14 w-32 h-32 bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] rounded-full shadow-lg animate-pulse"></div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="py-16 bg-gradient-to-b from-[#F6F4F1] to-[#EAE0D5]">
      <div className="container mx-auto text-center space-y-6">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#22333B]">
          Share Your Journey with Us
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We would love to see how our crafts inspire you. Share your photos with us, and you might be featured in our next gallery update.
        </p>
        <a
          href="/contact"
          className="inline-block px-12 py-4 bg-gradient-to-r from-[#5E503F] to-[#C6AC8E] text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-110 hover:shadow-2xl transition-transform duration-300"
        >
          Submit Your Photos
        </a>
        <div className="flex justify-center items-center mt-10 space-x-4 animate-fadeIn">
          <div className="w-4 h-4 bg-[#5E503F] rounded-full"></div>
          <div className="w-4 h-4 bg-[#C6AC8E] rounded-full"></div>
          <div className="w-4 h-4 bg-[#22333B] rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
