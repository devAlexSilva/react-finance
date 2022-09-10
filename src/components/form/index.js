import React, { useState } from "react";
import { Grid } from "../grid";
import * as S from "./styles";

export const Form = ({ addTransactions, listDeposites, listWithdraws, handleDelete }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const handleSave = async () => {
    if (!desc || !amount || !name) {
      alert("todos os campos precisam ser preenchidos");
      return;
    } else if (amount < 1) {
      alert("só é permitido valores maiores que zero");
      return;
    }

    const dataForm = {
      name: name,
      info: desc,
      price: Number(amount),
    };

    addTransactions(isExpense, dataForm);
    setName("");
    setDesc("");
    setAmount("");
  };


  return (
    <>
    <S.container>
      <S.inputContent>
        <S.label>Nome</S.label>
        <S.input value={name} onChange={(e) => setName(e.target.value)} />
      </S.inputContent>
      <S.inputContent>
        <S.label>Descrição</S.label>
        <S.input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </S.inputContent>
      <S.inputContent>
        <S.label>Valor</S.label>
        <S.input
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </S.inputContent>
      <S.radioGroup>
        <S.label htmlFor="rIncome">Entrada</S.label>
        <S.input
          type="radio"
          id="rIncome"
          defaultChecked
          name="group1"
          onChange={(e) => setIsExpense(!isExpense)}
        />
        <S.label htmlFor="rExpenses">Saída</S.label>
        <S.input
          type="radio"
          id="rExpenses"
          name="group1"
          onChange={(e) => setIsExpense(!isExpense)}
        />
      </S.radioGroup>
      <S.button onClick={handleSave}>ADICIONAR</S.button>
    </S.container>
      <Grid listDeposites={listDeposites} listWithdraws={listWithdraws} handleDelete={handleDelete}/>
    </>
  );
};
