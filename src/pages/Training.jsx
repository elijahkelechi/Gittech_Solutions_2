import { FaPhoneAlt } from "react-icons/fa"; // Import phone icon
import bgImage from "../assets/getTrained.webp";
import LandingPageContact from "../components/LandingPageContact";

const Training = () => {
  return (
    <div>
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <img
          className="absolute h-screen inset-0 object-cover w-full"
          src={bgImage}
          alt="Training background"
        />
        <div className="overlay bg-black absolute inset-0 opacity-70" />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-4xl font-bold mb-6">Training Opportunities</h1>
          <p className="text-lg max-w-lg mb-8">
            We offer training in Hardware Programming and Robotics.
          </p>

          {/* Contact Us Button */}
          <a
            href="mailto:info@giitechsolutions.com.ng"
            className="btn flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300"
          >
            <span className="p-2 rounded-full animate-pulse bg-gradient-to-r from-rose-200 via-rose-400 to-rose-600 shadow-2xl">
              <FaPhoneAlt className="text-lg animate-bounce" />
            </span>
            <span>Contact Us Now!</span>
          </a>
        </div>

        {/* Simple Training Info Section */}
        <div className="relative z-10 bg-gray-100 text-gray-800 py-12 px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Learn From the Best
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-8">
            Contact us at{" "}
            <a
              href="mailto:info@giitechsolutions.com.ng"
              className="text-cyan-600 underline"
            >
              info@giitechsolutions.com.ng
            </a>{" "}
            to learn more about our training opportunities in Hardware
            Programming and Robotics.
          </p>
        </div>
      </div>
      <div>
        <LandingPageContact />
      </div>
    </div>
  );
};

export default Training;
