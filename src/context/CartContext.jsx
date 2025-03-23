import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState(() => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      return cart.reduce((total, item) => total + item.quantity, 0);
    } catch (error) {
      console.error('Error reading cart from localStorage:', error);
      return 0;
    }
  });

  const updateCartQuantity = () => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
      setCartQuantity(totalQuantity);
    } catch (error) {
      console.error('Error updating cart quantity:', error);
      setCartQuantity(0);
    }
  };

  return (
    <CartContext.Provider value={{ cartQuantity, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
