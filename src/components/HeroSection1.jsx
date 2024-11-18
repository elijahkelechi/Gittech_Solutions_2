import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const HeroSection1 = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "At Global Integrated Idea Tech Solutions",
        "we pioneer innovative solutions",
        "that empower individuals, firms, and institutions",
        " to thrive in an ever-evolving world.",
        "Our expertise spans a broad spectrum of cutting-edge technologies.",
      ], // Texts to auto-type
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); // Clean up the effect on unmount
    };
  }, []);

  return (
    <div className="s ml-0 md:ml-8 lg:col-span-8 rounded bg-gradient-to-r from-secondary to-primary p-4 shadow-lg w-full">
      {/* Auto-writing effect using Typed.js */}
      <h1 className="text-left text-gray-50 font-bold md:font-thin text-xl md:text-5xl">
        <span ref={typedRef}></span>
      </h1>

      {/* Mobile display: Visible on md and smaller, hidden on lg */}
      <p className="block md:block  text-gray-50 mt-6 text-sm font-bold">
        Power your tech dreams today with GiiTechSolutions <br />
        <Link
          //   to="/products"
          className="btn btn-sm m-2 animate-pulse bg-neon-green hover:bg-green-500 transition duration-300 ease-in-out text-black font-medium"
        >
          Shop Now
        </Link>
      </p>
    </div>
  );
};

export default HeroSection1;
