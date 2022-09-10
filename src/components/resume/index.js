import React, { useContext, useState } from "react";
import { ResumeItem } from "../resume_item";
import { AuthContext } from "../../contexts/auth";
import * as S from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

export const Resume = () => {
  const [totalDeposites, setTotalDeposites] = useState(0);
  const [totalWithdraws, setTotalWithdraws] = useState(0);
  const [accumulated, setAccumulated] = useState(0);
  
  const { Api } = useContext(AuthContext);

  (async function total() {
    const totalDeposites = await Api.get("/deposites");
    const totalWithdraws = await Api.get("/withdraws");

    const totalD = [];
    totalDeposites.data.forEach((deposite) => totalD.push(deposite.price));
    const totalPriceD = totalD.reduce((value, total) => value + total);
    setTotalDeposites(totalPriceD.toFixed(2));

    const totalW = [];
    totalWithdraws.data.forEach((withdraw) => totalW.push(withdraw.price));
    const totalPriceW = totalW.reduce((value, total) => value + total);
    setTotalWithdraws(totalPriceW.toFixed(2));

    setAccumulated((totalPriceD - totalPriceW).toFixed(2))
  })();

  return (
    <S.container>
      <ResumeItem
        title="Entradas"
        value={totalDeposites}
        Icon={FaRegArrowAltCircleUp}
      />
      <ResumeItem
        title="Saídas"
        value={`- ${totalWithdraws}`}
        Icon={FaRegArrowAltCircleDown}
      />
      <ResumeItem title="Total" value={accumulated} Icon={FaDollarSign} />
    </S.container>
  );
};
