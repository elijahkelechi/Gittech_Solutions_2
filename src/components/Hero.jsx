import landingImage from "../assets/landingImage.webp";
import { Link } from "react-router-dom";
import HeroDesktopCarousel from "./HeroDesktopCarousel";
import HeroSection1 from "./HeroSection1";
import Herosectio2 from "./Herosectio2";

const Hero = () => {
  return (
    <div className="relative inset-0 w-full">
      <div className="fixed bg-cover inset-0 -z-50">
        <img
          className="w-full h-full object-cover overflow-hidden"
          src={landingImage}
          alt="Background Hero"
        />
      </div>
      <div className="absolute inset-0 bg-cyan-950 opacity-35  h-screen w-full rounded-b-2xl"></div>

      {/* Content Grid */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between mt-4">
        <div className="container mx-auto px-4 grid  lg:grid-cols-12  gap-4">
          <div className="md:col-span-10 w-full">
            <HeroSection1 />
            <div className="mt-4 ml-0 md:ml-8 flex flex-col justify-end">
              <div className="flex items-center h-full  ">
                {/* Carousel */}
                <HeroDesktopCarousel />

                {/* Shop by Category Button */}
                <Link className="flex mx-4  place-items-center btn btn-md font-normal bg-info text-white rounded-md hover:bg-cyan-600 transition duration-300">
                  Shop by <br></br> Category
                </Link>
              </div>
            </div>

            <Herosectio2 />
          </div>
          <div className="col-span-2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
