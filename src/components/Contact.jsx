import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    destination: "",
    visa: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMessageHandle = async (e) => {
    e.preventDefault();

    const token = "7356453117:AAGCcU1rfib6FYCKoJlt8-77Dgq5RK8UgkE";
    const chat_id = "5625872174";
    const URL = `https://api.telegram.org/bot${token}/sendMessage`;
    const text = `New order for you:
    \n Name: ${formData.name}
    \n Phone Number: ${formData.phone}
    \n Guests: ${formData.guests}
    \n Date: ${formData.date}
    \n Destination: ${formData.destination}
    \n Visa: ${formData.visa}`;

    try {
      await axios.post(URL, {
        chat_id,
        text: text,
      });

      alert("Done my brother");
      setFormData({
        name: "",
        phone: "",
        guests: "",
        date: "",
        destination: "",
        visa: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="w-full max-w-[1380px] m-auto px-4 sm:px-6 lg:px-8 drop-shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d922.0924518886237!2d69.2439235999531!3d41.297282649257255!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzUwLjMiTiA2OcKwMTQnMzguOSJF!5e1!3m2!1sru!2sus!4v1743568817332!5m2!1sru!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px]"
        ></iframe>
        <div className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 rounded-b-lg bg-[#F9F9F9] flex flex-col items-center justify-center">
          <h1 className="text-2xl sm:text-[26px] md:text-[30px] font-bold text-center">
            {t("contact.title")}
          </h1>
          <form
            // onChange={sendMessageHandle}
            onSubmit={sendMessageHandle}
            className="w-full mx-auto flex flex-col item-center gap-4 sm:gap-6"
          >
            {/* name and phone */}

            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name">{t("contact.form.name")}</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="outline-none border-[1px] h-[45px] w-full max-w-[500px] rounded-2xl p-2 bg-white"
                  placeholder={t("contact.form.nLabel")}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full relative">
                <label htmlFor="phone">{t("contact.form.number")}</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`outline-none border-[1px] h-[45px] w-full max-w-[500px] rounded-2xl p-2 bg-white ${
                    error ? "border-red-500" : ""
                  }`}
                  placeholder="+998 99 123 45 67"
                  required
                />
                {error && (
                  <div className="text-red-500 absolute top-19">{error}</div>
                )}
              </div>
            </div>

            {/* guests and date */}

            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="guests">{t("contact.form.people")}</label>
                <input
                  id="guests"
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="outline-none border-[1px] h-[45px] w-full max-w-[500px] rounded-2xl p-2 bg-white"
                  placeholder={t("contact.form.pLabel")}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="date">{t("contact.form.date")}</label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="outline-none border-[1px] h-[45px] w-full max-w-[500px] rounded-2xl p-2 bg-white"
                  required
                />
              </div>
            </div>

            {/* destination and visa */}

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="destination">{t("contact.form.loc")}</label>
                <select
                  className="w-full max-w-[1125px] sm:text-lg text-[12px] cursor-pointer bg-none rounded-2xl p-2 outline-none border-[1px] bg-white"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  id="destination"
                  required
                >
                  <option value>{t("contact.form.lLabel")}</option>
                  <option value={t("contact.form.lOption.first")}>
                    {t("contact.form.lOption.first")}
                  </option>
                  <option value={t("contact.form.lOption.second")}>
                    {t("contact.form.lOption.second")}
                  </option>
                  <option value={t("contact.form.lOption.third")}>
                    {t("contact.form.lOption.third")}
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="visa">{t("contact.form.visa")}</label>
                <select
                  className="w-full max-w-[1125px] sm:text-lg text-[12px] cursor-pointer bg-none rounded-2xl p-2 outline-none border-[1px] bg-white"
                  name="visa"
                  value={formData.visa}
                  onChange={handleChange}
                  id="visa"
                >
                  <option value>{t("contact.form.vLabel")}</option>
                  <option value={t("contact.form.vOption.first")}>
                    {t("contact.form.vOption.first")}
                  </option>
                  <option value={t("contact.form.vOption.second")}>
                    {t("contact.form.vOption.second")}
                  </option>
                  <option value={t("contact.form.vOption.third")}>
                    {t("contact.form.vOption.third")}
                  </option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="h-[45px] w-full max-w-[1125px] rounded-2xl border-[1px] border-[#9FD1F0] bg-[#9FD1F0] text-white text-[18px] hover:bg-white hover:text-[#9FD1F0] cursor-pointer transition-colors duration-300"
            >
              {t("contact.btn")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
