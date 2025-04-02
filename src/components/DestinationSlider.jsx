import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Chindu } from "../assets";

const DestinationSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-[500px]"
      >
        <SwiperSlide>
          <img
            src={Chindu}
            alt="Slide 2"
            className="w-[320px] h-[400px] rounded-3xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Chindu}
            alt="Slide 3"
            className="w-[320px] h-[400px] rounded-3xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Chindu}
            alt="Slide 1"
            className="w-[320px] h-[400px] rounded-3xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Chindu}
            alt="Slide 2"
            className="w-[320px] h-[400px] rounded-3xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Chindu}
            className="w-[320px] h-[400px] rounded-3xl "
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DestinationSlider;
