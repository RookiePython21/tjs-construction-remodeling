import React from 'react';
import PageHero from '../../components/PageHero';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BackyardRemodelingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero 
        title="Backyard Remodeling"
        backgroundImage="/Images/deck.jpg"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-center text-gray-600 mb-12">
          Create the perfect outdoor retreat for relaxation, entertainment, and family fun.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-serif mb-6">Backyard Remodeling Services</h2>
          <p className="text-gray-700 mb-4">
            Content coming soon...
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
} 