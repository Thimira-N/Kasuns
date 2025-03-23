import React from 'react';
import WorkshopCard from '../components/WorkshopCard';
import workshopImages from '../assets/images/Workshops/workshopImages';

const Workshops = () => {
  const workshops = [
    { id: 1, title: 'Pottery Workshop', date: '2024-12-15', price: 3000, image: workshopImages.PotteryWorkshop },
    { id: 2, title: 'Weaving Workshop', date: '2024-12-20', price: 2500, image: workshopImages.WeavingWorkshop },
    { id: 3, title: 'Traditional Lamp Making', date: '2024-12-25', price: 3500, image: workshopImages.TraditionalLampMaking },
    { id: 4, title: 'Handloom Workshop', date: '2024-12-30', price: 2700, image: workshopImages.HandloomWorkshop },
    { id: 5, title: 'Ceramics Workshop', date: '2025-01-05', price: 3200, image: workshopImages.CeramicsWorkshop },
    { id: 6, title: 'Jewelry Crafting', date: '2025-01-10', price: 2800, image: workshopImages.JewelryCrafting },
    { id: 7, title: 'Wood Carving', date: '2025-01-15', price: 3300, image: workshopImages.WoodCarving },
    { id: 8, title: 'Metalwork Techniques', date: '2025-01-20', price: 4000, image: workshopImages.MetalworkTechniques },
    { id: 9, title: 'Traditional Dyeing', date: '2025-01-25', price: 3100, image: workshopImages.TraditionalDyeing },
    { id: 10, title: 'Basket Weaving', date: '2025-02-01', price: 2600, image: workshopImages.BasketWeaving },
  ];

  return (
    <div style={{ backgroundColor: '#EAE0D3' }}>
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/images/products-hero.jpg')" }}
      >
        <div
          className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"
          // style={{ backgroundColor: '#0A0908', opacity: 0.6 }}
          style={{background: "linear-gradient(135deg, #0A0908, #22333B)",}}
        ></div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-extrabold">Upcoming Workshops</h1>
          <p className="text-lg mt-2 max-w-xl mx-auto" style={{ color: '#C6AC8E' }}>
          Spaces are limited, so sign up today to secure your spot!
          </p>
        </div>
      </header>

      <div className="bg-gradient-to-b from-[#EAE0D5] to-[#C6AC8E] min-h-screen py-16 text-[#0A0908]">
        <div className="container mx-auto px-6">
          <p className="text-center text-xl max-w-3xl mx-auto mb-16 leading-relaxed tracking-wide">
            Join us for hands-on workshops that explore the artistry of Sri Lanka’s handcrafted products. Learn traditional techniques and immerse yourself in the rich cultural heritage, gaining valuable insights from skilled artisans. Spaces are limited, so sign up today to secure your spot!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {workshops.map(workshop => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href="/contact"
              className="inline-block px-16 py-4 bg-[#22333B] text-[#EAE0D5] text-lg font-bold rounded-full shadow-lg hover:bg-[#5E503F] transition-all ease-in-out duration-300 transform hover:scale-105 animate-pulse"
            >
              Book Your Spot
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
