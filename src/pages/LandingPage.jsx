import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import LandingPageServices from "../components/landingPageServices";
import LandingPageTestimonials from "../components/landingPageTestimonials";
import LandingPageContact from "../components/LandingPageContact";
import RotatingEarth from "../components/RotatingEarth";
import MobileEarth from "../components/MobileEarth";
import Typed from "typed.js";

const LandingPage = () => {
  const typedRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleMediaChange = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleMediaChange);
    return () => {
      window.removeEventListener("resize", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    const options = {
      strings: [
        "<span style='color: red'>Experience the Future of Technology with Us</span>",
        "<span style='color: green;'>Empowering Your Journey with GIITech Drones</span>",
        "<span style='color: blue;'>Precision, Performance, and Innovation in Every Flight</span>",
        "<span style='color: orange;'>Take Flight and Discover Limitless Possibilities with GIITech</span>",
      ],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy(); // Clean up the effect on unmount
      };
    }
  }, []);

  return (
    <div key={isMobile} className="bg-gray-100 ">
      {/* Hero Section */}
      <div className="-z-50">
        <Hero />
      </div>

      {/* Services Section */}
      <div className="absolute w-full  mt-[88rem] md:mt-[68rem] lg:mt-[70rem] ">
        <section className="py-16 px-4 md-px-8 bg-gradient-to-r from-secondary to-primary">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-thin mb-6 text-gray-50">
              Our Services
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-50">
              Discover a range of professional drone solutions that cater to
              various industries, from aerial surveying to media production.
            </p>
            <div className="hidden md:block text-center lg:grid lg:grid-cols-2">
              <div>
                <RotatingEarth />
              </div>
              <div className="absolute mr-0 ml-72 mt-24 px-56 lg:block">
                <span className="text-2xl leading-loose  font-bold text-red-500 md:hidden lg:block">
                  Exploring Earth with drones unlocks new perspectives, enabling
                  us to capture breathtaking landscapes
                </span>
              </div>
            </div>
            <div className="md:hidden block text-center">
              <span className="text-2xl  font-bold " ref={typedRef}></span>
              <MobileEarth />
            </div>
            <LandingPageServices />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-r from-secondary to-primary">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl mb-6 text-gray-50 font-thin">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-50 mb-12 max-w-3xl mx-auto">
              Hear from clients who trust us to capture, analyze, and deliver
              stunning aerial solutions.
            </p>
            <LandingPageTestimonials />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className=" text-white text-center">
          <LandingPageContact />
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
