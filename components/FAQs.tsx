'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What rooms do I remodel first?",
      answer: "We typically recommend starting with high-impact rooms that you use frequently. Kitchens and bathrooms often provide the best return on investment and significantly improve daily life. The kitchen is the heart of the home and a great first choice - updated kitchens can increase home value by 5-15%. Master bathrooms are another excellent starting point. If working with a limited budget, consider smaller projects like powder rooms or laundry rooms first. We can help prioritize rooms based on your needs, budget, and how the renovation will impact your daily routine during construction."
    },
    {
      id: 2,
      question: "What is the best way to pay for home remodel?",
      answer: "There are several excellent financing options for home remodels: Home Equity Loans (typically 3-6% interest) allow you to borrow against your home's equity, Home Equity Lines of Credit (HELOC) provide flexible access to funds, Cash-Out Refinancing can lower your mortgage rate while accessing equity, Personal Loans (6-12% interest) for smaller projects, and Credit Cards for minor renovations. We also offer in-house financing options and can connect you with preferred lenders. The best choice depends on your project size, timeline, and financial situation. We recommend consulting with a financial advisor to determine the most cost-effective option for your specific needs."
    },
    {
      id: 3,
      question: "I have an idea for my bathroom remodel, what are the next steps?",
      answer: "We start with a detailed consultation to understand your vision, needs, and budget. Our designers will help refine your ideas, suggest materials and fixtures that match your style, and create 3D renderings so you can visualize the final result. We'll discuss layout options, storage solutions, lighting, and any special features you'd like. Then we provide a comprehensive project timeline and detailed cost breakdown. This planning phase typically takes 2-3 weeks and ensures your bathroom remodel perfectly aligns with your vision while addressing practical considerations like ventilation, waterproofing, and electrical requirements."
    },
    {
      id: 4,
      question: "Is Remodeling worth the money?",
      answer: "Yes, remodeling is often a worthwhile investment when done strategically. Kitchen and bathroom remodels typically offer 60-80% return on investment in home value. Beyond financial returns, remodeling improves your quality of life, reduces maintenance costs, increases energy efficiency, and modernizes your living space. Strategic updates like improving layout, adding storage, or upgrading fixtures can significantly impact your daily comfort and satisfaction. The key is choosing projects that align with your long-term goals, whether that's increasing resale value or creating your dream home."
    },
    {
      id: 5,
      question: "What's the most popular home renovation? And why?",
      answer: "Kitchen remodels consistently rank as the most popular home renovation project. This is because kitchens are central to daily life and have a major impact on home value. Common kitchen updates include installing new countertops, upgrading cabinets, adding islands, and modernizing appliances. Bathroom remodels are the second most popular choice, followed by outdoor living spaces and master bedroom renovations. The popularity of these projects stems from their ability to improve both daily living and resale value. We can help you evaluate which renovation would best suit your home and lifestyle."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about home renovations and remodeling projects.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === faq.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="tel:2709294476"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow hover:bg-blue-700 transition-colors duration-150 text-base whitespace-nowrap inline-flex items-center gap-2 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            270.929.4476
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs; 