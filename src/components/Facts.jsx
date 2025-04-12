import { useTranslation } from "react-i18next";
import { Tea } from "../assets";
import { IoPersonSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaHouse } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

const Facts = () => {
  const { t } = useTranslation();
  const facts = [
    {
      id: 1,
      title: t("facts.fact-s.facts_1.title"),
      img: "https://tourland.uz/assets/choy-w3JqHud4.jpg",
      p: t("facts.fact-s.facts_1.paragraph"),
      desc: t("facts.fact-s.facts_1.description"),
      community: t("facts.fact-s.facts_1.residents"),
      area: "41.290 km",
      price: "$400",
    },
    {
      id: 2,
      title: t("facts.fact-s.facts_2.title"),
      img: "https://tourland.uz/assets/fakt2-D3v8jOP9.jpg",
      p: t("facts.fact-s.facts_2.paragraph"),
      desc: t("facts.fact-s.facts_2.description"),
      community: "44.48 M",
      area: "275.400 km",
      price: "$946",
    },
    {
      id: 3,
      title: t("facts.fact-s.facts_3.title"),
      img: "https://tourland.uz/assets/xitoyta-J6lzAjoF.jpeg",
      p: t("facts.fact-s.facts_3.paragraph"),
      desc: t("facts.fact-s.facts_3.description"),
      community: "67.41 M",
      area: "551.500 km",
      price: "$425",
    },
    {
      id: 4,
      title: t("facts.fact-s.facts_4.title"),
      img: "https://tourland.uz/assets/panda-mRCbW3Hl.jpg",
      p: t("facts.fact-s.facts_4.paragraph"),
      desc: t("facts.fact-s.facts_4.description"),
      community: "44.48 M",
      area: "275.400 km",
      price: "$546",
    },
  ];

  return (
    <div className="w-full py-8 md:py-12">
      <div className="w-full max-w-[1380px] mx-auto mt-16 sm:mt-24 md:mt-32 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2A2A2A] ml-0 sm:ml-6 md:ml-12">
            {t("facts.title")}
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#01294c] mt-3 sm:mt-5 ml-0 sm:ml-6 md:ml-12 max-w-2xl">
            {t("facts.description")}
          </p>
        </div>

        <div className="w-full max-w-[1300px] mx-auto space-y-8 md:space-y-10">
          {facts.map((item, index) => (
            <div
              key={index}
              className={`w-full ${
                index !== facts.length - 1
                  ? "pb-8 border-b border-[#01294C]/20"
                  : ""
              }`}
            >
              <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 lg:gap-9">
                <div className="w-full md:w-[30%] flex-shrink-0">
                  <img
                    className="w-full h-[200px] sm:h-[227px] object-cover rounded-2xl md:rounded-3xl overflow-hidden"
                    src={item.img}
                    alt={`Fact ${index + 1}`}
                  />
                </div>

                <div className="w-full md:w-[70%] lg:w-[60%] flex flex-col gap-3 sm:gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="text-[18px] md:text-[20px] font-bold">
                      {item.title}
                    </h2>
                    <a
                      href="#info"
                      className="self-start sm:self-auto bg-[#9FD1F0] text-[#01294C] rounded-3xl py-2 md:py-3 px-5 sm:px-8 md:px-10 text-[12px] sm:text-[14px] hover:bg-white hover:border-[#01294C] hover:border-[1px] border-[1px] border-[#9FD1F0] hover:text-main transition-colors duration-500 outline-none"
                    >
                      {t("facts.btn")}
                    </a>
                  </div>

                  <h3 className="text-[14px] md:text-[15px] text-[#AFAFAF]">
                    {item.p}
                  </h3>

                  <p className="text-[14px] md:text-[15px] text-[#AFAFAF] leading-6 md:leading-8">
                    {item.desc}
                  </p>

                  <div className="border-t border-[#979494] my-2 md:my-3"></div>

                  <div className="flex flex-wrap gap-y-3 justify-between text-[#979494] text-[13px] sm:text-[14px]">
                    <p className="flex items-center gap-2 min-w-[30%]">
                      <IoPersonSharp className="text-[#9FD1F0]" />
                      {item.community}
                    </p>
                    <p className="flex items-center gap-2 min-w-[30%]">
                      <TbWorld className="text-[#9FD1F0]" />
                      {item.area}
                    </p>
                    <p className="flex items-center gap-2 min-w-[30%]">
                      <FaHouse className="text-[#9FD1F0]" />
                      {item.price}
                    </p>
                  </div>

                  <div className="border-t border-[#979494] my-2 md:my-3"></div>

                  <p className="font-bold text-[#9FD1F0] cursor-pointer flex items-center gap-2 group">
                    <span className="group-hover:underline">
                      {t("facts.question")}
                    </span>
                    <FaLongArrowAltRight className="transition-transform group-hover:translate-x-2" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facts;
