import { createContext, useEffect, useState } from "react";
import { parseCookies, destroyCookie } from "nookies";
import axios from "axios";

export const AuthContext = createContext({});
const build_url = "https://apsfinance.herokuapp.com"
const dev_url = "http://localhost:2727"

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = parseCookies();
    setUser(userToken.user);
  }, []);

  const cancelToken = () => destroyCookie(null, "user");

  const Api = axios.create({
    baseURL: build_url,
    headers: {
      Authorization: `Bearer ${user}`,
    },
  });

  return (
    <AuthContext.Provider value={{ user, cancelToken, Api }}>
      {children}
    </AuthContext.Provider>
  );
};
