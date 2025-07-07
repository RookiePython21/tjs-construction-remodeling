'use client';

import React from 'react';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  backgroundImage: string;
}

const PageHero = ({ title, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Blurred Background Image */}
      <Image
        src={backgroundImage}
        alt={`${title} blurred background`}
        fill
        className="object-cover object-center blur-sm scale-105 brightness-75 z-0"
        aria-hidden="true"
        priority
      />
      {/* Foreground Full Photo */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-contain object-center z-10"
        priority
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-20" />
      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHero; 