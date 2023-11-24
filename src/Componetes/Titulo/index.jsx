import React from "react";
import styled from "styled-components";
import { font, corTexto } from "../Variaveis/variaveis";
const StyleTitulo = styled.h1`
  font-family: ${font};
  color: ${corTexto};
  font-size: 3em;
  @media (max-width: 768px) {
    font-size: 2em;

    text-align: center;
  }
`;
export default function Titulo({ titulo, cor }) {
  return <StyleTitulo cor={cor}>{titulo}</StyleTitulo>;
}
