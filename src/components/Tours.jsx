import React from "react";
import { useTranslation } from "react-i18next";
import PictureSlider from "./PictureSlider";
import DistinationSlider from "./DestinationSlider";

const Tours = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-48 overflow-hidden">
      <div className="max-w-[1380px] px-5 mx-auto">
        <div>
          <h2 className="text-center text-2xl sm:text-4xl font-bold max-w-[400px] md:max-w-[850px] mx-auto text-[#2A2A2A]">
            {t("tours.title")}
          </h2>
          <p className="text-center text-[14px] sm:text-[15px] text-[#01294c] max-w-[400px] sm:max-w-[627px] mx-auto mt-6 mb-20">
            {t("tours.paragraph")}
          </p>
          <PictureSlider />
        </div>
        <div className="">
          <h2 className="text-center text-2xl sm:text-4xl font-bold max-w-[400px] md:max-w-[850px] mx-auto text-[#2A2A2A]">
            {t("tours.title_2")}
          </h2>
          <p className="text-center text-[14px] sm:text-[15px] text-[#01294c] max-w-[400px] sm:max-w-[627px] mx-auto mt-6 mb-20">
            {t("tours.paragraph_2")}
          </p>
          <DistinationSlider />
        </div>
      </div>
    </div>
  );
};

export default Tours;
