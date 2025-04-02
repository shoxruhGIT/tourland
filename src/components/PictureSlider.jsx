import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Picture } from "../assets";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="h-[500px]"
      >
        <SwiperSlide className="">
          <img
            src={Picture}
            alt="Slide 1"
            className="w-[320px] h-[400px] rounded-3xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Picture}
            alt="Slide 2"
            className="w-[320px] h-[400px] rounded-3xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Picture}
            alt="Slide 3"
            className="w-[320px] h-[400px] rounded-3xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Picture}
            alt="Slide 1"
            className="w-[320px] h-[400px] rounded-3xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Picture}
            alt="Slide 2"
            className="w-[320px] h-[400px] rounded-3xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Picture}
            className="w-[320px] h-[400px] rounded-3xl "
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
