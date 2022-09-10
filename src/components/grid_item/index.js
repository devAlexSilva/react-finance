import React from "react";
import * as S from "./styles"
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash
} from "react-icons"


export const GridItem = ({ item, onDelete }) => {
    return(
        <S.tR>
            <S.tD>{item.name}</S.tD>
            <S.tD>{item.info}</S.tD>
            <S.tD>{item.price}</S.tD>
        </S.tR>
        )
}