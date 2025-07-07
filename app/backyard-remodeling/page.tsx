'use client';
import React from 'react';
import PageHero from '../../components/PageHero';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ConsultationForm from '../../components/ConsultationForm';

export default function BackyardRemodelingPage() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero 
        title="Backyard Remodeling"
        backgroundImage="/Images/deck.jpg"
      />
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-700 mb-8">
          Turn your backyard into the ultimate outdoor living space for relaxation and entertainment. From decks and patios to landscaping and lighting, we create custom backyard remodels that fit your lifestyle. Browse our gallery below for ideas and let us help you design your perfect outdoor retreat!
        </p>
        <button
          onClick={openForm}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-150 cursor-pointer mb-4"
        >
          Start Consultation
        </button>
      </div>
      <Footer />
      <ConsultationForm isOpen={isFormOpen} onClose={closeForm} defaultJobType="Backyard Remodeling" />
    </div>
  );
} 