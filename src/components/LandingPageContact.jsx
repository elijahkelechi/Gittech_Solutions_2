import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const LandingPageContact = () => {
  return (
    <footer className="relative bg-gradient-to-r from-teal-600 to-teal-400 text-white py-12">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Elevate Your Project?
        </h2>
        <p className="text-lg mb-8">
          Connect with us to explore how our drone solutions can meet your
          needs. Get in touch for a consultation today.
        </p>

        <a
          href="/contact"
          className="btn inline-block px-8 py-4 bg-info text-gray-50 rounded-md font-semibold hover:bg-teal-600 transition duration-300 mb-6"
        >
          Contact Us
        </a>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <FaFacebookF size={24} />
          </a>
          <span
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              fontFamily: "custom-font",
            }}
            className="text-gray-800 cursor-pointer hover:text-gray-900"
          >
            X
          </span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-700 mt-2"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center text-gray-900 mt-12 text-sm">
        © {new Date().getFullYear()} GIITech Drones. All rights reserved.
      </div>
    </footer>
  );
};

export default LandingPageContact;
