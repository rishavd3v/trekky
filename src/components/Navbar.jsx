import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import useTrekStore from "../store/trekStore";
import { useClickAway } from "react-use";

const Navbar = () => {
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const getStates = useTrekStore((state) => state.getStates);
  const [destinations, setDestinations] = useState([]);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const states = getStates();
    setDestinations(states);
  }, []);

  useClickAway(mobileMenuRef, () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  });

  const menuItems = [
    {
      menu: "Treks",
      options: ["Easy", "Moderate", "Challenging"],
    },
    { menu: "Destination", options: destinations },
    { menu: "Seasons", options: ["Summer", "Monsoon", "Winter"] },
    { menu: "About", options: [] },
  ];

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to={"/"} className="flex items-center space-x-2">
            {/* <img src="/images/logo.png" alt="Logo" className="h-8 w-8" /> */}
            <span className="font-bold text-xl">TrekMate</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems?.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-red-500 transition">
                  <Link to={`${item.menu.toLowerCase()}`}>{item.menu}</Link>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-primary shadow-md rounded-md py-2 w-40">
                  {item.options.map((option, index) => (
                    <Link
                      to={`treks?${item.menu==="Destination" ? 
                        "destination" : item.menu==="Treks"?"difficulty":"season"}=${option.toLowerCase()}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      key={index}
                    >
                      {option}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-1 rounded border text-gray-700 hover:bg-gray-100">
              Login
            </button>
            <button className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600">
              Sign Up
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4" ref={mobileMenuRef}>
          {menuItems.map((item, index) => (
            <div key={index} className="border-b pb-2">
              <button
                onClick={() =>
                  setActiveMobileMenu(activeMobileMenu === index ? null : index)
                }
                className="flex items-center justify-between w-full font-medium text-gray-700"
              >
                <span>{item.menu}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeMobileMenu === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeMobileMenu === index && item.options.length > 0 && (
                <div className="mt-2 ml-4 space-y-1 text-sm text-gray-600 transition-all duration-200 ease-in-out">
                  {item.options.map((option, idx) => (
                    <Link
                    to={`treks?${item.menu === "Destination"
                      ? "destination"
                      : item.menu === "Treks"
                      ? "difficulty"
                      : "season"}=${option}`}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    key={idx}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveMobileMenu(null);
                    }}
                  >
                    {option}
                  </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 border-t flex flex-col space-y-2">
            <button className="w-full border px-4 py-2 rounded text-gray-700 hover:bg-gray-100">
              Login
            </button>
            <button className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
