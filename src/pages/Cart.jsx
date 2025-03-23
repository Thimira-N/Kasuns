import React, { useState, useEffect, useContext } from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { updateCartQuantity } = useContext(CartContext);
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle checkout navigation
  const handleProceedToCheckout = () => {
    navigate('/checkout', { state: { cartItems } }); // Pass cart items as state
  };

  useEffect(() => {
    // Load cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    );
    updateCart(updatedCart);
    updateCartQuantity(id, Math.max(1, newQuantity));  // Update the quantity in the global context
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart);
    updateCartQuantity(id, 0);  // Ensure global cart context reflects removal
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6 sm:p-10 lg:p-20 bg-gradient-to-b from-[#EAE0D5] to-[#C6AC8E] min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-center text-[#0A0908]">
        Your Cart
      </h1>
      {cartItems.length > 0 ? (
        <div className="space-y-6 md:space-y-8">
          {/* Cart Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center justify-center rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-black"
                style={{
                  height: '300px',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    filter: 'brightness(0.4)',
                  }}
                ></div>
                <div className="relative z-10 text-center p-6 text-[#EAE0D5]">
                  <h2 className="text-xl md:text-2xl font-semibold">{item.name}</h2>
                  <p className="text-lg text-[#C6AC8E] mt-2">LKR {item.price}</p>
                  <div className="flex items-center justify-center mt-4 space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-[#5E503F] text-[#EAE0D5] p-2 rounded-full hover:bg-[#C6AC8E] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <FaMinus />
                    </button>
                    <span className="px-4 py-2 bg-[#EAE0D5] text-[#0A0908] font-bold rounded-full text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-[#5E503F] text-[#EAE0D5] p-2 rounded-full hover:bg-[#C6AC8E] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 text-[#C6AC8E] hover:text-red-600 transition-colors"
                  aria-label="Remove item"
                >
                  <FaTrash size={20} />
                </button>
                <p className="absolute bottom-4 right-4 text-lg font-bold text-[#EAE0D5]">
                  LKR {item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="sticky bottom-0 bg-[#0A0908] p-4 md:p-6 rounded-xl shadow-2xl z-40">
            <h2 className="text-2xl md:text-3xl font-bold text-right text-[#EAE0D5]">
              Total: LKR {totalPrice}
            </h2>
            <button
              onClick={handleProceedToCheckout} // Using the function to pass the cart data to checkout page
              className="w-full mt-4 md:mt-6 bg-[#C6AC8E] text-[#0A0908] text-lg font-semibold py-3 md:py-4 rounded-lg hover:bg-[#5E503F] transition-transform transform hover:scale-105"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl md:text-2xl text-[#5E503F] mb-4 md:mb-8">Your cart is currently empty.</p>
          <Link
            to="/products"
            className="bg-[#C6AC8E] hover:bg-[#5E503F] text-[#0A0908] px-6 md:px-8 py-3 md:py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
