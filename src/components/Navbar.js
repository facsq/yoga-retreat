import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-transparent z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        <div className="text-zinc-700 font-bold text-xl whitespace-nowrap">Yoga Retreat</div>
        <div className="flex items-center">
          <button className="text-zinc-700 font-medium md:hidden" onClick={toggleMenu}>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <ul className={`hidden md:flex md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Home</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">About Us</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Treatments</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Programs</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Benefits</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Billing</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container mx-auto py-2 px-4 bg-custom-gray rounded-md shadow-lg md:hidden">
          <ul className="space-y-2">
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Home</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">About Us</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Treatments</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Programs</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Benefits</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Billing</a>
            </li>
            <li className="text-zinc-700 font-medium whitespace-nowrap">
              <a href="/#" className="menu-link">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
