import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <nav
      className={`bg-gray-800 p-4 fixed w-full z-20 top-0 left-0 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src="https://i.imgur.com/1uICo6i.jpeg"
              alt="NMTB Club Logo"
              className="h-10 mr-3"
            />
          </Link>
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold">
            NMTB
          </Link>
        </div>
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-white text-lg hover:underline">
            Home
          </Link>
          <Link to="/events" className="text-white text-lg hover:underline">
            Events
          </Link>
          <Link to="/join" className="text-white text-lg hover:underline">
            Join Us
          </Link>
          <Link to="/about" className="text-white text-lg hover:underline">
            About
          </Link>
        </div>
        <div className="lg:hidden block">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className=" inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center z-30 p-4"
        >
          <div className="flex flex-col items-center space-y-6">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-4xl font-semibold text-white hover:underline"
            >
              Home
            </Link>
            <Link
              to="/events"
              onClick={() => setIsOpen(false)}
              className="text-4xl font-semibold text-white hover:underline"
            >
              Events
            </Link>
            <Link
              to="/join"
              onClick={() => setIsOpen(false)}
              className="text-4xl font-semibold text-white hover:underline"
            >
              Join Us
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-4xl font-semibold text-white hover:underline"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
