import React from 'react';
import { Link } from 'react-router-dom';
import potteryMasterpieces from '../assets/images/FeaturedSection/Pottery Masterpieces.jpg'
import interactiveWorkshops from '../assets/images/FeaturedSection/Interactive Workshops.jpg'

const FeaturedSection = () => {
  const features = [
    {
      id: 1,
      title: 'Pottery Masterpieces',
      description:
        'Explore our range of handmade pottery, each piece crafted with care and tradition.',
      image: potteryMasterpieces,
      link: '/products',
    },
    {
      id: 2,
      title: 'Interactive Workshops',
      description:
        'Join us for hands-on workshops and learn the art of traditional crafting.',
      image: interactiveWorkshops,
      link: '/workshops',
    },
  ];

  return (
    <section className="py-16 rounded-xl bg-[#EAE0D5]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0A0908]">Discover More</h2>
        <p className="text-lg text-[#5E503F] mt-4">
          Dive into the world of Sri Lankan craftsmanship and creativity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative overflow-hidden rounded-lg shadow-xl bg-[#22333B] group"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908] opacity-70 transition-opacity duration-300 group-hover:opacity-80"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-[#EAE0D5]">
              <div>
                <h3 className="text-3xl font-bold">{feature.title}</h3>
                <p className="mt-4 text-base">{feature.description}</p>
              </div>
              <Link
                to={feature.link}
                className="mt-6 px-6 py-3 bg-[#C6AC8E] text-[#0A0908] text-center font-semibold rounded-lg shadow-md hover:bg-[#5E503F] hover:text-[#EAE0D5] transition-transform transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
