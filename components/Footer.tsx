import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center px-4">
        <Image 
          src="/Images/tj-logo.jpg" 
          alt="TJ's Construction and Remodeling Logo" 
          width={128}
          height={128}
          className="w-32 h-auto mb-4 rounded shadow" 
        />
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-1">TJ&apos;s Construction and Remodeling</h3>
          <p className="mb-1">270.929.4476</p>
          <p className="text-blue-400">Owensboro, KY</p>
        </div>
        <p className="mt-4 text-xs text-gray-400">&copy; {new Date().getFullYear()} TJ&apos;s Construction and Remodeling. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 