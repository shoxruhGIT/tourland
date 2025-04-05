import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Picture } from "../assets";

const Slider = () => {
  return (
    <div className="w-full overflow-hidden">
      {" "}
      {/* scrollni bloklash uchun */}
      <Swiper
        modules={[Autoplay, Pagination, Scrollbar]}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="h-[500px] px-4"
      >
        {[...Array(6)].map((_, i) => (
          <SwiperSlide key={i}>
            <img
              src={Picture}
              alt={`Slide ${i + 1}`}
              className="w-full max-w-[320px] h-[400px] rounded-3xl mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
