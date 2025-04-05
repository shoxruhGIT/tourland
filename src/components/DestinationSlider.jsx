import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Chindu } from "../assets";

const DestinationSlider = () => {
  return (
    <div className="w-full overflow-hidden px-2">
      {" "}
      {/* Scrollni bloklash uchun */}
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="h-[500px]"
      >
        {[...Array(5)].map((_, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <img
              src={Chindu}
              alt={`Slide ${i + 1}`}
              className="w-full max-w-[320px] h-[400px] rounded-3xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinationSlider;
