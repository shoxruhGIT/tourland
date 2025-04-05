"use client";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import { Facebook, Instagram, Telegram } from "../assets";

const NavbarModal = ({ isOpen, closeModal, handleChangeLanguage }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-[10000] overflow-y-auto">
      <div className="w-full h-full flex flex-col p-6">
        <div className="flex justify-end mb-8">
          <button
            onClick={closeModal}
            className="text-3xl text-[#1C3161] hover:text-[#9FD1F0] transition-colors"
          >
            <IoClose />
          </button>
        </div>

        <nav className="flex-1">
          <ul className="flex flex-col items-center gap-6 text-[22px] font-medium text-[#1C3161]">
            <li>
              <a
                href="#"
                onClick={closeModal}
                className="hover:text-[#9FD1F0] transition-colors"
              >
                {t("navbar.main")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeModal}
                className="hover:text-[#9FD1F0] transition-colors"
              >
                {t("navbar.about")}
              </a>
            </li>
            <li>
              <a
                href="#tour"
                onClick={closeModal}
                className="hover:text-[#9FD1F0] transition-colors"
              >
                {t("navbar.tours")}
              </a>
            </li>
            <li>
              <a
                href="#info"
                onClick={closeModal}
                className="hover:text-[#9FD1F0] transition-colors"
              >
                {t("navbar.contact")}
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-8 mb-6">
          <ul className="flex justify-center gap-6 text-[18px] font-medium text-[#1D3557]">
            <li
              onClick={() => {
                handleChangeLanguage("uz");
                closeModal();
              }}
              className="hover:text-[#9FD1F0] transition-colors cursor-pointer"
            >
              uz
            </li>
            <li
              onClick={() => {
                handleChangeLanguage("en");
                closeModal();
              }}
              className="hover:text-[#9FD1F0] transition-colors cursor-pointer"
            >
              eng
            </li>
            <li
              onClick={() => {
                handleChangeLanguage("ru");
                closeModal();
              }}
              className="hover:text-[#9FD1F0] transition-colors cursor-pointer"
            >
              ru
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://t.me/tourland_uz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Telegram || "/placeholder.svg"}
              alt="Telegram"
              className="w-7 h-7"
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
              className="w-7 h-7"
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
              className="w-7 h-7"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarModal;
