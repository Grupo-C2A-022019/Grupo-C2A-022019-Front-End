import React, { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ auth, setAuth, children }) {
  return (
    <AuthContext.Provider value={[auth || {}, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
