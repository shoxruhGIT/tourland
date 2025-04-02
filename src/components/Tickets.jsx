import React from "react";
import { useTranslation } from "react-i18next";
import { Train } from "../assets";

const Tickets = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="w-[1380px] m-auto sm:p-0 p-5">
        <h1 className="text-center text-2xl sm:text-4xl font-bold max-w-[400px] md:max-w-[850px] mx-auto text-[#2A2A2A]">
          {t("tickets.title")}
        </h1>
        <p className="text-center text-[14px] sm:text-[15px] text-[#01294c] max-w-[400px] sm:max-w-[627px] mx-auto mt-5 mb-5">
          {t("tickets.paragraph")}
        </p>
        <div className="xl:w-[100%] md:w-[950px] w-[450px]  mx-auto flex flex-col md:flex-row justify-center gap-9 mb-10">
          <img
            className="h-[370px] md:h-[227px] md:w-[30%] rounded-3xl overflow-hidden"
            src={Train}
            alt="picture"
          />
          <div className="md:w-[60%] flex flex-col items-left gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] font-bold">
                {t("tickets.ticket.title")}
              </h2>
              <button className="bg-[#9FD1F0] text-[#01294C] rounded-3xl py-3 px-5 sm:px-10 sm:text-[14px] text-[12px] hover:bg-white hover:border-[#01294C] hover:border-[1px] border-[1px] border-[#9FD1F0] hover:text-main transition-colors duration-500 outline-none">
                {t("tickets.ticket.btn")}
              </button>
            </div>
            <h3 className="text-[15px] text-[#AFAFAF]">
              {t("tickets.ticket.desc")}
            </h3>
            <p className="text-[15px] text-[#AFAFAF]  leading-8">
              {t("tickets.ticket.paragraph")}
            </p>
          </div>
        </div>
        <div className="xl:w-[100%] md:w-[950px] w-[450px]  mx-auto flex flex-col md:flex-row justify-center gap-9 mb-10">
          <img
            className="h-[370px] md:h-[227px] md:w-[30%] rounded-3xl overflow-hidden"
            src={Train}
            alt="picture"
          />
          <div className="md:w-[60%] flex flex-col items-left gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] font-bold">
                {t("tickets.ticket.title")}
              </h2>
              <button className="bg-[#9FD1F0] text-[#01294C] rounded-3xl py-3 px-5 sm:px-10 sm:text-[14px] text-[12px] hover:bg-white hover:border-[#01294C] hover:border-[1px] border-[1px] border-[#9FD1F0] hover:text-main transition-colors duration-500 outline-none">
                {t("tickets.ticket.btn")}
              </button>
            </div>
            <h3 className="text-[15px] text-[#AFAFAF]">
              {t("tickets.ticket.desc")}
            </h3>
            <p className="text-[15px] text-[#AFAFAF]  leading-8">
              {t("tickets.ticket.paragraph")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
