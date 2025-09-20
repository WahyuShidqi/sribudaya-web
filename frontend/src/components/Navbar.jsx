import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="navbar-section" className="sticky top-0 z-50">
      <nav className="border-gray-200 bg-[#e9e4dc] relative">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logo-sribudaya-full.png"
              className="h-10"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Sribudaya Resort
            </span>
          </Link>

          {/* Mobile toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Menu */}
          <div
            id="navbar-menu"
            className={`
              md:block md:w-auto
              ${
                isOpen
                  ? "max-h-96 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }
              overflow-hidden transition-all duration-500 ease-in-out
              w-full md:max-h-none md:opacity-100 md:translate-y-0
              absolute top-[90%] left-0 md:static
            `}
          >
            <ul className="flex flex-col font-medium mt-2 md:mt-0 rounded-lg bg-[#2f2f2f] md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-transparent shadow-lg md:shadow-none">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/booking", label: "Booking" },
                { to: "/facility", label: "Facility" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`
                      block py-2 px-3 rounded-sm transition-colors duration-300
                      text-[#e9e4dc] hover:text-white hover:bg-gray-700
                      md:p-0 md:hover:bg-transparent
                      md:text-black md:hover:text-blue-700
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
