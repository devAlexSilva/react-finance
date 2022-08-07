import React from "react";
import { ResumeItem } from "../resume_item";
import * as S from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from "react-icons/fa"


export const Resume = () => {
  return (
    <S.container>
      <ResumeItem title="Entradas" value="1000" Icon={FaRegArrowAltCircleUp}/>
      <ResumeItem title="Saídas" value="1000" Icon={FaRegArrowAltCircleDown}/>
      <ResumeItem title="Total" value="1000" Icon={FaDollarSign}/>
    </S.container>
  );
};
