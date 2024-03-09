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

  const [locale, setLocale] = useState(browserDefaultLanguage);
  const [messages, setMessages] = useState(languageDetected);


  function selectLanguage(e) {
    const localeSelected = e.target.value;
    setLocale(localeSelected);
    switch (localeSelected) {
      case "en":
        setMessages(English);
        break;
      case "fr":
        setMessages(French);
        break;
      default:
        setMessages(English);
        break;
    }
  }
  const date = children.props.date;

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale} date={date}>
        {children}
      </IntlProvider>
    </Context.Provider >
  );
};

export default Wrapper