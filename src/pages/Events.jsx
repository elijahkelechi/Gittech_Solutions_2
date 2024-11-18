import { Link } from "react-router-dom";
import bgImage from "../assets/events.webp";
import LandingPageContact from "../components/LandingPageContact";

const Events = () => {
  return (
    <div>
      <div className="relative h-screen">
        <img
          src={bgImage}
          className="absolute inset-0 object-cover w-full h-screen"
          alt="Event background"
        />
        <div className="absolute bg-black opacity-60 h-screen w-full" />

        {/* Main Content */}
        <div className="relative flex flex-col justify-center items-center text-center h-full space-y-6 px-4">
          <h1 className="text-gray-50 text-4xl font-bold">
            Stay Tuned For <br />
            <span>Our Upcoming Events</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Don’t miss out on the latest tech trends, drone showcases, and live
            training sessions at our upcoming events. Join us to experience
            cutting-edge innovation and connect with industry experts.
          </p>

          {/* Book a Seat Button */}
          <Link
            to="/booking"
            className="flex items-center px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-600 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25m-7.5 3.75V5.25m-3 4.5h13.5m-15 6.75h16.5a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 7.5v7.5a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Book a Seat
          </Link>
        </div>
      </div>
      <LandingPageContact />
    </div>
  );
};

export default Events;
