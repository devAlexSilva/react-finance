import { createContext, useState } from "react";
import nookies from "nookies";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false)

  const logout = nookies.destroy(null, "user");
  const cookie = nookies.get()

  return (
    <AuthContext.Provider value={{ setUser, logout, isLogged, setIsLogged, cookie }}>
      {children}
    </AuthContext.Provider>
  );
};
