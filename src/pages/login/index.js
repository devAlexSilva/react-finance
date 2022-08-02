import React, { useCallback, useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import { setCookie } from "nookies";
import { api } from "../../api/axios";
import { Navigate } from "react-router-dom"

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const [canRedirect, setCanRedirect] = useState(false)

  const login = useCallback(async(refEmail, refPassword) => {
    const email = refEmail.current.value;
    const password = refPassword.current.value;

    const { data: token } = await api.post("/login", { email, password });
    if (token) {
      setCookie(null, "user", token, {
        maxAge: 1800, // 30 minutes
      });
      
     <Navigate replace to="/dashboard" />
     setCanRedirect(!canRedirect)
    }
  }, [canRedirect]);

  return (
    <>
      <div>
        <input type="text" ref={email} placeholder="email"></input>
        <input type="password" ref={password} placeholder="password"></input>
        <button onClick={() => login(email, password)}>ok</button>
      </div>
    </>
  );
};
