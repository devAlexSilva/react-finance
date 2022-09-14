import React from "react";
import { GridItem } from "../grid_item";
import * as S from "./styles";

export const Grid = ({ listDeposites, listWithdraws, handleDelete }) => {
  return (
    <S.table>
      <S.tHead>
        <S.tR>
          <S.tH width={40}>Nome</S.tH>
          <S.tH width={40}>Descrição</S.tH>
          <S.tH width={40} alignCenter>Valor</S.tH>
          <S.tH width={10} alignCenter>
            Tipo
          </S.tH>
          <S.tH width={10}></S.tH>
        </S.tR>
      </S.tHead>
      <S.tBody>
        {listDeposites.data?.map((item, index) => {
          return <GridItem key={index} item={item} handleDelete={handleDelete} />;
        })}
        {listWithdraws.data?.map((item, index) => {
          return <GridItem key={index} item={item} isExpense={true} handleDelete={handleDelete} />;
        })}
      </S.tBody>
    </S.table>
  );
};
