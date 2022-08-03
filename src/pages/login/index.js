import React, { useState } from "react";
import * as S from "./styles";
import { setCookie } from "nookies";
import { api } from "../../api/axios";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const hasAccess = async (email, password) => {
      let signed = false;
      const { data: token } = await api.post("/login", { email, password });
      if (token) {
        setCookie(null, "user", token, {
          maxAge: 1800, // 30 minutes
        });
        signed = true;
      }
      return signed;
    };

    if (await hasAccess(email, password)) {
      navigate("/dashboard");
      window.location.reload();
    }
  };

  return (
    <S.container>
      <S.label>APS Finance - Login</S.label>
      <S.content>
        <Input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text="login" onClick={handleLogin} />

        <S.label_register>
          Not have an account?
          <S.strong>
            <Link to="/register"> register</Link>
          </S.strong>
        </S.label_register>
      </S.content>
    </S.container>
  );
};
