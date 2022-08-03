import React, { useState } from "react";
import * as S from "./styles";
import { api } from "../../api/axios";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function validate(name, email, password) {
    let log = "ok";
    console.log(name, email)
    if (name.trim() === "") {
      log = "name cannot be blank";
    }
    if (email.trim() === "") {
      log = "email cannot be blank";
    }
    if (password.trim().length < 6) {
      log = "password cannot be less than six";
    }
    return log;
  }

  async function register (name, email, password) {
    try {
      console.log(name, email, password)
      const { data } = await api.post("/create", { name, email, password });
      console.log(data);
      alert('created user');
      
      navigate("/");
      window.location.reload();
    
    } catch (error) {
      const { message } = error.response.data;
      setError(message);
    }
  }

  const handleRegister = async () => {
    const log = validate(name, email, password);
    if (log !== "ok") {
      return setError(log)
    }

    await register(name, email, password)
  };

  return (
    <S.container>
      <S.label>APS Finance - Register</S.label>
      <S.content>
        <Input
          type="name"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
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

        <Button text="register" onClick={handleRegister} />
        {error ? <S.label_register>{error}</S.label_register> : null}
        <S.label_register>
          Already have an account?
          <S.strong>
            <Link to="/login"> Login</Link>
          </S.strong>
        </S.label_register>
      </S.content>
    </S.container>
  );
};
