import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
const DestinationSlider = () => {
  const tours = [
    {
      id: 1,
      img: "https://tourland.uz/assets/usa-C694Qxd5.jpg",
      name: "Xi'an",
      order: "450 Check Ins",
      title: "Benefits of our Visa Support service:",
      b1: "Best Price",
      b2: "Short Processing Time",
      b3: "Trustworthy Assistance",
    },
    {
      id: 2,
      img: "https://tourland.uz/assets/englanda-auK_8bny.jpg",
      name: "Chendu",
      order: "20 Check Ins",
      title: "Benefits of our Visa Support service:",
      b1: "Best Price",
      b2: "Short Processing Time",
      b3: "Trustworthy Assistance",
    },
    {
      id: 3,
      img: "https://tourland.uz/assets/canada-CPIEiAKc.jpg",
      name: "Zhangjiahie",
      order: "120 Check Ins",
      title: "Benefits of our Visa Support service:",
      b1: "Best Price",
      b2: "Short Processing Time",
      b3: "Trustworthy Assistance",
    },
    {
      id: 6,
      img: "https://tourland.uz/assets/bannb-C_VQHYSB.jpg",
      name: "Shenzhen",
      order: "340 Check Ins",
      title: "Benefits of our Visa Support service:",
      b1: "Best Price",
      b2: "Short Processing Time",
      b3: "Trustworthy Assistance",
    },
    {
      id: 4,
      img: "https://tourland.uz/assets/ftoq-67oyKgOd.jpeg",
      name: "Kuala Lumpur",
      order: "290 Check Ins",
      title: "Benefits of our Visa Support service:",
      b1: "Best Price",
      b2: "Short Processing Time",
      b3: "Trustworthy Assistance",
    },
    {
      id: 5,
      img: "https://tourland.uz/assets/koprik2-VRe0Ce2I.webp",
      name: "Hainan",
      order: "320 Check Ins",
      title: "Benefits of our Visa Support service:",
      b1: "Best Price",
      b2: "Short Processing Time",
      b3: "Trustworthy Assistance",
      btn: "Make A Reservation",
    },
  ];

  return (
    <div className="w-full overflow-hidden px-2">
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
        {tours.map(({ id, img }) => (
          <SwiperSlide key={id} className="flex justify-center">
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

export default DestinationSlider;
