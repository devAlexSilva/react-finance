import React, { useContext, useState } from "react";
//import * as S from "./styles";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Resume } from "../../components/resume";
import { Form } from "../../components/form";

export const Dashboard = () => {
  const { cancelToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [totalDeposites, setTotalDeposites] = useState(0);
  const [totalWithdraws, setTotalWithdraws] = useState(0);
  const [accumulated, setAccumulated] = useState(0);

  const { Api } = useContext(AuthContext);

  (async function total() {
    const totalDeposites = await Api.get("/deposites");
    const totalWithdraws = await Api.get("/withdraws");

    const totalD = sumTotal(totalDeposites).toFixed(2);
    setTotalDeposites(totalD);

    const totalW = sumTotal(totalWithdraws).toFixed(2);
    setTotalWithdraws(totalW);

    const totalA = totalD - totalW;
    setAccumulated(totalA);
  })();

  function sumTotal(transactionList) {
    const total = [];
    transactionList.data.forEach((transaction) =>
      total.push(transaction.price)
    );
    return total.reduce((value, total) => value + total);
  }

  return (
    <>
      <button onClick={() => [cancelToken(), navigate("/")]}>logout</button>
      <Header />
      <Resume
        deposite={totalDeposites}
        withdraw={totalWithdraws}
        total={accumulated}
      />
      <Form />
    </>
  );
};
