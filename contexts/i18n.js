import React, { createContext } from "react";

const I18nContext = createContext();

export function I18nProvider({ messages, onLangChange: setLang, currentLang, langs, children }) {
  return (
    <I18nContext.Provider value={{ messages, setLang, currentLang, langs }}>
      {children}
    </I18nContext.Provider>
  );
}

export default I18nContext;
