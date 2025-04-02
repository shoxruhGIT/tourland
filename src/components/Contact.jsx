import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full mb-20">
      <div className="w-[1380px] m-auto drop-shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d922.0924518886237!2d69.2439235999531!3d41.297282649257255!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzUwLjMiTiA2OcKwMTQnMzguOSJF!5e1!3m2!1sru!2sus!4v1743568817332!5m2!1sru!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px]"
        ></iframe>
        <div className="w-full h-[686px] rounded-md bg-[#F9F9F9] flex flex-col items-center justify-center">
          <h1 className="text-[30px] font-bold">{t("contact.title")}</h1>
          <div className="w-[1035px] flex flex-col item-center gap-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="name">{t("contact.form.name")}</label>
                <input
                  id="name"
                  type="text"
                  className="outline-none border-[1px] h-[45px] w-[500px] rounded-2xl p-2 bg-white"
                  placeholder={t("contact.form.nLabel")}
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="name">{t("contact.form.number")}</label>
                <input
                  id="name"
                  type="text"
                  className="outline-none border-[1px] h-[45px] w-[500px] rounded-2xl p-2 bg-white"
                  placeholder={t("contact.form.numLabel")}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="name">{t("contact.form.people")}</label>
                <input
                  id="name"
                  type="text"
                  className="outline-none border-[1px] h-[45px] w-[500px] rounded-2xl p-2 bg-white"
                  placeholder={t("contact.form.pLabel")}
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="name">{t("contact.form.date")}</label>
                <input
                  id="name"
                  type="date"
                  className="outline-none border-[1px] h-[45px] w-[500px] rounded-2xl p-2 bg-white"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="destination">{t("contact.form.loc")}</label>
                <select
                  className="w-full sm:text-lg text-[12px] cursor-pointer bg-none rounded-2xl p-2 outline-none border-[1px] bg-white"
                  name="destination"
                  id="destination"
                >
                  <option value>{t("contact.form.lLabel")}</option>
                  <option value={t("contact.lOption.first")}>
                    {t("contact.form.lOption.first")}
                  </option>
                  <option value={t("contact.lOption.second")}>
                    {t("contact.form.lOption.second")}
                  </option>
                  <option value={t("contact.lOption.third")}>
                    {t("contact.form.lOption.third")}
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="destination">{t("contact.form.visa")}</label>
                <select
                  className="w-full sm:text-lg text-[12px] cursor-pointer bg-none rounded-2xl p-2 outline-none border-[1px] bg-white"
                  name="destination"
                  id="destination"
                >
                  <option value>{t("contact.form.vLabel")}</option>
                  <option value={t("contact.vOption.first")}>
                    {t("contact.form.vOption.first")}
                  </option>
                  <option value={t("contact.vOption.second")}>
                    {t("contact.form.vOption.second")}
                  </option>
                  <option value={t("contact.vOption.third")}>
                    {t("contact.form.vOption.third")}
                  </option>
                </select>
              </div>
            </div>
            <button className="h-[45px] rounded-2xl border-[1px] border-[#9FD1F0] bg-[#9FD1F0] text-white text-[18px] hover:bg-white hover:text-[#9FD1F0] cursor-pointer transition-colors duration-300">
              {t("contact.btn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
