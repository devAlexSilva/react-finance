import React from "react";
import * as S from "./styles";

export const Button = ({ text, onClick, type = "button" }) => {
 
  return (
    <S.button type={type} onClick={onClick}>
      {text}
    </S.button>
  );
};
