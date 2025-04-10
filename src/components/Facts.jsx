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
      title: "Tea Culture",
      img: "https://tourland.uz/assets/choy-w3JqHud4.jpg",
      p: "Chinese Tea Culture",
      desc: "Chinese tea culture has developed over centuries and is one of the oldest traditions in the world. Drinking tea has become an integral part of daily life for the Chinese people, and this culture reflects not only the method of preparing the beverage but also the respect for health and spirit.",
      community: "8.66 M",
      area: "41.290 km",
      price: "$400",
    },
    {
      id: 2,
      title: "The Middle Kingdom",
      img: "https://tourland.uz/assets/fakt2-D3v8jOP9.jpg",
      p: "China, The Middle Kingdom",
      desc: "(In Chinese, Tiānxià — 天下) is a concept of great significance in Chinese culture and history. This ancient phrase is used to describe China and the worldview associated with it. The concept of the Middle Kingdom developed during the imperial era of China, where it was seen as the place ruled by Heaven (Tian), and this rule was considered to extend to everything on Earth.",
      community: "44.48 M",
      area: "275.400 km",
      price: "$946",
    },
    {
      id: 3,
      title: "Chinese cuisine",
      img: "https://tourland.uz/assets/xitoyta-J6lzAjoF.jpeg",
      p: "The Diversity of Chinese Cuisine",
      desc: "Chinese cuisine is famous worldwide for its diversity of dishes. Each region is known for its unique dishes, for example, Sichuan cuisine is known for its spiciness, while Beijing is famous for Peking duck.",
      community: "67.41 M",
      area: "551.500 km",
      price: "$425",
    },
    {
      id: 4,
      title: "The homeland of pandas",
      img: "https://tourland.uz/assets/panda-mRCbW3Hl.jpg",
      p: "Pandas – A Diplomatic Symbol of China",
      desc: "Giant pandas play an important role in Chinese diplomacy. China has temporarily leased its pandas to other countries to strengthen diplomatic relations. This is known as panda diplomacy and is used to enhance China's relationships with international partners. The leased pandas can be seen in various zoos around the world, many of them in the USA, Japan, and European countries.",
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
                      {t("facts.fact.btn")}
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
