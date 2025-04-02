import React from "react";
import { useTranslation } from "react-i18next";
import { Tea } from "../assets";
import { IoPersonSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaHouse } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

const Facts = () => {
  const { t } = useTranslation();

  const facts = [1, 2, 3, 4];

  return (
    <div className="w-full">
      <div className="w-[500px] p-5 md:p-0 md:w-[1380px] m-auto mt-32">
        <h1 className="ml-12 text-2xl sm:text-3xl font-bold max-w-[400px] md:max-w-[850px] mx-auto text-[#2A2A2A]">
          {t("facts.title")}
        </h1>
        <p className="ml-12 text-[14px] sm:text-[15px] text-[#01294c] max-w-[400px] sm:max-w-[627px] mx-auto mt-5 mb-5">
          {t("facts.description")}
        </p>

        {facts.map((_, index) => (
          <div
            key={index}
            className={`xl:w-[100%] md:w-[950px] w-[450px] mx-auto flex flex-col md:flex-row justify-center gap-9 mb-10 pb-5 
            ${
              index !== facts.length - 1
                ? "w-[1340px] border-b border-[#01294C]"
                : ""
            }`}
          >
            <img
              className="w-[200px] md:h-[227px] md:w-[30%] rounded-3xl overflow-hidden"
              src={Tea}
              alt="picture"
            />
            <div className="md:w-[60%] flex flex-col items-left gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] font-bold">
                  {t("facts.fact.title")}
                </h2>
                <button className="bg-[#9FD1F0] text-[#01294C] rounded-3xl py-3 px-5 sm:px-10 sm:text-[14px] text-[12px] hover:bg-white hover:border-[#01294C] hover:border-[1px] border-[1px] border-[#9FD1F0] hover:text-main transition-colors duration-500 outline-none">
                  {t("facts.fact.btn")}
                </button>
              </div>
              <h3 className="text-[15px] text-[#AFAFAF]">
                {t("facts.fact.paragraph")}
              </h3>
              <p className="text-[15px] text-[#AFAFAF] leading-8">
                {t("facts.fact.description")}
              </p>
              <div className="border-[1px] border-[#979494]" />
              <div className="flex items-center justify-between text-[#979494] ">
                <p className="flex items-center gap-2">
                  <IoPersonSharp /> {t("facts.fact.residents")}
                </p>
                <p className="flex items-center gap-2">
                  <TbWorld /> {t("facts.fact.square")}
                </p>
                <p className="flex items-center gap-2">
                  <FaHouse />
                  {t("facts.fact.price")}
                </p>
              </div>
              <div className="border-[1px] border-[#979494]" />
              <p className="font-bold text-[#9FD1F0] cursor-pointer flex items-center gap-2 hover:gap-6 transition-all">
                {t("facts.question")}
                <FaLongArrowAltRight />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facts;
