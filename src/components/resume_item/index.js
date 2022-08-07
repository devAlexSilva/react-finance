import React from "react";
import * as S from "./styles";

export const ResumeItem = ({title, value, Icon}) => {
  return (
    <S.container>
      <S.header>
        <S.headerTitle>{title}</S.headerTitle>
        <Icon />
      </S.header>
      <S.total>{value}</S.total>
    </S.container>
  );
};
