import React from "react";
import {
  Navbar,
  Main,
  Tours,
  Tickets,
  Facts,
  Landscapes,
  Order,
  Contact,
  Footer,
} from "./components";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-full">
      <Navbar handleChangeLanguage={handleChangeLanguage} />
      <Main />
      <Tours />
      <Tickets />
      <Facts />
      {/* <Landscapes /> */}
      <Order />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
