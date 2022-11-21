import React from 'react';

function NavbarDropdown({
  link,
  eventOnHoverEnter,
  eventOnHoverLeave,
  isEventDropdownOpen,
}) {
  return (
    <div className="absolute z-50 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      {/* <!-- Events --> */}
      <div
        className="ml-3 relative"
        onMouseEnter={eventOnHoverEnter}
        onMouseLeave={eventOnHoverLeave}
      >
        <a
          href={link.url}
          className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
        >
          {link.text}
        </a>

        {/* Event Dropdown */}
        <div
          className={`${
            isEventDropdownOpen ? 'block' : 'hidden'
          } origin-top-right absolute left-0 mt-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
          tabIndex="-1"
        >
          {link.dropdowns.map((dropdown) => (
            <a
              href={dropdown.url}
              key={dropdown.url}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
              role="menuitem"
              tabIndex="-1"
              id="user-menu-item-0"
            >
              {dropdown.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavbarDropdown;
