import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { name: 'GALLERY', href: '#' },
  { name: 'SERVICES', href: '#' },
  { name: 'PLANS AND DESIGN', href: '#' },
  { name: 'ABOUT US', href: '#' },
];

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
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
        <nav className="hidden md:flex gap-10 lg:gap-16 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 uppercase tracking-wide font-medium hover:text-blue-700 transition-colors duration-150 text-base"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Phone Button */}
        <a
          href="tel:2709294476"
          className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-blue-700 transition-colors duration-150 text-base whitespace-nowrap flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          270.929.4476
        </a>

        {/* Mobile Nav (optional: hamburger menu) */}
        {/* You can add a mobile menu here if needed */}
      </div>
      {/* Mobile nav links */}
      <nav className="flex md:hidden justify-center gap-6 pb-2">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-700 uppercase tracking-wide font-medium hover:text-blue-700 transition-colors duration-150 text-sm"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header; 