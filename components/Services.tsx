import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Plans & Design',
    image: '/Images/plan-and-design.png', // Updated image
    description: 'We help you plan and design your dream space, ensuring every detail is tailored to your needs and style.'
  },
  {
    title: 'Kitchen Remodeling',
    image: '/Images/kitchen.jpg',
    description: 'Transform your kitchen into a modern, functional, and beautiful space for cooking and gathering.'
  },
  {
    title: 'Bathroom Remodeling',
    image: '/Images/bathroom.jpg',
    description: 'Upgrade your bathroom with contemporary designs, quality fixtures, and expert craftsmanship.'
  },
  {
    title: 'Backyard Remodeling',
    image: '/Images/deck.jpg',
    description: 'Create the perfect outdoor retreat for relaxation, entertainment, and family fun.'
  },
  {
    title: 'Additions',
    image: '/Images/addition.jpg',
    description: 'Expand your living space with seamless home additions, from new rooms to entire wings.'
  },
  {
    title: 'Exterior Finishing',
    image: '/Images/siding.jpg',
    description: 'Boost curb appeal and protect your home with professional siding and exterior finishing services.'
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-md flex flex-col items-center p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-48 relative mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">{service.title}</h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 