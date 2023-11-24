import React from "react";
import styled from "styled-components";
import { corTexto, font } from "../Variaveis/variaveis";
const StyleTexto = styled.p`
  font-family: ${font};
  color: ${corTexto};
  font-size: 1.5em;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;
export default function Texto({ texto }) {
  return <StyleTexto>{texto}</StyleTexto>;
}
