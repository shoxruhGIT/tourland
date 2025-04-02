import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ContactModal from "./ContactModal";

const Main = () => {
  const { t } = useTranslation();
  const buttonRef = useRef(null);
  useEffect(() => {
    gsap.to(buttonRef.current, {
      scale: 1.5,
      boxShadow: "0px 0px 20px rgba(0, 170, 255, 0.8)",
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut",
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="lg:w-[118.9em] h-[85.6vh] mb-[400px] relative top-34 bg-[url(./assets/china.jpg)] brightness-75 contrast-125 bg-cover bg-center flex items-center justify-center">
      <div className="w-[1380px] flex flex-col items-center justify-center">
        <p className="sm:text-2xl text-xl text-center text-white">
          {t("main.title")}
        </p>
        <h1 className="text-white sm:text-[63px] text-[40px] font-bold">
          {t("main.name")}
        </h1>
        <button
          ref={buttonRef}
          onClick={openModal}
          className="w-[234px] h-[47px] bg-[#9FD1F0] text-white rounded-3xl text-[14px] font-bold cursor-pointer hover:text-[#9FD1F0] hover:bg-white hover:border-[#9FD1F0] hover:border-2"
        >
          {t("main.button")}
        </button>
        <ContactModal
          openModal={openModal}
          closeModal={closeModal}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
};

export default Main;
