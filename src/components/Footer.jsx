import React from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Telegram } from "../assets";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#01294C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-6 items-center md:gap-0 md:items-start justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-white">
              {t("footer.title")}
            </h1>
            <p className=" text-white text-lg">{t("footer.desc")}</p>
            <div className="flex items-center gap-4">
              <button className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center bg-[#FFFFFF]">
                <a
                  href="https://t.me/tourland_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Telegram} alt="Telegram" />
                </a>
              </button>
              <button className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center bg-[#FFFFFF]">
                <a
                  href="https://www.instagram.com/tourland_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Instagram} alt="Instagram" />
                </a>
              </button>
              <button className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center bg-[#FFFFFF]">
                <a
                  href="https://www.facebook.com/profile.php?id=61565792592998&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Facebook} alt="Facebook" />
                </a>
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
          Copyright © 2025 Limsa{" "}
          <a href="www.limsa.uz" className="hover:text-gray-900 cursor-pointer">
            Creative Tim.
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
