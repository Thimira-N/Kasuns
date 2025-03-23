import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2021",
      title: "Founding of Kasun's",
      description:
        "Kasun started the journey to promote Sri Lankan craftsmanship, bringing together local artisans and unique handmade products.",
      position: 'left',
    },
    {
      year: "2022",
      title: "First Workshop Held",
      description:
        "The first pottery workshop was held in Colombo, inviting people to learn and create authentic handmade crafts.",
      position: 'right',
    },
    {
      year: "2023",
      title: "Expansion of Product Line",
      description:
        "Kasun's expanded its product line to include organic skincare products, home décor, and accessories, showcasing more of Sri Lanka's rich culture.",
      position: 'left',
    },
    {
      year: "2024",
      title: "Website Launch",
      description:
        "The online platform was launched, offering a curated collection of handmade products and enabling customers to book workshops directly from the website.",
      position: 'right',
    },
  ];

  return (
    <div className="p-8 rounded-xl bg-[#0A0908]">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-[#EAE0D5]">
        Our Journey
      </h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Tree-Like Connection Lines */}
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`mb-16 flex items-center ${
              event.position === 'left' ? 'flex-row' : 'flex-row-reverse'
            } relative space-y-8`}
            initial={{ opacity: 0, x: event.position === 'left' ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Year Circle */}
            <div className="relative flex justify-center items-center">
              <div className="w-14 h-14 bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] rounded-full shadow-lg flex items-center justify-center text-[#0A0908] font-bold text-2xl">
                {event.year}
              </div>
              {/* Connector Line */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 ${
                  event.position === 'left' ? 'right-full' : 'left-full'
                } h-1 w-8 bg-[#5E503F]`}
              ></div>
            </div>

            {/* Event Card */}
            <div
              className={`${
                index % 2 === 0 ? 'ml-6' : 'mr-6'
              } mt-4 bg-[#22333B] p-8 rounded-2xl shadow-xl w-full max-w-md hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-3xl font-semibold text-[#EAE0D5]">{event.title}</h3>
              <p className="mt-4 text-lg text-[#C6AC8E]">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {event.description}
                </motion.span>
              </p>
            </div>

            {/* Connection Line between Events */}
            {index < timelineEvents.length - 1 && (
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 ${
                  event.position === 'left' ? 'right-5/6' : 'left-5/6'
                } w-1 h-24 bg-[#5E503F]`}
              ></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
