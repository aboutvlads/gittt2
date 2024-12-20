import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://cdn.prod.website-files.com/675c4bb1a6111f64bc92535b/675c4ff2a1636ad4ee500785_Untitled%20design%20(1).svg"
              alt="TripWingz"
              className="h-8 sm:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-black">
                <span>Deals</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2 py-2">
                <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Latest Deals</Link>
                <Link to="/hot-deals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hot Deals</Link>
                <Link to="/trending" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Trending</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-black">
                <span>How It Works</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2 py-2">
                <Link to="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About us</Link>
                <Link to="/our-mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our mission</Link>
                <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</Link>
              </div>
            </div>

            <Link to="/community" className="text-gray-700 hover:text-black">Community</Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/waitlist"
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Join Waitlist
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md text-gray-700 hover:text-black focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}