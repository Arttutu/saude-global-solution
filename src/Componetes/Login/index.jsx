import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import Botao from "../Botao";
import { corTexto, font } from "../Variaveis/variaveis";
import { LinkStyle } from "../UI";

const StyleLabel = styled.label`
  font-family: ${font};
  font-size: 1.2em;
  color: ${corTexto};
`;
const StyleInput = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  border-radius: 5px;
`;
const StyleForm = styled.form`
  display: flex;
  align-items: left;
  gap: 1.3em;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Login() {
  return (
    <div>
      <StyleForm>
        <StyleLabel>CPF:</StyleLabel>
        <StyleInput type="number" id="cpf" required />
        <StyleLabel>Senha:</StyleLabel>
        <StyleInput type="password" id="senha" required />
        <LinkStyle to="/plano">
          <Botao texto="Entrar" />
        </LinkStyle>
      </StyleForm>
    </div>
  );
}
