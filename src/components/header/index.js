import React from "react";
import { Button } from "../button";
import * as S from "./styles";

export const Header = ({ text, onClick = () => {}, a, spanColor, backColor }) => {
  return (
    <S.header>
      <S.logo spanColor={spanColor}>
        <img src="favicon.ico" alt="logo de uma calculadora" />
        <span>APS Finance</span>
      </S.logo>
      <div>
        {a ? (
          <a href={a}>
            <Button text={text} backColor={backColor} />
          </a>
        ) : (
          <Button text={text} onClick={onClick} backColor={backColor}/>
        )}
      </div>
    </S.header>
  );
};
