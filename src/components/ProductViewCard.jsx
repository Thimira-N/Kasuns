import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { CartContext } from '../context/CartContext';

const ProductViewCard = ({ product }) => {
  const navigate = useNavigate(); // Initialize useNavigate
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
      };

      
  const handleBuyNow = () => {
    // Navigate to checkout page with product data
    navigate('/checkout', { state: { product } });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto max-h-fit px-10 py-10">
      {/* image part */}
      <div className="rounded-3xl shadow-xl overflow-hidden duration-300 hover:shadow-2xl">  
          {/* Product Image */}
          <div className="relative group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full min-h-[400px] max-[500px]: object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-50 transition-opacity duration-500"></div>
            <span className="absolute bottom-4 left-4 bg-white text-[#0A0908] text-sm font-semibold py-1 px-3 rounded-full shadow-lg group-hover:translate-y-1 transition-all duration-300">
              New Arrival
            </span>
          </div>

          

          {/* Subtle Glow Effect */}
          {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-[#C6AC8E] opacity-0 hover:opacity-10 transition-opacity duration-500"></div> */}
     </div>


      {/* details part */}
      {/* Product Details */}
      <div className="">
         <div className="p-2">
            <h3 className="text-3xl font-extrabold text-[#0A0908] mb-2 tracking-wider uppercase">
              {product.name}
            </h3>
            <p className="text-sm text-wrap text-[#5E503F] leading-relaxed">
              {product.description || "No description available."}
            </p>

            <div className="grid grid-rows-4 md:grid-rows-2 max-h-96 my-auto py-6 items-center">
              <span className="text-3xl font-extrabold text-[#716152]">LKR {product.price.toFixed(2)}</span>
              <span className="text-xl font-semibold text-[#C6AC8E]">{product.rating} ★</span>
              <button
                // to={'/cart'}
                onClick={() => addToCart(product)}
                className="bg-gradient-to-r from-[#22333B] via-[#8A7E6D] to-[#0A0908] text-white text-center px-8 py-3 mt-8 rounded-full font-semibold hover:from-[#0A0908] hover:to-[#22333B] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Add to Cart
              </button>

              <button
                // to={'/checkout'}
                onClick={handleBuyNow}
                className="bg-gradient-to-r from-[#22333B] via-[#8A7E6D] to-[#0A0908] text-white text-center px-8 py-4 mt-2 rounded-2xl font-extrabold hover:from-[#543f29] hover:to-[#22333B] hover:scale-105 transition-all duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
       </div>


    </div>
  );
};

export default ProductViewCard;



