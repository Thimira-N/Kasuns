// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom'; // Import useLocation

// const CheckoutPage = () => {
//   const location = useLocation(); // Access the passed state from cart.jsx
//   // Accept both cart items and a single product for checkout
//   const cartItems = location.state?.cartItems || []; // from cart.jsx
//   const buyNowItem = location.state?.product || null; // Handle single product

//   // Merge cartItems and buyNowItem into one list
//   const items = buyNowItem ? [{ ...buyNowItem, quantity: 1 }] : cartItems;

//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const shippingFee = "FREE";
//   const taxRate = 0.1; // 10% tax

//   const calculateTotals = () => {
//     const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     const tax = subtotal * taxRate;
//     const total = subtotal + tax;
//     return { subtotal, tax, total };
//   };

//   const { subtotal, tax, total } = calculateTotals();

//   const renderPaymentForm = () => {
//     switch (selectedPaymentMethod) {
//       case 'creditCard':
//         return (
//           <div className="mt-6 border border-[#E4DACD] rounded-xl p-6 shadow-lg bg-white/70 transition-transform duration-300 transform scale-100 opacity-100">
//             <h3 className="text-lg font-semibold text-[#2E2E2E] mb-4">Credit/Debit Card Details</h3>
//             <form className="grid gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Card Number</label>
//                 <input
//                   type="text"
//                   placeholder="Enter your card number"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Expiration Date</label>
//                   <input
//                     type="text"
//                     placeholder="MM/YY"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-[#2E2E2E] mb-2">CVV</label>
//                   <input
//                     type="text"
//                     placeholder="123"
//                     className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Cardholder Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter cardholder name"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
//                 />
//               </div>
//             </form>
//           </div>
//         );
//       case 'paypal':
//         return (
//           <div className="mt-6 border border-[#E4DACD] rounded-xl p-6 shadow-lg bg-white/70 transition-transform duration-300">
//             <h3 className="text-lg font-semibold text-[#2E2E2E] mb-4">PayPal</h3>
//             <p className="text-sm text-[#5A5A5A]">
//               You will be redirected to PayPal to complete your payment.
//             </p>
//           </div>
//         );
//       case 'cashOnDelivery':
//         return (
//           <div className="mt-6 border border-[#E4DACD] rounded-xl p-6 shadow-lg bg-white/70 transition-transform duration-300">
//             <h3 className="text-lg font-semibold text-[#2E2E2E] mb-4">Cash on Delivery</h3>
//             <p className="text-sm text-[#5A5A5A]">
//               Pay with cash upon delivery of your order.
//             </p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-8 py-10">
//       <h1 className="text-4xl font-bold text-[#2E2E2E] text-center mb-10">
//         Checkout
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Billing Details */}
//         <div className="bg-white/7o border border-[#E4DACD] rounded-xl p-6 shadow-lg">
//           <h2 className="text-xl font-semibold text-[#5E503F] mb-6">Billing Details</h2>
//           <form className="grid gap-6">
//             <div>
//               <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Phone Number</label>
//               <input
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Address</label>
//               <textarea
//                 placeholder="Enter your address"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none h-24"
//               ></textarea>
//             </div>
//           </form>
//         </div>

//         {/* Order Summary */}
//         <div className="bg-white/70 border border-[#E4DACD] rounded-xl p-6 shadow-lg">
//           <h2 className="text-xl font-semibold text-[#5E503F] mb-6">Order Summary</h2>
//           <div className="grid gap-4">
//             {items.map((item) => (
//               <div key={item.id} className="flex justify-between items-center border-b pb-2">
//                 <span className="text-lg text-[#2E2E2E]">{item.name} (x{item.quantity})</span>
//                 <span className="text-lg font-semibold text-[#716152]">
//                   LKR {item.price.toLocaleString()}
//                 </span>
//               </div>
//             ))}
//             <div className="flex justify-between items-center border-b pb-2">
//               <span className="text-lg text-[#2E2E2E]">Subtotal</span>
//               <span className="text-lg font-semibold text-[#716152]">
//                 LKR {subtotal.toLocaleString()}
//               </span>
//             </div>
//             <div className="flex justify-between items-center border-b pb-2">
//               <span className="text-lg text-[#2E2E2E]">Shipping</span>
//               <span className="text-lg font-semibold text-[#716152] animate-pulse">
//                  {shippingFee.toLocaleString()}
//               </span>
//             </div>
//             <div className="flex justify-between items-center border-b pb-2">
//               <span className="text-lg text-[#2E2E2E]">Tax (10%)</span>
//               <span className="text-lg font-semibold text-[#716152]">
//                 LKR {tax.toLocaleString()}
//               </span>
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <span className="text-xl font-bold text-[#2E2E2E]">Total</span>
//               <span className="text-xl font-extrabold text-[#22333B]"> 
//                 LKR {total.toLocaleString()} 
//                 </span> 
//                 </div> 
//                 </div> 
//                 </div> 
//                 </div>

//                   {/* Payment Methods */}
//             <div className="mt-10">
//                 <h2 className="text-xl font-semibold text-[#5E503F] mb-6">Payment Method</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <button
//                     onClick={() => setSelectedPaymentMethod('creditCard')}
//                     className={`border border-[#E4DACD] rounded-xl px-4 py-3 transition duration-300 ${
//                     selectedPaymentMethod === 'creditCard'
//                         ? 'bg-[#D5BAA1] text-white shadow-lg'
//                         : 'bg-white hover:bg-[#F3EDE3] text-[#2E2E2E]'
//                     }`}
//                 >
//                     Credit/Debit Card
//                 </button>
//                 <button
//                     onClick={() => setSelectedPaymentMethod('paypal')}
//                     className={`border border-[#E4DACD] rounded-xl px-4 py-3 transition duration-300 ${
//                     selectedPaymentMethod === 'paypal'
//                         ? 'bg-[#D5BAA1] text-white shadow-lg'
//                         : 'bg-white hover:bg-[#F3EDE3] text-[#2E2E2E]'
//                     }`}
//                 >
//                     PayPal
//                 </button>
//                 <button
//                     onClick={() => setSelectedPaymentMethod('cashOnDelivery')}
//                     className={`border border-[#E4DACD] rounded-xl px-4 py-3 transition duration-300 ${
//                     selectedPaymentMethod === 'cashOnDelivery'
//                         ? 'bg-[#D5BAA1] text-white shadow-lg'
//                         : 'bg-white hover:bg-[#F3EDE3] text-[#2E2E2E]'
//                     }`}
//                 >
//                     Cash on Delivery
//                 </button>
//                 </div>

//                 {renderPaymentForm()}
//             </div>

//             {/* Place Order Button */}
//             <div className="mt-10 text-center">
//                     <button
//                     onClick={() => setOrderPlaced(true)}
//                     className="px-10 py-4 bg-[#22333B] text-white text-lg font-bold rounded-xl shadow-lg hover:bg-[#1A282E] transition duration-300"
//                     >
//                     Place Order
//                     </button>
//                 </div>

//                 {/* Order Placed Popup */}
//                 {orderPlaced && (
//                     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//                     <div className="bg-white p-6 rounded-xl shadow-xl text-center w-96">
//                         <h2 className="text-2xl font-bold text-[#22333B] mb-4">
//                         Order Placed Successfully!
//                         </h2>
//                         <p className="text-[#5E503F] mb-6">
//                         Thank you for your purchase. Your order will be processed shortly.
//                         </p>
//                         <button
//                         onClick={() => setOrderPlaced(false)}
//                         className="px-6 py-3 bg-[#22333B] text-white text-lg font-semibold rounded-lg hover:bg-[#1A282E] transition duration-300"
//                         >
//                         Close
//                         </button>
//                     </div>
//                     </div>
//                 )}
//                 </div>
//   );
// };

// export default CheckoutPage;







import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebaseConfig'; // Import Firestore
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Firebase methods

const CheckoutPage = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const buyNowItem = location.state?.product || null;

  const items = buyNowItem ? [{ ...buyNowItem, quantity: 1 }] : cartItems;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const shippingFee = "FREE";
  const taxRate = 0.1;

  // Calculate totals
  const calculateTotals = () => {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const { subtotal, tax, total } = calculateTotals();

  // Render payment form based on selection
  const renderPaymentForm = () => {
    switch (selectedPaymentMethod) {
      case 'creditCard':
        return (
          <div className="mt-6 border rounded-xl p-6 shadow-lg bg-white/70">
            <h3 className="text-lg font-semibold mb-4">Credit/Debit Card Details</h3>
            <form className="grid gap-4">
              <input type="text" placeholder="Card Number" className="input-field" />
              <input type="text" placeholder="MM/YY" className="input-field" />
              <input type="text" placeholder="CVV" className="input-field" />
              <input type="text" placeholder="Cardholder Name" className="input-field" />
            </form>
          </div>
        );
      case 'paypal':
        return (
          <div className="mt-6 border rounded-xl p-6 shadow-lg bg-white/70">
            <h3 className="text-lg font-semibold mb-4">PayPal</h3>
            <p>You will be redirected to PayPal to complete your payment.</p>
          </div>
        );
      case 'cashOnDelivery':
        return (
          <div className="mt-6 border rounded-xl p-6 shadow-lg bg-white/70">
            <h3 className="text-lg font-semibold mb-4">Cash on Delivery</h3>
            <p>Pay with cash upon delivery.</p>
          </div>
        );
      default:
        return null;
    }
  };

  // Firebase - Place Order
  const placeOrder = async () => {
    if (!customerName || !email || !phoneNumber || !address || !selectedPaymentMethod) {
      alert('Please fill in all required fields and select a payment method.');
      return;
    }

    try {
      // Prepare order data
      const orderData = {
        customerName,
        email,
        phoneNumber,
        address,
        paymentMethod: selectedPaymentMethod,
        items: items.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        subtotal,
        tax,
        total,
        timestamp: serverTimestamp(),
      };

      // Save order to Firestore database (collection: "orders")
      const ordersCollection = collection(db, 'orders');
      await addDoc(ordersCollection, orderData);

      setOrderPlaced(true); // Show confirmation popup
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-8 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div className="bg-white/70 border rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
          <form className="grid gap-6">
            <input type="text" placeholder="Full Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="input-field" />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
            <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="input-field" />
            <textarea placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="input-field h-24"></textarea>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white/70 border rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between border-b pb-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>LKR {item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <span>Total</span>
            <span>LKR {total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <h2 className="text-xl font-semibold mt-10 mb-6">Payment Method</h2>
      <div className="flex gap-4">
        <button onClick={() => setSelectedPaymentMethod('creditCard')} className="btn">Credit Card</button>
        <button onClick={() => setSelectedPaymentMethod('paypal')} className="btn">PayPal</button>
        <button onClick={() => setSelectedPaymentMethod('cashOnDelivery')} className="btn">Cash on Delivery</button>
      </div>
      {renderPaymentForm()}

      {/* Place Order Button */}
      <button onClick={placeOrder} className="mt-10 btn">Place Order</button>

      {/* Confirmation Popup */}
      {orderPlaced && <div className="popup">Order Placed Successfully!</div>}
    </div>
  );
};

export default CheckoutPage;
