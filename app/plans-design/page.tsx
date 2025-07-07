'use client';
import React from 'react';
import PageHero from '../../components/PageHero';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ConsultationForm from '../../components/ConsultationForm';

export default function PlansDesignPage() {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero 
        title="Plans & Design"
        backgroundImage="/Images/plan-and-design.png"
      />
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-700 mb-8">
          Every great remodel starts with a solid plan. Our design experts work with you to create a vision that fits your style, needs, and budget. From initial sketches to detailed blueprints, we make sure your project starts off right. Need inspiration? Check out our gallery below to see what's possible!
        </p>
        <button
          onClick={openForm}
          className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-150 cursor-pointer mb-4"
        >
          Start Consultation
        </button>
      </div>
      <Footer />
      <ConsultationForm isOpen={isFormOpen} onClose={closeForm} defaultJobType="Plans & Design" />
    </div>
  );
} 