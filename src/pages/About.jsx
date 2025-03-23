import React from 'react';
import Timeline from '../components/Timeline';

const About = () => (
  <div className="bg-[#F9F5F0]">

    {/* Header Section */}
    <header className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('/assets/images/contact-hero.jpg')" }}>
      <div className="absolute inset-0 bg-[#0A0908] bg-opacity-50"
          style={{background: "linear-gradient(135deg, #0A0908, #22333B)",}}></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-extrabold tracking-wider" style={{ color: '#EAE0D5' }}>About Us</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto" style={{ color: '#C6AC8E' }}>
        At Kasun's, we celebrate the artistry of Sri Lankan craftsmanship, offering exquisite handmade products infused with passion and tradition. Our mission is to support local artisans while sharing the vibrant culture of Sri Lanka with the world.
        </p>
      </div>
    </header>

    <div className="bg-gradient-to-b from-[#EAE0D5] to-[#C6AC8E] p-16">
      {/* Mission & Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-br from-[#C6AC8E] to-[#5E503F] p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-[#EAE0D5] mb-4">Our Mission</h2>
          <p className="text-lg text-[#F9F5F0] leading-relaxed">
            Empower local artisans by providing a global platform to showcase their work, while educating others about the rich beauty of Sri Lankan craftsmanship.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[#C6AC8E] to-[#5E503F] p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-[#EAE0D5] mb-4">Our Vision</h2>
          <p className="text-lg text-[#F9F5F0] leading-relaxed">
            Envisioning a world where art tells stories, traditional crafting skills thrive, and local creators are celebrated globally.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        {/* <h2 className="text-4xl font-bold text-center text-[#0A0908] mb-10">
          Our Journey
        </h2> */}
        <div className="max-w-4xl mx-auto">
          <Timeline />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <a
          href="/workshops"
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#22333B] to-[#5E503F] text-[#EAE0D5] text-lg font-semibold rounded-full shadow-lg hover:from-[#5E503F] hover:to-[#22333B] transition-transform transform hover:scale-105"
        >
          Join Our Workshops
        </a>
      </section>
    </div>
  </div>
);

export default About;
