import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Blurred Background Image */}
      <Image
        src="/Images/whole-room2.png"
        alt="Remodeled Room blurred background"
        fill
        className="object-cover object-center blur-sm scale-105 brightness-75 z-0"
        aria-hidden="true"
        priority
      />
      {/* Foreground Full Photo */}
      <Image
        src="/Images/whole-room2.png"
        alt="Remodeled Room"
        fill
        className="object-contain object-center z-10"
        priority
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-20" />
      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
           Built to Match Your Imagination
        </h1>
        <p className="text-base sm:text-lg text-gray-100 mb-6 max-w-xl mx-auto drop-shadow">
          Kitchens, bathrooms, additions, and more—quality craftsmanship for your vision.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-150"
        >
          Start Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero; 