import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import French from "./lang/fr.json";
import English from "./lang/en.json";

export const Context = React.createContext();

const Wrapper = ({ children }) => {
  const browserDefaultLanguage = navigator.language;

  let languageDetected;
  switch (browserDefaultLanguage) {
    case "en":
      languageDetected = English;
      break;
    case "fr":
      languageDetected = French;
      break;
    default:
      languageDetected = English;
      break;
  }

  const [language, setLanguage] = useState(browserDefaultLanguage);
  const [messages, setMessages] = useState(languageDetected);


  function selectLanguage(e) {
    const langSelected = e.target.value;
    setLanguage(langSelected);
    if (langSelected === "en" || langSelected === "en-CA") {
      setMessages(English);
    } else {
      setMessages(French);
    }
  }
  const date = children.props.date;

  return (
    <Context.Provider value={{ language, selectLanguage }}>
      <IntlProvider messages={messages} language={language} date={date}>
        {children}
      </IntlProvider>
    </Context.Provider >
  );
};

export default Wrapper