import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = parseCookies()
    setUser(userToken.user)
  }, [])
  
  const cancelToken = () => destroyCookie(null, 'user')
  
  return (
    <AuthContext.Provider value={{ user, cancelToken }}>
      {children}
    </AuthContext.Provider>
  );
};
