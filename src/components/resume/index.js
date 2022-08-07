import React from "react";
import { ResumeItem } from "../resume_item";
import * as S from "./styles";


export const Resume = () => {
  return (
    <S.container>
      <ResumeItem title="Entradas" />
      <ResumeItem title="Saídas" />
      <ResumeItem title="Total" />
    </S.container>
  );
};
