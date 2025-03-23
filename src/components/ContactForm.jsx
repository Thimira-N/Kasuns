import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required. Please fill them out.');
      setFormSubmitted(false);
      return;
    }

    try {
      await addDoc(collection(db, 'contactMessages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      });
      setError('');
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Error adding document: ', err);
    }
  };

  return(
      <div className="max-w-3xl mx-auto p-10 bg-gradient-to-br from-[#F9F5F0] to-[#C6AC8E] rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-[#0A0908]">
          Get in Touch
        </h2>
        <p className="text-center text-gray-700 mb-12 text-lg leading-relaxed">
          We're here to help. Fill out the form below and let us know how we can assist you.
        </p>
        <form 
          className="space-y-8"
          onSubmit={handleSubmit}
          >

          <div>
            <label
              className="block text-sm font-medium text-[#22333B] mb-2 uppercase tracking-wide"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-4 bg-[#F9F5F0] rounded-lg border-2 border-[#C6AC8E] focus:outline-none focus:border-[#5E503F] focus:ring-2 focus:ring-[#5E503F] transition-all text-[#22333B] placeholder-[#A6A29E]"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-[#22333B] mb-2 uppercase tracking-wide"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-4 bg-[#F9F5F0] rounded-lg border-2 border-[#C6AC8E] focus:outline-none focus:border-[#5E503F] focus:ring-2 focus:ring-[#5E503F] transition-all text-[#22333B] placeholder-[#A6A29E]"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-[#22333B] mb-2 uppercase tracking-wide"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full p-4 bg-[#F9F5F0] rounded-lg border-2 border-[#C6AC8E] focus:outline-none focus:border-[#5E503F] focus:ring-2 focus:ring-[#5E503F] transition-all text-[#22333B] placeholder-[#A6A29E]"
              rows="5"
            ></textarea>
          </div>
            {error && (
                <div className="mb-4 max-w-md font-extrabold text-red-500 text-center">
                  {error}
                </div>
              )}
          <button
            type="submit"
            className="w-full py-4 text-lg font-semibold text-white bg-[#C6AC8E] rounded-full hover:bg-[#5E503F] focus:outline-none focus:ring-4 focus:ring-[#5E503F] focus:ring-opacity-50 transition-all"
          >
            Send Message
          </button>

            {formSubmitted && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="bg-white p-6 rounded-xl shadow-xl text-center w-96">
                  <h2 className="text-2xl font-bold text-[#22333B] mb-4">
                    Message Sent!
                  </h2>
                  <p className="text-[#5E503F] mb-6">
                    Thank you for reaching out. We will get back to you soon.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 bg-[#22333B] text-white text-lg font-semibold rounded-lg hover:bg-[#1A282E] transition duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

        </form>
      </div>
  );
};

export default ContactForm;









// import React, { useState } from 'react';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.message) {
//       setError('All fields are required. Please fill them out.');
//       setFormSubmitted(false);
//       return;
//     }

//     try {
//       await addDoc(collection(db, 'contactMessages'), {
//         name: formData.name,
//         email: formData.email,
//         message: formData.message,
//         timestamp: serverTimestamp(),
//       });
//       setError('');
//       setFormSubmitted(true);
//       setFormData({ name: '', email: '', message: '' });
//     } catch (err) {
//       setError('Failed to send message. Please try again later.');
//       console.error('Error adding document: ', err);
//     }
//   };

//   return (
//     <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#EAE0D5] via-[#C6AC8E] to-[#5E503F] py-10 overflow-hidden">
//       <form
//         className="w-full max-w-lg bg-[#22333B] p-8 rounded-2xl shadow-2xl text-[#EAE0D5] transform transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-3xl font-bold mb-8 text-center text-[#C6AC8E] tracking-wider">
//           Get in Touch
//         </h2>

//         {error && (
//           <div className="mb-4 max-w-md text-red-500 text-center">
//             {error}
//           </div>
//         )}

//         <div className="mb-6">
//           <label htmlFor="name" className="block text-sm font-semibold mb-2">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg bg-[#5E503F] text-[#EAE0D5] placeholder-[#D6CFC7] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E]"
//             placeholder="Enter your full name"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="email" className="block text-sm font-semibold mb-2">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg bg-[#5E503F] text-[#EAE0D5] placeholder-[#D6CFC7] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E]"
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="message" className="block text-sm font-semibold mb-2">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg bg-[#5E503F] text-[#EAE0D5] placeholder-[#D6CFC7] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E]"
//             placeholder="Write your message..."
//             rows="5"
//           ></textarea>
//         </div>

//         <div className="mt-14 mb-6 flex justify-center animate-ping animate-zoomIn delay-1000">
//           <div className="w-20 h-1 bg-gradient-to-l from-[#5E503F] to-[#C6AC8E] rounded-full"></div>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 rounded-lg bg-gradient-to-r from-[#5E503F] to-[#22333B] text-[#EAE0D5] font-semibold tracking-wide shadow-lg transition-all duration-500 hover:from-[#C6AC8E] hover:to-[#5E503F] hover:scale-105"
//         >
//           Send Message
//         </button>

//         {formSubmitted && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//             <div className="bg-white p-6 rounded-xl shadow-xl text-center w-96">
//               <h2 className="text-2xl font-bold text-[#22333B] mb-4">
//                 Message Sent!
//               </h2>
//               <p className="text-[#5E503F] mb-6">
//                 Thank you for reaching out. We will get back to you soon.
//               </p>
//               <button
//                 onClick={() => setFormSubmitted(false)}
//                 className="px-6 py-3 bg-[#22333B] text-white text-lg font-semibold rounded-lg hover:bg-[#1A282E] transition duration-300"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         {/* <div className="mt-6 flex justify-center animate-ping animate-zoomIn delay-1400">
//           <div className="w-20 h-1 bg-gradient-to-r from-[#5E503F] to-[#C6AC8E] rounded-full"></div>
//         </div> */}
//       </form>
//     </div>
//   );
// };

// export default ContactForm;