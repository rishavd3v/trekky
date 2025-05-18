import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const menuItems = ["Treks", "Destinations", "Seasons", "About"];

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-xl">TrekMate</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-red-500 transition">
                  <span>{item}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* Dropdown (static for now) */}
                <div className="absolute top-full mt-2 left-0 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Option 2
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-1 rounded border text-gray-700 hover:bg-gray-100">Login</button>
            <button className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600">Sign Up</button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b pb-2">
              <button className="flex items-center justify-between w-full font-medium text-gray-700">
                <span>{item}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Static dropdown example */}
              <div className="mt-2 ml-4 space-y-1 text-sm text-gray-600">
                <a href="#" className="block">Option 1</a>
                <a href="#" className="block">Option 2</a>
              </div>
            </div>
          ))}

          <div className="pt-4 border-t flex flex-col space-y-2">
            <button className="w-full border px-4 py-2 rounded text-gray-700 hover:bg-gray-100">Login</button>
            <button className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;