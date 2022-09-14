import React from "react";
import * as S from "./styles";
import { Button } from "../../components/button/index";
export const LandingPage = () => {
  return (
    <S.container>
      <S.header>
          <S.logo>
            <img src="favicon.ico" alt="logo de uma calculadora" />
            <span>APS Finance</span>
          </S.logo>
          <div>
          <Button text="Know More" />
          </div>
      </S.header>
      <S.main>
        <S.sectionLeft></S.sectionLeft>
        <S.sectionRight></S.sectionRight>
      </S.main>
    </S.container>
  );
};
