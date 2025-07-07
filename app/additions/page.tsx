'use client';
import React from 'react';
import PageHero from '../../components/PageHero';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ConsultationForm from '../../components/ConsultationForm';

export default function AdditionsPage() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero 
        title="Home Additions"
        backgroundImage="/Images/addition.jpg"
      />
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-700 mb-8">
          Need more space? Our seamless home additions blend perfectly with your existing structure, giving you the extra room you need without sacrificing style. From new bedrooms to expanded living areas, we handle every detail. Check out our gallery below for inspiration and see how we can help you grow your home!
        </p>
        <button
          onClick={openForm}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-150 cursor-pointer mb-4"
        >
          Start Consultation
        </button>
      </div>
      <Footer />
      <ConsultationForm isOpen={isFormOpen} onClose={closeForm} defaultJobType="Additions" />
    </div>
  );
} 