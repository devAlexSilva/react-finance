import React from "react";
import { RoutesApp } from "./routes";
import * as S from "./styles";

export const App = () => {
  return (
    <>
      <S.global />
      <RoutesApp />
    </>
  );
};
