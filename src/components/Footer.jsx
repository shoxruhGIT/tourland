import React from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Telegram } from "../assets";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[300px] bg-[#01294C] pt-10">
      <div className="w-[1380px] m-auto">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-white">
              {t("footer.title")}
            </h1>
            <p className=" text-white text-lg">{t("footer.desc")}</p>
            <div className="flex items-center gap-4">
              <button className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center bg-[#FFFFFF]">
                <img src={Telegram} alt="instagram" />
              </button>
              <button className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center bg-[#FFFFFF]">
                <img src={Instagram} alt="instagram" />
              </button>
              <button className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center bg-[#FFFFFF]">
                <img src={Facebook} alt="instagram" />
              </button>
            </div>
          </div>
          <div className="flex gap-20 font-medium">
            <div className="flex flex-col text-white gap-2">
              <h1 className="uppercase">{t("footer.link")}</h1>
              <a href="#" className="hover:text-gray-900">
                {" "}
                {t("navbar.main")}
              </a>
              <a href="#" className="hover:text-gray-900">
                {t("navbar.about")}
              </a>
            </div>
            <div className="flex flex-col text-white gap-2">
              <h1 className="uppercase">{t("footer.other")}</h1>
              <a href="#" className="hover:text-gray-900">
                {t("navbar.tours")}
              </a>
              <a href="#" className="hover:text-gray-900">
                {t("navbar.contact")}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-white mt-10" />
        <h3 className="text-center text-white mt-6">
          Copyright © 2025 Limsa <a href="www.limsa.uz" className="hover:text-gray-900 cursor-pointer">Creative Tim.</a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
