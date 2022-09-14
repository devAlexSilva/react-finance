import React from "react";
import { ButtonHeader } from "../button_header";
import * as S from "./styles";

export const Header = ({ text, onClick = () => {}, a, spanColor, backColor }) => {
  return (
    <S.header>
      <S.logo spanColor={spanColor}>
        <img src="favicon.ico" alt="logo de uma calculadora" />
        <span>APS Finance</span>
      </S.logo>
      <div>
        {a ? 
        <a href={a}>
          <ButtonHeader text={text} backColor={backColor} spanColor={spanColor} />
        </a>
         : <ButtonHeader text={text} onClick={onClick} backColor={backColor}/>
        }
      </div>
    </S.header>
  );
};
