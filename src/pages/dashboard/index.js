import React, { useContext, useEffect, useState } from "react";
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
  const [listDeposites, setListDeposites] = useState([]);
  const [listWithdraws, setListWithdraws] = useState([]);
  const [accumulated, setAccumulated] = useState(0);
  const [refreshTransactions, setRefreshTransactions] = useState(false);

  const { Api } = useContext(AuthContext);

  useEffect(() => {
    (async function total() {
      const deposites = await Api.get("/deposites");
      const withdraws = await Api.get("/withdraws");

      setListDeposites(deposites);
      setListWithdraws(withdraws);

      const totalD = sumTotal(deposites).toFixed(2);
      setTotalDeposites(totalD);

      const totalW = sumTotal(withdraws).toFixed(2);
      setTotalWithdraws(totalW);

      const totalA = totalD - totalW;
      setAccumulated(totalA);
    })();
  }, [refreshTransactions]);

  function sumTotal(transactionList) {
    const total = [];

    transactionList.data?.forEach((transaction) =>
      total.push(transaction.price)
    );

    return total.reduce((value, total) => value + total, 0);
  }

  async function addTransactions(isExpense = false, dataForm = {}) {
    isExpense
      ? await Api.post("/withdraws", dataForm)
      : await Api.post("/deposites", dataForm);

    setRefreshTransactions(!refreshTransactions);
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
      <Form
        addTransactions={addTransactions}
        listDeposites={listDeposites}
        listWithdraws={listWithdraws}
      />
    </>
  );
};
