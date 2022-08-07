import React, { useState } from "react";
import * as S from "./styles";

export const Form = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState("");

  const handleSave = () => {
    if (!desc || !amount) {
      alert("a descrição e o valor precisam ser preenchidos");
      return;
    } else if (amount < 1) {
      alert("só é permitido valores maiores que zero");
      return;
    }
  };

  return (
    <S.container>
      <S.inputContent>
        <S.label>Description</S.label>
        <S.input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </S.inputContent>
      <S.inputContent>
        <S.label>value</S.label>
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
  );
};
