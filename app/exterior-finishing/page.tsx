'use client';
import React from 'react';
import PageHero from '../../components/PageHero';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ConsultationForm from '../../components/ConsultationForm';

export default function ExteriorFinishingPage() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero 
        title="Exterior Finishing"
        backgroundImage="/Images/siding.jpg"
      />
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-700 mb-8">
          Enhance your home's curb appeal and protect it from the elements with our expert exterior finishing services. From siding to trim, we use quality materials and skilled craftsmanship for lasting results. Browse our gallery below to see how we can transform your home's exterior!
        </p>
        <button
          onClick={openForm}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-150 cursor-pointer mb-4"
        >
          Start Consultation
        </button>
      </div>
      <Footer />
      <ConsultationForm isOpen={isFormOpen} onClose={closeForm} defaultJobType="Exterior Finishing" />
    </div>
  );
} 