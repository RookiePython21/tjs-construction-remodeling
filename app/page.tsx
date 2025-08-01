import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQs from '../components/FAQs';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="services">
          <Services />
        </section>
        <Features />
        <Testimonials />
        <FAQs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
