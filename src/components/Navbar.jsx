import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { cartQuantity } = useContext(CartContext);
  

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#0A0908] text-[#EAE0D5] px-4 py-3 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Upper Part */}
        <div className="flex justify-between items-center">
          {/* Search Bar */}
          <div
            className={`relative flex items-center mt-2 ml-2 transition-all duration-300 ${
              isSearchFocused ? 'bg-[#EAE0D5] w-96 h-10' : 'bg-[#C6AC8E] w-10 h-10'
            } rounded-full shadow-md overflow-hidden`}
            onMouseEnter={() => setIsSearchFocused(true)}
            onMouseLeave={() => setIsSearchFocused(false)}
          >
            <input
              type="text"
              placeholder="What's on Your Mind?"
              className={`bg-transparent text-[#0A0908] text-sm md:text-base w-full py-2 px-4 outline-none transition-all duration-300 ${
                isSearchFocused ? 'block' : 'hidden'
              }`}
            />
            <FaSearch
              className={`text-[#0A0908] w-10 h-5 mx-2 transition-transform duration-300`}
            />
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="text-3xl font-bold tracking-wide hover:text-[#C6AC8E] transition duration-300"
            >
              Kasun's
            </Link>
          </div>

          {/* Sign In / Sign Up (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/signin"
              className="text-sm md:text-base font-semibold mt-2 text-[#EAE0D5] hover:text-[#C6AC8E] transition duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-[#C6AC8E] text-[#0A0908] rounded-full font-semibold hover:bg-[#EAE0D5] hover:text-[#0A0908] transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="relative flex items-center justify-center mt-6 mb-2">
          {/* Navigation Links */}
          <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-lg">
            <li>
              <Link to="/" className="hover:text-[#C6AC8E] transition duration-200">
                Home
              </Link>
            </li>

            {['About', 'Products', 'Workshops', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-[#C6AC8E] transition duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart and Hamburger Icon */}
          <div className="absolute right-0 flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart size={24} />
              <span className="absolute bottom-3 right-0 bg-[#df2a2a] text-[#EAE0D5] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartQuantity}
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-[#EAE0D5]"
              onClick={toggleMenu}
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0A0908] via-[#22333B] to-[#5E503F] flex flex-col items-center justify-center md:hidden transition-opacity duration-700 ease-in-out">
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-3 text-[#EAE0D5] hover:text-[#C6AC8E] text-2xl transition duration-300 transform hover:rotate-90"
            >
              ✖
            </button>

            {/* Navigation Links */}
            <ul className="space-y-8 text-center">
              {['Home', 'About', 'Products', 'Workshops', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-3 rounded-full bg-[#0A0908] hover:bg-[#C6AC8E] hover:text-[#0A0908] shadow-lg transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sign In / Sign Up (Visible on Mobile Menu) */}
            <div className="mt-8 space-y-4">
              <Link
                to="/signin"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-2 bg-[#C6AC8E] text-[#0A0908] rounded-full font-semibold hover:bg-[#EAE0D5] hover:text-[#0A0908] shadow-lg transition duration-300"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-2 bg-[#C6AC8E] text-[#0A0908] rounded-full font-semibold hover:bg-[#EAE0D5] hover:text-[#0A0908] shadow-lg transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

