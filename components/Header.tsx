'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { name: 'GALLERY', href: '#' },
  { name: 'SERVICES', href: '/#services' },
  { name: 'ABOUT US', href: '/about-us' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Images/tj-logo.jpg"
              alt="TJ's Construction and Remodeling Logo"
              width={140}
              height={110}
              className="object-contain h-[110px] w-[140px]"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="flex gap-10 lg:gap-16 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 uppercase tracking-wide font-medium hover:text-blue-700 transition-colors duration-150 text-base cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Phone Button */}
          <a
            href="tel:2709294476"
            className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-blue-700 transition-colors duration-150 text-base whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            270.929.4476
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Logo - Centered at top */}
        <div className="flex justify-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Images/tj-logo.jpg"
              alt="TJ's Construction and Remodeling Logo"
              width={120}
              height={95}
              className="object-contain h-[95px] w-[120px]"
              priority
            />
          </Link>
        </div>

        {/* Menu and Phone Row */}
        <div className="flex items-center justify-between px-4 pb-4">
          {/* Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-blue-700 transition-colors duration-150 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Phone Button */}
          <a
            href="tel:2709294476"
            className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow hover:bg-blue-700 transition-colors duration-150 text-sm whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            270.929.4476
          </a>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-white border-t border-gray-200 px-4 py-2">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 uppercase tracking-wide font-medium hover:text-blue-700 transition-colors duration-150 text-sm py-2 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 