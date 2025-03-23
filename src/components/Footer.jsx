import React from 'react';
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#0A0908] text-[#EAE0D5] py-8">
    <div className="bg-gradient-to-t from-[#22333B] to-[#5E503F] text-[#EAE0D5] p-8">
      <div className="flex flex-col justify-between mb-8">
        <h1 className="text-4xl font-bold text-left">Kasun's</h1>
        <p className="text-sm font-semibold text-left">The more you order, the more we supply!</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-6 px-5 border-t border-zinc-500 pt-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Products</h2>
          <ul>
            <li><a href="#" className="hover:text-white">Home Décor</a></li>
            <li><a href="#" className="hover:text-white">Skincare</a></li>
            <li><a href="#" className="hover:text-white">Clothing</a></li>
            <li><a href="#" className="hover:text-white">Accessories</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <ul>
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/workshops" className="hover:text-white">Workshops</a></li>
            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
          </ul>
        </div>
        <div>
          {/* Subscribe Section */}
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide text-[#C6AC8E]">Subscribe to Our Newsletter</h2>
          <p className="mb-4 text-sm text-[#EAE0D5]">Stay updated with the latest trends and exclusive offers.</p>
          <form className="flex items-center w-full max-w-md bg-[#1C1B18] rounded-full shadow-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow max-sm:w-5 max-lg:w-5 px-6 py-3 text-sm text-[#C6AC8E] placeholder-[#757575] bg-transparent outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#C6AC8E] to-[#A4896E] text-white rounded-full hover:opacity-90 transition duration-300"
            >
              <FaPaperPlane className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-5 border-t border-zinc-500 pt-8">
        <div>
          <h3 className="font-bold">Colombo</h3>
          <p>123 Sri Lankan Craft Lane, Colombo 03</p>
        </div>
        <div>
          <h3 className="font-bold">Kandy</h3>
          <p>56 Temple Street, Kandy</p>
        </div>
        <div>
          <h3 className="font-bold">Contact Us :</h3>
          <p>+94 123 456 789</p>
        </div>
        <div>
          <h3 className="font-bold">Email :</h3>
          <p>info@kasunjayasekara.com</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-5 border-t border-zinc-500 pt-6">
        <p className="text-center mb-4 md:mb-0">© Kasun's 2024 - Celebrating Sri Lankan Artistry</p>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Contact Us</a>
          <a href="#" className="hover:text-white">FAQs</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
