import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Center - Logo and Site Title */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://i.imgur.com/1uICo6i.jpeg"
              alt="NMTB Club Logo"
              className="h-10 mr-3"
            />
          </Link>
          <Link to="/" className="text-white text-2xl font-bold">
            NMTB
          </Link>
        </div>

        {/* Right End - Navbar Links */}
        <div className="flex items-center">
          <Link to="/" className="text-gray-300 hover:text-white mx-4">
            Home
          </Link>
          <Link to="/events" className="text-gray-300 hover:text-white mx-4">
            Events
          </Link>
          <Link to="/join" className="text-gray-300 hover:text-white mx-4">
            Join Us
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white mx-4">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
