import React from "react";
import * as S from "./styles";

export const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <S.input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></S.input>
  );
};
