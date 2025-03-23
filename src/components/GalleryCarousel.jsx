import React, { useState, useEffect } from 'react';
import Galleryimg1 from '../assets/images/Gallery/gallery (1).jpg';
import Galleryimg2 from '../assets/images/Gallery/gallery (2).jpg';
import Galleryimg3 from '../assets/images/Gallery/gallery (3).jpg';
import Galleryimg4 from '../assets/images/Gallery/gallery (4).jpg';
import workshopImages from '../assets/images/Workshops/workshopImages';

const GalleryCarousel = () => {
  const images = [
    Galleryimg1,
    Galleryimg2,
    Galleryimg3,
    Galleryimg4,
    workshopImages.BasketWeaving,
    workshopImages.CeramicsWorkshop,
    workshopImages.HandloomWorkshop,
    workshopImages.JewelryCrafting,
    workshopImages.MetalworkTechniques,
    workshopImages.PotteryWorkshop,
    // workshopImages.TraditionalDyeing,
    workshopImages.TraditionalLampMaking,
    workshopImages.WeavingWorkshop,
    workshopImages.WoodCarving,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-carousel relative max-w-7xl mx-auto py-16 px-10 bg-gradient-to-b from-[#F6F4F1] to-white rounded-3xl shadow-2xl">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center mb-8 text-[#22333B]">
        Gallery Highlights
      </h2>

      {/* Image Slider */}
      <div className="relative">
        {/* Image */}
        <img
          src={images[currentIndex]}
          alt={`Gallery Image ${currentIndex + 1}`}
          className="w-full h-auto object-cover rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105"
        />

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white bg-gradient-to-b from-[#5E503F] to-[#22333B] p-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Previous Slide"
        >
          &#8249;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white bg-gradient-to-b from-[#5E503F] to-[#22333B] p-4 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Next Slide"
        >
          &#8250;
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-[#C6AC8E] shadow-lg scale-125'
                : 'bg-gray-300 hover:bg-[#C6AC8E]'
            }`}
          ></span>
        ))}
      </div>

      {/* Caption */}
      <div className="mt-8 text-center">
        <p className="text-lg text-[#5E503F] font-medium">
          Explore the creativity and craftsmanship that make every piece unique.
        </p>
      </div>
    </div>
  );
};

export default GalleryCarousel;
