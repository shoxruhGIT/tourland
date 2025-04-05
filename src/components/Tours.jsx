import { useTranslation } from "react-i18next";
import PictureSlider from "./PictureSlider";
import DistinationSlider from "./DestinationSlider";

const Tours = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="mt-44 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mx-auto text-[#2A2A2A]">
            {t("tours.title")}
          </h2>
          <p className="text-base md:text-lg text-[#01294c] max-w-3xl mx-auto mt-4 md:mt-6 mb-10 md:mb-16 lg:mb-20 px-4">
            {t("tours.paragraph")}
          </p>
          <div className="w-full overflow-hidden">
            <PictureSlider />
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16 lg:mt-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mx-auto text-[#2A2A2A]">
            {t("tours.title_2")}
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-base text-[#01294c] max-w-[627px] mx-auto mt-4 md:mt-6 mb-10 md:mb-16 lg:mb-20 px-4">
            {t("tours.paragraph_2")}
          </p>
          <div className="w-full overflow-hidden">
            <DistinationSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
