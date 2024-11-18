import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

import heroCarousel1 from "../assets/heroCarousel1.jpg";
import heroCarousel2 from "../assets/heroCarousel2.jpg";
import heroCarousel3 from "../assets/heroCarousel3.jpg";
import heroCarousel4 from "../assets/heroCarousel4.jpg";
import heroCarousel5 from "../assets/heroCarousel5.jpg";
import { Link } from "react-router-dom";

const HeroDesktopCarousel = () => {
  return (
    <div className="size-36 block">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full max-w-4xl mx-auto"
      >
        <SwiperSlide>
          <img
            src={heroCarousel1}
            alt="Slide 1"
            className="w-full h-32 rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={heroCarousel2}
            alt="Slide 2"
            className="w-full h-32 rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={heroCarousel3}
            alt="Slide 3"
            className="w-full h-32 rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={heroCarousel4}
            alt="Slide 4"
            className="w-full h-32 rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={heroCarousel5}
            alt="Slide 5"
            className="w-full h-32 rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroDesktopCarousel;
