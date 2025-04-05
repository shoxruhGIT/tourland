import { useTranslation } from "react-i18next";
import { Train } from "../assets";

const TicketCard = ({ index = 1 }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col md:flex-row justify-center gap-4 sm:gap-6 lg:gap-9 mb-8 md:mb-10">
      <div className="w-full md:w-[30%] aspect-[4/3] md:aspect-auto rounded-2xl md:rounded-3xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={Train || "/placeholder.svg"}
          alt={`Ticket option ${index}`}
        />
      </div>
      <div className="w-full md:w-[70%] lg:w-[60%] flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-[18px] md:text-[20px] font-bold">
            {t("tickets.ticket.title")}
          </h2>
          <a
            href="#info"
            className="self-start sm:self-auto bg-[#9FD1F0] text-[#01294C] rounded-3xl py-2 md:py-3 px-5 sm:px-8 md:px-10 text-[12px] sm:text-[14px] hover:bg-white hover:border-[#01294C] hover:border-[1px] border-[1px] border-[#9FD1F0] hover:text-main transition-colors duration-500 outline-none"
          >
            {t("tickets.ticket.btn")}
          </a>
        </div>
        <h3 className="text-[14px] md:text-[15px] text-[#AFAFAF]">
          {t("tickets.ticket.desc")}
        </h3>
        <p className="text-[14px] md:text-[15px] text-[#AFAFAF] leading-7 md:leading-8">
          {t("tickets.ticket.paragraph")}
        </p>
      </div>
    </div>
  );
};

const Tickets = () => {
  const { t } = useTranslation();

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
          <TicketCard index={1} />
          <TicketCard index={2} />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
