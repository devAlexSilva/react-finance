import React from "react";
import { ResumeItem } from "../resume_item";
import * as S from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

export const Resume = ({ deposite, withdraw, total }) => {
  

  return (
    <S.container>
      <ResumeItem
        title="Entradas"
        value={deposite}
        Icon={FaRegArrowAltCircleUp}
      />
      <ResumeItem
        title="Saídas"
        value={`- ${withdraw}`}
        Icon={FaRegArrowAltCircleDown}
      />
      <ResumeItem title="Total" value={total} Icon={FaDollarSign} />
    </S.container>
  );
};
