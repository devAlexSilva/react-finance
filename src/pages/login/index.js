import React, { useContext, useRef } from "react";
import { AuthContext } from "../../contexts/auth";
import { setCookie } from "nookies";
import { api } from "../../api/axios";

export const Login = () => {
  const context = useContext(AuthContext);
  const email = useRef();
  const password = useRef();

  const login = async (refEmail, refPassword) => {
    const email = refEmail.current.value;
    const password = refPassword.current.value;

    const { data: token } = await api.post("/login", { email, password });
    console.log(token)
   /* token
      ? setCookie(null, "user", token, {
          maxAge: 1800, // 30 minutes
        })(this).window.location("/dashboard")
      : alert("wrong credentials");
    */};

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
