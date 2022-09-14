import React from "react";
import * as S from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

export const GridItem = ({
  item,
  onDelete,
  isExpense = false,
  handleDelete,
}) => {
  return (
    <S.tR>
      <S.tD>{item.name}</S.tD>
      <S.tD>{item.info}</S.tD>
      {
        isExpense ? <S.tD alignCenter>- {item.price}</S.tD>
        : <S.tD alignCenter>{item.price}</S.tD>
      }
      
      <S.tD alignCenter>
        {
         isExpense ? <FaRegArrowAltCircleDown color="red" />
         : <FaRegArrowAltCircleUp color="green" />
        }
      </S.tD>
      <S.tD alignCenter>
        <FaTrash
          cursor="pointer"
          onClick={() => handleDelete(isExpense, item.id)}
        />
      </S.tD>
    </S.tR>
  );
};
