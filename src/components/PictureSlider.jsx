import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Picture } from "../assets";

const Slider = () => {
  const tours = [
    {
      id: 1,
      img: "https://tourland.uz/assets/togq-5qZptA62.jpeg",
    },
    {
      id: 2,
      img: "https://tourland.uz/assets/koprik-b7PL2tNS.webp",
    },
    {
      id: 3,
      img: "https://tourland.uz/assets/panda-mRCbW3Hl.jpg",
    },
    {
      id: 4,
      img: "https://tourland.uz/assets/xitoy1-CA1GqbQ_.jpg",
    },
    {
      id: 5,
      img: "https://tourland.uz/assets/xitoy2-CZ6SZdr1.jpg",
    },
    {
      id: 6,
      img: "https://tourland.uz/assets/ftoq-67oyKgOd.jpeg",
    },
    {
      id: 7,
      img: "https://tourland.uz/assets/zanjen-DQXYFLw8.jpg",
    },
  ];

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
        {tours.map(({ id, img }) => (
          <SwiperSlide key={id}>
            <div className="group h-[420px] w-full max-w-[320px] mx-auto overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl relative">
              <div className="w-full h-full relative">
                <img
                  src={img}
                  alt={`Slide ${id + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
