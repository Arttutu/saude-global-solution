import React from "react";
import { StyledMain } from "../../Componetes/UI";
import styled from "styled-components";
import Titulo from "../../Componetes/Titulo";
import loading from "./loading.gif";
const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  justify-content: center;
`;
const CaixaCarregamento = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 70%;
  height: 500px;
  border-radius: 15px;
  margin: 100px;
  padding: 50px 0px;
  box-shadow: 2px 3px 3px #0000004b;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const StyleGif = styled.img`
  display: flex;
  width: 300px;
  margin: auto auto;
  border-radius: 20px;
`;
export default function Carregamento() {
  return (
    <StyledMain>
      <Caixa>
        <Titulo titulo="Estamos Carregando seu Plano com IA aguarde um momento...." />
        <CaixaCarregamento>
          <StyleGif src={loading} />
        </CaixaCarregamento>
      </Caixa>
    </StyledMain>
  );
}
