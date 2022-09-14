import React from "react";
import * as S from "./styles";

export const Button = ({ text, onClick, type = "button", backColor }) => {
 
  return (
    <S.button type={type} onClick={onClick} backColor={backColor}>
      {text}
    </S.button>
  );
};
