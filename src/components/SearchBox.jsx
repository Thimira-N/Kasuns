import React, { useState } from 'react';

const SearchBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-2 border-teal-400 backdrop-blur-md rounded-full flex items-center px-0 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search our library"
        className={`bg-transparent border-none outline-none text-teal-400 text-lg transition-all duration-500 ${
          isHovered ? 'w-72 px-2' : 'w-0'
        }`}
      />
      {/* Search Button */}
      <a
        href=""
        className="w-12 h-12 bg-teal-400 rounded-full flex justify-center items-center ml-2"
      >
        <img  alt="Search" className="w-6" />
      </a>
    </div>
  );
};

export default SearchBox;
