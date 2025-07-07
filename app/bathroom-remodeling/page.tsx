import React from 'react';
import PageHero from '../../components/PageHero';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BathroomRemodelingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero 
        title="Bathroom Remodeling"
        backgroundImage="/Images/bathroom.jpg"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-center text-gray-600 mb-12">
          Upgrade your bathroom with contemporary designs, quality fixtures, and expert craftsmanship.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-serif mb-6">Bathroom Remodeling Services</h2>
          <p className="text-gray-700 mb-4">
            Content coming soon...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
} 