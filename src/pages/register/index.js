import React, { useState } from "react";
import * as S from "./styles";
import { api } from "../../api/axios";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function validate(email, password) {
    let log = "ok";
    if (email.trim() === "") {
      log = "Email inválido";
    }
    if (password.trim().length < 6) {
      log = "a senha deve conter ao menos 6 dígitos";
    }
    return log;
  }

  async function register (email, password) {
    try {
      await api.post("/users", {email, password });
      alert('Usuário criado com sucesso');
      
      navigate("/");
      window.location.reload();
    
    } catch (error) {
      const { message } = error.response.data;
      setError(message);
    }
  }

  const handleRegister = async () => {
    const log = validate(email, password);
    if (log !== "ok") {
      return setError(log)
    }

    await register(email, password)
  };

  return (
    <S.container>
      <S.background />
      <S.content>
      <S.label>APS Finance - Register</S.label>
        <Input
          type="email"
          value={email}
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="Escolha uma Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text="register" onClick={handleRegister} />
        {error ? <S.label_error>{error}</S.label_error> : null}
        <S.label_register>
          Já possui uma conta?
          <S.strong>
            <Link to="/login"> Login</Link>
          </S.strong>
        </S.label_register>
      </S.content>
    </S.container>
  );
};
