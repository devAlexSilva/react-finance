import React from "react";
import * as S from "./styles";

export const ButtonHeader = ({ text, onClick, type = "button", backColor, spanColor }) => {
 
  return (
    <S.button type={type} onClick={onClick} backColor={backColor} spanColor={spanColor}>
      {text}
    </S.button>
  );
};
