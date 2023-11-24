import React from "react";
import { StyledMain } from "../../Componetes/UI";
import Cadastramento from "../../Componetes/Cadastramento";
import Titulo from "../../Componetes/Titulo";
import styled from "styled-components";
const CaixaPlano = styled.div`
  background-color: #fff;
  width: 70%;
  height: 500px;
  border-radius: 15px;
  margin: 100px;
  padding: 50px 0px;
  box-shadow: 2px 3px 3px #0000004b;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
const CaixaPrincipal = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function Plano() {
  return (
    <StyledMain tela="plano">
      <CaixaPrincipal>
        <Titulo
          titulo="Para darmos continuidade ao plano, preencha seus dados e sintomas
        abaixo:"
        />
        <CaixaPlano>
          <Cadastramento />
        </CaixaPlano>
      </CaixaPrincipal>
    </StyledMain>
  );
}
