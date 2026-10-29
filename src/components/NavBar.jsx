import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 md:px-10 lg:px-20 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="no-underline hover:no-underline focus:no-underline active:no-underline bg-green-400 hover:bg-green-700 transition duration-300 rounded-lg px-3 py-2 text-2xl font-bold text-black"
        >
          PROSPER
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-300 hover:text-green-400 ${
                  isActive ? "text-green-400 font-semibold" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Sign In */}
        <div className="hidden lg:block">
          <button className="bg-amber-600 hover:bg-amber-800 transition duration-300 text-white py-2 px-5 rounded-lg">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            // Close icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden flex flex-col gap-5 pt-5 pb-3"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition duration-300 hover:text-green-400 ${
                  isActive ? "text-green-400 font-semibold" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="bg-amber-600 hover:bg-amber-800 transition duration-300 text-white py-2 px-5 rounded-lg w-full">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
