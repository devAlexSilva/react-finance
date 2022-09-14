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
          <a href="/login">
            <Button text="Login" backColor={"#1e255e"} />
          </a>
        </div>
      </S.header>
      <S.main>
        <S.sectionLeft>
          <div className="content">
            <h1>A forma mais fácil de administrar suas finanças</h1>
            <p>
              mantenha o controle sobre as entradas e saídas de suas finanças,
              de forma prática e gratuita
            </p>
            <div>
              <a href="/login">
                <Button text="Começar" />
              </a>
            </div>
          </div>
        </S.sectionLeft>
        <S.sectionRight>
          <div className="content-image" />
        </S.sectionRight>
      </S.main>
    </S.container>
  );
};
