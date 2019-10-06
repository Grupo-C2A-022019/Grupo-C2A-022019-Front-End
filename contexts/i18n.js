import React, { createContext } from "react";

const I18nContext = createContext();

export function I18nProvider({ messages, onLangChange: setLang, children }) {
  return (
    <I18nContext.Provider value={{ messages, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export default I18nContext;
