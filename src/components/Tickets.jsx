import { useTranslation } from "react-i18next";
import { Train } from "../assets";

const Tickets = () => {
  const { t } = useTranslation();

  const tickets = [
    {
      id: 1,
      title: t("tickets.ticket.title"),
      description: t("tickets.ticket.desc"),
      paragraph: t("tickets.ticket.paragraph"),
      btn: t("tickets.ticket.btn"),
      img: "https://tourland.uz/assets/traynn-BfK8u_Cu.jpg",
    },
    {
      id: 2,
      title: t("tickets.ticket.title"),
      description: t("tickets.ticket.desc"),
      paragraph: t("tickets.ticket.paragraph"),
      btn: t("tickets.ticket.btn"),
      img: "https://tourland.uz/assets/plane-DQcqRSto.jpg",
    },
  ];

  console.log(tickets);

  return (
    <div id="tour" className="w-full py-8 md:py-12">
      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2A2A]">
          {t("tickets.title")}
        </h1>
        <p className="text-center text-[14px] sm:text-[15px] text-[#01294c] max-w-[400px] sm:max-w-[627px] mx-auto mt-3 sm:mt-4 md:mt-5 mb-6 sm:mb-8 md:mb-10">
          {t("tickets.paragraph")}
        </p>

        <div className="w-full max-w-[1300px] mx-auto">
          {tickets.map(({ id, title, description, paragraph, btn, img }) => (
            <div className="w-full flex flex-col md:flex-row justify-center gap-4 sm:gap-6 lg:gap-9 mb-8 md:mb-10">
              <div
                key={id}
                className="w-full md:w-[30%] aspect-[4/3] md:aspect-auto rounded-2xl md:rounded-3xl overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src={img}
                  alt="img"
                />
              </div>
              <div className="w-full md:w-[70%] lg:w-[60%] flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
                <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h2 className="text-[18px] md:text-[20px] font-bold">
                    {title}
                  </h2>
                  <a
                    href="#info"
                    className="self-start sm:self-auto bg-[#9FD1F0] text-[#01294C] rounded-3xl py-2 md:py-3 px-5 sm:px-8 md:px-10 text-[12px] sm:text-[14px] hover:bg-white hover:border-[#01294C] hover:border-[1px] border-[1px] border-[#9FD1F0] hover:text-main transition-colors duration-500 outline-none"
                  >
                    {btn}
                  </a>
                </div>
                <h3 className="text-[14px] md:text-[15px] text-[#AFAFAF]">
                  {description}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#AFAFAF] leading-7 md:leading-8">
                  {paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
