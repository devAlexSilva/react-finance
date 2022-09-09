import React, { useContext, useState } from "react";
import * as S from "./styles";
import { api } from "../../api/axios";
import { AuthContext } from "../../contexts/auth";


export const Form = () => {
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState("");
  const context = useContext(AuthContext)

  const handleSave = async () => {
    if (!desc || !amount || !name) {
      alert("todos os campos precisam ser preenchidos");
      return;
    } else if (amount < 1) {
      alert("só é permitido valores maiores que zero");
      return;
    }

    const data = {
      name: name,
      info: desc,
      price: Number(amount),
    };

    const { Api } = context
      
    const result = await Api.post('/deposites', data)

    console.log(result)
    
  };
  return (
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
  );
};
