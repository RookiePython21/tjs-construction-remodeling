'use client';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center text-center">
          <div className="w-full max-w-md mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Images/about-me.jpg"
              alt="About Us - Team Photo"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
          <h1 className="text-4xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to TJ&apos;s Construction and Remodeling! My name is TJ Payne. I&apos;m really really tall and I like crypto.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 