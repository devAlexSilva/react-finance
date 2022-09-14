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
    try {
      const { data } = await api.post("/login", { email, password });
      if (data) {
        setCookie(null, "user", data.token, {
          maxAge: 1800, // 30 minutes
        });
      }
      navigate("/dashboard");
      window.location.reload();
    } catch (err) {
      alert("email ou senha incorretos");
    }
  };

  return (
    <S.container>
      <S.background />
      <S.content>
        <S.label>APS Finance - Login</S.label>
        <Input
          type="email"
          value={email}
          placeholder="Entre com seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="Entre com sua Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text="login" onClick={handleLogin} />

        <S.label_register>
          Ainda não tem uma conta?
          <S.strong>
            <Link to="/register"> Registrar</Link>
          </S.strong>
        </S.label_register>
      </S.content>
    </S.container>
  );
};
