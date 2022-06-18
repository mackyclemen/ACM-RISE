import React from 'react';
import { useState } from 'react';
import NavbarDropdown from './NavbarDropdown';

function Navbar() {
  const eventsDropdowns = [
    { text: 'Day 0 - Design', url: '/events#day0' },
    { text: 'Day 1 - Design', url: '/events#day1' },
    { text: 'Day 2 - Design', url: '/events#day2' },
    { text: 'Day 3 - Design', url: '/events#day3' },
    { text: 'Day 4 - Design', url: '/events#day4' },
    { text: 'Day 5 - Design', url: '/events#day5' },
    { text: 'Day 6 - Design', url: '/events#day6' },
  ];

  const links = [
    { text: 'Home', url: '/' },
    { text: 'Events', url: '/events', dropdowns: eventsDropdowns },
    { text: 'FAQ', url: '/faq' },
    { text: 'Partners', url: '/partners' },
    { text: 'About Us', url: '/about' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);

  function eventOnHoverEnter(e) {
    setIsEventDropdownOpen(true);
  }

  function eventOnHoverLeave(e) {
    setIsEventDropdownOpen(false);
  }

  function toggleMenu(e) {
    setIsMenuOpen((prev) => setIsMenuOpen(!prev));
  }

  return (
    <nav className="bg-gradient-to-r from-riseDarkBlue via-riseLightBlue to-riseDarkBlue">
      <div className="max-w-7xl mx-auto px-4 lg:px-24">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {/* show this when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              {/* show this when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center md:justify-between gap-40">
            <div className="flex-shrink-0 flex items-center">
              <a href="/">
                <img
                  className="block h-8 w-auto md:pl-6"
                  src="/images/fit-acm.png"
                  alt="acm fit logo"
                />
              </a>
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                {links.map((link) => (
                  <React.Fragment key={link.url}>
                    {link.dropdowns && (
                      <NavbarDropdown
                        link={link}
                        eventOnHoverEnter={eventOnHoverEnter}
                        eventOnHoverLeave={eventOnHoverLeave}
                        isEventDropdownOpen={isEventDropdownOpen}
                      />
                    )}
                    {!link.dropdowns && (
                      <a
                        href={link.url}
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
                      >
                        {link.text}
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="bg-gradient-to-r from-riseLightGold to-riseDarkGold text-white rounded-full py-1 px-3 hidden sm:block"
              id="user-menu-button"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 text-center">
          <a
            href="/"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Events
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            FAQ
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Partners
          </a>

          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
