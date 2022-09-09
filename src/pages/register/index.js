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
    console.log(email)
    if (email.trim() === "") {
      log = "email cannot be blank";
    }
    if (password.trim().length < 6) {
      log = "password cannot be less than six";
    }
    return log;
  }

  async function register (email, password) {
    try {
      console.log(email, password)
      const { data } = await api.post("/users", {email, password });
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
    const log = validate(email, password);
    if (log !== "ok") {
      return setError(log)
    }

    await register(email, password)
  };

  return (
    <S.container>
      <S.label>APS Finance - Register</S.label>
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
