import React from 'react';
import Image from 'next/image';

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
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/Images/tj-logo.jpg"
            alt="TJ's Construction and Remodeling Logo"
            width={140}
            height={110}
            className="object-contain h-[110px] w-[140px]"
            priority
          />
        </a>

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
          className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-blue-700 transition-colors duration-150 text-base whitespace-nowrap"
        >
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