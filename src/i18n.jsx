import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import laungageDetector from "i18next-browser-languagedetector";
// import uzTranslation from "../public/languages/uzb.json";
// import engTranslation from "../public/languages/eng.json";
// import ruTranslation from "../public/languages/ru.json";

const language = localStorage.getItem("i18nextLng");

i18n
  .use(Backend)
  .use(laungageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: language,
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}.json", // Loads ru.json or eng.json
    },
  });

export default i18n;
