import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays, faPhone, faHouse } from "@fortawesome/free-solid-svg-icons";
import TechLogo from '../utils/Img/TechLogo.jpg';

const Header = () => {
  // State to manage the menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle menu toggle
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Get current pathname from location
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <nav className="bg-black/50 border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#fc03e3] text-black font-bold text-lg">
              T
            </div> */}
            <div className="flex items-center">
            <img
              src={TechLogo}
              alt="Technovanza Logo"
              className="h-10 w-10 rounded-full mr-2 object-cover" // Makes the image round
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap font-collegefont text-white">
            TECHNOVANZA
            </span>
            </div>

          </a>
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-darkgrey focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
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
          <div
            className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-darkgrey rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-transparent">
              <li>
                <Link
                  to="/"
                  className={`font-collegefont block py-2 px-3 rounded md:bg-transparent md:p-0 ${currentPath === '/' ? 'text-[#fc03e3]' : 'text-white'} hover:text-[#fc03e3]`}
                  aria-current={currentPath === '/' ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`font-collegefont block py-2 px-3 rounded md:bg-transparent md:p-0 ${currentPath === '/about' ? 'text-[#fc03e3]' : 'text-white'} hover:text-[#fc03e3]`}
                  onClick={closeMenu}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={`font-collegefont block py-2 px-3 rounded md:bg-transparent md:p-0 ${currentPath === '/events' ? 'text-[#fc03e3]' : 'text-white'} hover:text-[#fc03e3]`}
                  onClick={closeMenu}
                >
                  EVENTS
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/pricing"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${currentPath === '/pricing' ? 'text-[#fc03e3]' : 'text-white'} hover:text-[#fc03e3]`}
                  onClick={closeMenu}
                >
                  Pricing
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className={`font-collegefont block py-2 px-3 rounded md:bg-transparent md:p-0 ${currentPath === '/contact' ? 'text-[#fc03e3]' : 'text-white'} hover:text-[#fc03e3]`}
                  onClick={closeMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
