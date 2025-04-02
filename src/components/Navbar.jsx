import React from "react";
import { Facebook, Instagram, Logo, Telegram } from "../assets";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ handleChangeLanguage }) => {
  const { t } = useTranslation();

  console.log(handleChangeLanguage);

  return (
    <div className="w-full h-[133px] flex justify-center bg-white fixed m-auto left-0 top-0 z-[9999]">
      <div className="w-[1380px] p-2.5 flex items-center justify-between text-[#1C3161] font-medium">
        <img className="w-[180px]" src={Logo} alt="logos" />
        <ul className="lg:flex hidden items-center gap-8 text-[20px] font-400">
          <li>
            <a href="#main">{t("navbar.main")}</a>
          </li>
          <li>
            <a href="#about">{t("navbar.about")}</a>
          </li>
          <li>
            <a href="#tour">{t("navbar.tours")}</a>
          </li>
          <li>
            <a href="#contact">{t("navbar.contact")}</a>
          </li>
        </ul>

        <ul className="lg:flex hidden items-center gap-[12px] text-[20px] cursor-pointer bg-transparent border-none text-[#1D3557]  outline-none">
          <li onClick={() => handleChangeLanguage("uz")} value="uz">
            uz
          </li>
          <li onClick={() => handleChangeLanguage("en")} value="en">
            eng
          </li>
          <li onClick={() => handleChangeLanguage("ru")} value="ru">
            ru
          </li>
          <a href="https://t.me/tourland_uz">
            <img src={Telegram} alt="telegram" />
          </a>
          <a href="https://www.instagram.com/tourland_uz">
            <img src={Instagram} alt="telegram" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61565792592998&mibextid=LQQJ4d">
            <img src={Facebook} alt="telegram" />
          </a>
        </ul>
        <RxHamburgerMenu className="navbar-burger lg:hidden text-4xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
