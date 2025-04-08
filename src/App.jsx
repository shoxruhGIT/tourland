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
import { ToastContainer } from "react-toastify";

const App = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="min-h-screen">
      <Navbar handleChangeLanguage={handleChangeLanguage} />
      <ToastContainer />
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
