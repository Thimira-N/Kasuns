import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductViewCard from '../components/ProductViewCard';


const ProductsDet = () => {

  const location = useLocation();
  const navigate = useNavigate();

  // Extract product data from state
  const product = location.state;

  // Redirect if no product is passed
  if (!product) {
    navigate("/"); // Redirect to home or products page if no product is selected
    return null;
  }


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#F9F6F2] via-[#EAE0D5] to-[#D6C8B2] py-10 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow Animation */}
      {/* <div className="absolute inset-0 bg-fixed opacity-10 animate-gradient blur-xl" style={{ backgroundImage: 'url(/assets/images/luxury-bg-pattern.png)' }}></div> */}
      <div className="absolute bg-fixed opacity-90 animate-gradient blur-xl">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Floating Decorative Element */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[80vw] h-[40vh] bg-gradient-to-r from-[#C6AC8E] via-[#E3DAC9] to-[#F5F3EF] rounded-full blur-[120px] opacity-20"></div>

      {/* Page Header
      <header className="relative z-10 text-center mb-12">
      <h1 className="text-5xl font-extrabold text-[#0A0908] tracking-wider uppercase">
            Our Exclusive Collection
          </h1>
          <p className="text-lg text-[#5E503F] mt-4 max-w-2xl mx-auto">
            Discover handcrafted luxury items, designed to transform your space into a haven of elegance and sophistication.
          </p>
      </header> */}

      {/* Product Spotlight */}
      <main className="relative z-10 max-w-screen-lg px-6">
        <div className="group relative">
          <ProductViewCard product={product} />
          {/* Glow Effect on Hover */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C6AC8E] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div> */}
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="relative z-10 mt-20 text-center">
        <Link
        to={'/products'}
        className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#22333B] via-[#5E503F] to-[#0A0908] rounded-full shadow-lg hover:shadow-2xl hover:from-[#0A0908] hover:to-[#22333B] transition-all duration-300">
          Shop Full Collection
        </Link>
      </section>
    </div>
  );
};

export default ProductsDet;
