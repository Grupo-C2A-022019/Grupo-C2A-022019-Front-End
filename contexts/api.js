import React, { createContext } from "react";

const ApiContext = createContext();

export function ApiProvider({ api, children }) {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

export default ApiContext;
