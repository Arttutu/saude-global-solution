import React from "react";
import styled from "styled-components";
import { corSecundaria, corTexto, font } from "../Variaveis/variaveis";
const StyledBotao = styled.button`
  color: ${corTexto};
  border-radius: 15px;
  border: none;
  background-color: ${corSecundaria};
  font-family: ${font};
  font-size: 1.2em;
  font-weight: bold;
  width: 150px;
  height: 30px;
`;
export default function Botao({ texto }) {
  return <StyledBotao>{texto}</StyledBotao>;
}
