import React from "react";
import { AuthProvider } from "./contexts/auth";
import { RoutesApp } from "./routes";
import * as S from "./styles";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <S.global />
        <RoutesApp />
      </AuthProvider>
    </>
  );
};
