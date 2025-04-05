"use client";

import { useState } from "react";
import { Facebook, Instagram, Logo, Telegram } from "../assets";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarModal from "./NavbarModal";

const Navbar = ({ handleChangeLanguage }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="w-full h-[80px] sm:h-[100px] md:h-[133px] flex justify-center bg-white fixed m-auto left-0 top-0 z-[9999] shadow-sm">
      <div className="w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-[#1C3161] font-medium">
        <a href="#" className="z-10">
          <img
            className="w-[120px] sm:w-[150px] md:w-[180px] cursor-pointer"
            src={Logo || "/placeholder.svg"}
            alt="Tourland Logo"
          />
        </a>

        <ul className="lg:flex hidden items-center gap-6 xl:gap-8 text-[18px] xl:text-[20px] font-400">
          <li>
            <a href="#" className="hover:text-[#9FD1F0] transition-colors">
              {t("navbar.main")}
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#9FD1F0] transition-colors">
              {t("navbar.about")}
            </a>
          </li>
          <li>
            <a href="#tour" className="hover:text-[#9FD1F0] transition-colors">
              {t("navbar.tours")}
            </a>
          </li>
          <li>
            <a href="#info" className="hover:text-[#9FD1F0] transition-colors">
              {t("navbar.contact")}
            </a>
          </li>
        </ul>

        <ul className="lg:flex hidden items-center gap-[12px] text-[18px] xl:text-[20px] cursor-pointer bg-transparent border-none text-[#1D3557] outline-none">
          <li
            onClick={() => handleChangeLanguage("uz")}
            value="uz"
            className="hover:text-[#9FD1F0] transition-colors cursor-pointer"
          >
            uz
          </li>
          <li
            onClick={() => handleChangeLanguage("en")}
            value="en"
            className="hover:text-[#9FD1F0] transition-colors cursor-pointer"
          >
            eng
          </li>
          <li
            onClick={() => handleChangeLanguage("ru")}
            value="ru"
            className="hover:text-[#9FD1F0] transition-colors cursor-pointer"
          >
            ru
          </li>
          <a
            href="https://t.me/tourland_uz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Telegram || "/placeholder.svg"}
              alt="Telegram"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.instagram.com/tourland_uz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Instagram || "/placeholder.svg"}
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61565792592998&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Facebook || "/placeholder.svg"}
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
        </ul>

        <RxHamburgerMenu
          onClick={openModal}
          className="navbar-burger lg:hidden text-3xl md:text-4xl cursor-pointer"
        />
      </div>

      <NavbarModal
        isOpen={isOpen}
        closeModal={closeModal}
        handleChangeLanguage={handleChangeLanguage}
      />
    </div>
  );
};

export default Navbar;
