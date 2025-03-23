import React, { useState , useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { updateCartQuantity } = useContext(CartContext);
  

const addToCart = (product) => {
      // Retrieve cart items from localStorage
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      // Check if the product already exists in the cart
      const existingProduct = cart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Increase quantity if the product exists
        existingProduct.quantity += 1;
      } else {
        // Add new product to the cart
        cart.push({ ...product, quantity: 1 });
      }

       // Calculate total quantity of items in the cart
      const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

      // Save updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log(`Total items in cart: ${cartQuantity}`);
      // alert(`${product.name} has been added to the cart!`);

      // Show toast notification
      toast.success(
        <div className="flex items-center space-x-10">
          <FaShoppingCart size={50} />
          <span>{product.name} has been added to the cart!</span>
        </div>,
        {
          className: 'bg-gradient-to-b from-[#5E503F] to-[#22333B] text-[#EAE0D5] font-bold',
        }
      );

      // Update cart quantity in parent or global state
      updateCartQuantity(cartQuantity);

      // Change cart icon color
      setIsAddedToCart(true);
    };

  // Format the rating to one decimal place
  const formattedRating = product.rating.toFixed(1);

  return (
    <div
      className="relative max-w-sm rounded-2xl overflow-hidden bg-gradient-to-br from-[#22333B] to-[#5E503F] shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
      onClick={() => navigate(`/productsdet`, { state: product })}
      style={{ cursor: 'pointer' }}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#C6AC8E] to-[#EAE0D5] text-[#0A0908] text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {formattedRating} ★
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col bg-[#EAE0D5] rounded-b-2xl relative">
        <h2 className="text-xl font-extrabold text-[#0A0908] truncate">{product.name}</h2>
        <div className="flex items-center justify-between mt-2">
          <p className="text-lg text-[#22333B] font-semibold">
            LKR {product.price.toFixed(2)}
          </p>
          <FaShoppingCart
            size={30}
            color={isAddedToCart ? '#22333B' : '#C6AC8E'}
            onClick={(e) => {
              e.stopPropagation(); // Prevent navigation to product details
              addToCart(product);
            }}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            className="relative px-6 py-3 font-semibold rounded-lg shadow-lg bg-gradient-to-r from-[#5E503F] to-[#22333B] text-[#EAE0D5] hover:bg-gradient-to-r hover:from-[#C6AC8E] hover:to-[#5E503F] transition-all duration-500"
          >
            Buy Now
            <span className="absolute -top-2 -right-2 w-3 h-3 bg-[#C6AC8E] rounded-full animate-ping"></span>
          </button>

          <div className="flex flex-col items-end">
            <p className="text-sm text-[#5E503F] animate-pulse">SHIPPING</p>
            <p className="text-[#C6AC8E] font-bold text-sm animate-pulse">FREE</p>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#5E503F] to-[#C6AC8E] rounded-full"></div>
      </div>
    </div>
  );
};

export default ProductCard;


