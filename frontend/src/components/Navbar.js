import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-20 top-0 left-0">
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
        <div className="block lg:hidden">
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
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-95 text-white flex flex-col items-center justify-center z-10 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden`}
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-3xl py-2 px-4 hover:bg-gray-700 rounded-lg"
          >
            Home
          </Link>
          <Link
            to="/events"
            onClick={() => setIsOpen(false)}
            className="text-3xl py-2 px-4 hover:bg-gray-700 rounded-lg"
          >
            Events
          </Link>
          <Link
            to="/join"
            onClick={() => setIsOpen(false)}
            className="text-3xl py-2 px-4 hover:bg-gray-700 rounded-lg"
          >
            Join Us
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-3xl py-2 px-4 hover:bg-gray-700 rounded-lg"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
