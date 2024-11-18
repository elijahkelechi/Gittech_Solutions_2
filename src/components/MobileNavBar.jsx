import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNavBar = () => {
  // State to manage the menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu visibility
  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex  md:hidden navbar mt-1 w-full z-50">
      <div className="navbar-start">
        <Link to="/">
          <img
            className="h-14 border border-solid border-white rounded-full"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="navbar-end flex items-center">
        <div
          className="btn custom-icon bg-info text-white rounded-full p-2 hover:bg-info transition duration-200 flex items-center justify-center cursor-pointer"
          onClick={handleToggleMenu} // Toggle menu on click
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
              <circle cx="2" cy="6" r="2" />
              <circle cx="2" cy="12" r="2" />
              <circle cx="2" cy="18" r="2" />
            </svg>
          )}
          GiiTech
        </div>
      </div>

      {/* Render the menu based on the isOpen state */}
      {isOpen && (
        <div className=" absolute block top-16 right-0 w-48 bg-gray-50 font-bold shadow-lg rounded-l-lg z-50">
          <Link to="/" className="block p-2 hover:bg-gray-200">
            Home
          </Link>
          <Link to="/aboutUs" className="block p-2 hover:bg-gray-200">
            About Us
          </Link>
          <Link to="/services" className="block p-2 hover:bg-gray-200">
            Services
          </Link>
          <Link to="/contactUs" className="block p-2 hover:bg-gray-200">
            ContactUs
          </Link>
          <Link className="block p-2 hover:bg-gray-200">Shop Now</Link>
          <Link to="/training" className="block p-2 hover:bg-gray-200">
            Get Trained
          </Link>
          <Link to="/events" className="block p-2 hover:bg-gray-200">
            Events
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
