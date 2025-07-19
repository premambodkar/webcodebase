'use client';

import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);
      setScrollUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 ease-in-out ${
        isScrolled ? 'shadow-md bg-white' : 'bg-transparent'
      } ${scrollUp ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="Logo" className="h-9 w-auto" />
          <h1 className="text-xl font-semibold text-gray-900">YourCompany</h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          <button className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
            Get a Quote
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
