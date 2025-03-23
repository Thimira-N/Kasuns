import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkshopCard = ({ workshop }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate(`/register/${encodeURIComponent(workshop.title , workshop.image)}`, {
      state: { workshopImage: workshop.image },
    });
  };

  return (
    <div className="relative max-w-sm rounded-2xl overflow-hidden bg-gradient-to-b from-[#22333B] to-[#5E503F] shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
      {/* Image Section */}
      <div className="relative">
        <img
          src={workshop.image || '/path-to-default-image.jpg'}
          alt={workshop.title}
          className="w-full h-56 object-cover rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
        <div className="absolute bottom-4 left-4 bg-[#C6AC8E] text-[#0A0908] text-sm font-semibold px-4 py-1 rounded-lg shadow-md">
          {workshop.title}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 bg-[#EAE0D5] rounded-b-2xl relative">
        <p className="text-lg font-semibold text-[#22333B]">
          <strong>Date:</strong> {workshop.date}
        </p>
        <p className="text-lg font-semibold text-[#22333B] mt-2">
          <strong>Price:</strong> LKR {workshop.price}
        </p>
        <p className="mt-4 text-sm text-[#5E503F] leading-relaxed">
          {workshop.description}
        </p>

        <button
          className="mt-6 w-full px-6 py-3 font-semibold rounded-lg shadow-lg bg-gradient-to-r from-[#5E503F] to-[#22333B] text-[#EAE0D5] hover:from-[#C6AC8E] hover:to-[#5E503F] transition-all duration-500"
          onClick={handleRegister}
        >
          Register Now
        </button>

        {/* Decorative Divider */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#5E503F] to-[#C6AC8E] rounded-full"></div>
      </div>
    </div>
  );
};

export default WorkshopCard;
