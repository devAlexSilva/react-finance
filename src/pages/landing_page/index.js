import React from "react";
import * as S from "./styles";
import { Button } from "../../components/button/index";
import { Header } from "../../components/header";
export const LandingPage = () => {
  return (
    <>
  <Header a={"/login"} text="Login" spanColor="#1a1a1a"/>
    <S.container>
      <S.main>
        <S.sectionLeft>
          <div className="content">
            <h1>A forma mais fácil de administrar suas finanças</h1>
            <p>
              mantenha o controle sobre as entradas e saídas de suas finanças,
              de forma prática e gratuita
            </p>
            <div>
              <a href="/register">
                <Button text="Registre-se" />
              </a>
            </div>
          </div>
        </S.sectionLeft>
        <S.sectionRight>
          <div className="content-image" />
        </S.sectionRight>
      </S.main>
    </S.container>
    </>
  );
};
