import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import droneImage from "../assets/droneImage.webp";

const Herosectio2 = () => {
  const typedRef2 = useRef(null); // Typing effect for the paragraph

  return (
    <div className="relative md:ml-8 lg:ml-8 lg:mt-24 md:col-span-8 text-center ">
      <div className="inset-0 absolute rounded bg-gradient-to-r from-secondary to-primary opacity-90 p-6 shadow-lg"></div>

      {/* Content div */}
      <div className="relative p-4">
        <h1 className="hidden md:flex text-left text-gray-50 font-thin text-4xl md:text-4xl">
          <span>Our Mission</span>
        </h1>

        {/* Header for mobile screens */}
        <h1 className="md:hidden text-left text-gray-50 font-thin text-3xl pt-4">
          Our Mission
        </h1>

        {/* Paragraph with typing effect */}
        <p className="text-gray-50 text-left font-bold mt-4">
          <span>
            At Global Integrated Idea Tech Solutions, we pioneer innovative
            solutions that empower individuals, firms, and institutions to
            thrive in an ever-evolving world. Our expertise spans a broad
            spectrum of cutting-edge technologies
          </span>
        </p>

        {/* Drone Image Section with Shop Now CTA */}
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-white uppercase tracking-wider pt-6 border-b-4 border-primary shadow-lg">
          Available Products
        </h1>

        <div className="relative mt-8">
          <img
            src={droneImage}
            alt="Drone"
            className="w-full h-80 rounded-md object-cover shadow-md"
          />

          {/* Overlay text and button */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-6 rounded-md">
            <h2 className="text-white text-2xl font-semibold">
              Enhance Your Experience with Our Drones
            </h2>
            <p className="text-gray-200 mt-2">
              Discover high-quality drones designed to elevate your aerial
              photography, surveillance, and recreation. Shop our latest models
              now.
            </p>
            <Link
              to="/shop"
              className="btn mt-4 px-6 py-2 bg-info text-white rounded-md transition-transform transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosectio2;
