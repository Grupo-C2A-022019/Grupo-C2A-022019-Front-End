import React, { useEffect, createContext } from "react";

import useAuth from "hooks/useAuth";

const ApiContext = createContext();

export function ApiProvider({ api, children }) {
  const [{ jwtToken }] = useAuth();

  useEffect(() => {
    api.setToken(jwtToken);
  }, [api, jwtToken]);

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

export default ApiContext;
