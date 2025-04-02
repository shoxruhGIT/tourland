import React from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const Order = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[610px] bg-[url(./assets/order.jpg)] bg-cover bg-center mb-50 flex flex-col">
      <div className="w-[1380px] m-auto flex flex-col items-center justify-center gap-9">
        <h4 className="text-[20px] text-white">{t("order.title")}</h4>
        <div className="w-[100px] h-[2px] bg-white" />
        <h1 className="font-bold text-[48px] text-white">
          {t("order.description")}
        </h1>
        <button className="w-[154px] h-[45px] rounded-3xl bg-[#FFFFFF] hover:bg-[#9FD1F0] transition-colors duration-300 cursor-pointer text-[#9FD1F0] hover:text-[#FFFFFF] text-[14px]">
          {t("order.btn")}
        </button>
      </div>
      <div className="w-[1380px] m-auto mt-52 flex items-center justify-between">
        <div className="w-[445px] drop-shadow-2xl h-[290px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5">
          <div className="rounded-[50%] w-[60px] h-[60px] bg-[#F0F0F0] flex items-center justify-center text-[#A8CA3D] text-xl">
            <FaPhoneAlt />
          </div>
          <p className="text-[20px] font-bold">{t("order.contact.num")}</p>
          <p className="text-[#A8CA3D] text-[16px]">+998 77 111 37 77</p>
        </div>
        <div className="w-[445px] drop-shadow-2xl h-[290px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5">
          <div className="rounded-[50%] w-[60px] h-[60px] bg-[#F0F0F0] flex items-center justify-center text-[#A8CA3D] text-xl">
            <IoMailSharp />
          </div>
          <p className="text-[20px] font-bold">{t("order.contact.email")}</p>
          <p className="text-[#A8CA3D] text-[16px]">+998 77 111 37 77</p>
        </div>
        <div className="w-[445px] drop-shadow-2xl h-[290px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5">
          <div className="rounded-[50%] w-[60px] h-[60px] bg-[#F0F0F0] flex items-center justify-center text-[#A8CA3D] text-xl">
            <MdLocationOn />
          </div>
          <p className="text-[20px] font-bold">
            {t("order.contact.location.title")}
          </p>
          <p className="text-[#A8CA3D] text-[16px]">
            {t("order.contact.location.link")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
