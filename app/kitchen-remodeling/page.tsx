'use client';
import React from 'react';
import PageHero from '../../components/PageHero';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ConsultationForm from '../../components/ConsultationForm';

export default function KitchenRemodelingPage() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero 
        title="Kitchen Remodeling"
        backgroundImage="/Images/kitchen.jpg"
      />
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-700 mb-8">
          Transform your kitchen into a space that inspires creativity and brings your family together. Our team specializes in custom kitchen remodels that blend style, function, and quality craftsmanship. Whether you want a modern update or a classic look, we&apos;ll help you design and build a kitchen you&apos;ll love for years to come. Need ideas? Browse our gallery below for inspiration!
        </p>
        <button
          onClick={openForm}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-150 cursor-pointer mb-4"
        >
          Start Consultation
        </button>
      </div>
      <Footer />
      <ConsultationForm isOpen={isFormOpen} onClose={closeForm} defaultJobType="Kitchen Remodeling" />
    </div>
  );
} 