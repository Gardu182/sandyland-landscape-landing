import React, { useState } from "react";
import Logo from "../../assets/SandylandLandscape.png";

const navbarlinks = [
  { id: 1, title: "Home", link: "#home" },
  { id: 2, title: "About Us", link: "#about" },
  { id: 3, title: "Services", link: "#services" },
  { id: 4, title: "Gallery", link: "#gallery" },
  { id: 5, title: "Testimonials", link: "#testimonials" },
  { id: 6, title: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-300 shadow-md">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-5 md:px-5 py-2 md:py-2">
        <div>
          {/* Logo navbar */}
          <img src={Logo} alt="logo site" className="w-[65px]" />
        </div>

        {/* Hamburger button */}
        <button onClick={toggleMenu} className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-12">
            {navbarlinks.map((link) => (
              <li key={link.id}>
                <a
                  className="text-base md:text-lg hover:scale-110 transform-all inline-block duration-300"
                  href={link.link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-[#006242] transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {navbarlinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                className="hover:text-sky-200 text-white"
                href={link.link}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
