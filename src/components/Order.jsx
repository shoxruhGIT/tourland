import React from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const ContactCard = ({ icon, title, info }) => {
  return (
    <div className="w-full sm:w-[80%] md:w-[30%] drop-shadow-xl h-auto py-10 sm:py-12 md:h-[290px] bg-white rounded-2xl flex flex-col items-center justify-center gap-4 md:gap-5">
      <div className="rounded-full w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#F0F0F0] flex items-center justify-center text-[#A8CA3D] text-lg md:text-xl">
        {icon}
      </div>
      <p className="text-[18px] md:text-[20px] font-bold">{title}</p>
      <p className="text-[#A8CA3D] text-[15px] md:text-[16px]">{info}</p>
    </div>
  );
};

const Order = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[75vh] bg-[url(./assets/order.jpg)] bg-cover bg-center py-16 md:py-24 lg:py-32 mb-50 flex flex-col">
      {/* bg section */}

      <div className="w-full max-w-[1380px] m-auto px-4 sm:px-6 lg:px-6 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-9">
        <h4 className="text-[16px] sm:text-[18px] md:text-[20px] text-white text-center">
          {t("order.title")}
        </h4>
        <div className="w-[60px] sm:w-[80px] md:w-[100px] h-[2px] bg-white" />
        <h1 className="font-bold text-[28px] sm:text-[36px] md:text-[48px] text-white text-center">
          {t("order.description")}
        </h1>
        <a href="#info" className="flex items-center justify-center w-[140px] sm:w-[154px] h-[40px] sm:h-[45px] rounded-3xl bg-[#FFFFFF] hover:bg-[#9FD1F0] transition-colors duration-300 cursor-pointer text-[#9FD1F0] hover:text-[#FFFFFF] text-[13px] sm:text-[14px] mt-2 sm:mt-4">
          {t("order.btn")}
        </a>
      </div>

      {/* card section */}

      <div id="info" className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 md:mt-32 lg:mt-52 flex flex-col sm:flex-row items-center sm:items-stretch justify-center sm:justify-between gap-8 md:gap-4" >
        <ContactCard
          icon={<FaPhoneAlt />}
          title={t("order.contact.num")}
          info="+998 77 111 37 77"
        />

        <ContactCard
          icon={<IoMailSharp />}
          title={t("order.contact.email")}
          info="+998 77 111 37 77"
        />

        <ContactCard
          icon={<MdLocationOn />}
          title={t("order.contact.location.title")}
          info={t("order.contact.location.link")}
        />
      </div>
    </div>
  );
};

export default Order;
