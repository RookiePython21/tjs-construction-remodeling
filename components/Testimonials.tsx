import React from 'react';

const testimonials = [
  {
    image: "/Images/testimonial1.png",
  },
  {
    image: "/Images/testimonial2.png",
  },
  {
    image: "/Images/testimonial3.png",
  },
  {
    image: "/Images/testimonial4.png",
  },
  {
    image: "/Images/testimonial5.png",
  },
  {
    image: "/Images/testimonial6.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-x-4">
          {testimonials.map((t, i) => (
            <div key={i} className="flex items-center justify-center">
              <img src={t.image} alt={`Testimonial ${i+1}`} className="w-full h-48 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 