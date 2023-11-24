import React from "react";
import styled from "styled-components";
import { font } from "../Variaveis/variaveis";
import Botao from "../Botao";
import { LinkStyle } from "../UI";
const StyleLabel = styled.label`
  font-family: ${font};
  font-size: 1.2em;
  color: black;
  @media (max-width: 768px) {
    width: 250px;
    font-size: 1.1em;
    text-align: left;
  }
`;
const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3em;
`;
const StyleInput = styled.input`
  font-family: ${font};
  width: 400px;
  height: 30px;
  border: 1px solid black;
  box-shadow: 2px 3px 3px #0000004b;
  border-radius: 5px;
  font-size: 1em;
  @media (max-width: 768px) {
    width: 300px;
  }
`;
const StyleSelect = styled.select`
  width: 400px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 2px 3px 3px #0000004b;
  font-family: ${font};
  font-size: 1em;
  @media (max-width: 768px) {
    width: 300px;
  }
`;
const StyleOption = styled.option`
  font-family: ${font};
  font-size: 1em;
`;
const StyleTextArea = styled.textarea`
  resize: none;
  width: 400px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 2px 3px 3px #0000004b;
  @media (max-width: 768px) {
    width: 300px;
  }
`;
const CaixaBotao = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`;
export default function Cadastramento() {
  return (
    <StyleForm>
      <StyleLabel for="surgeryType">Tipo de Cirurgia:</StyleLabel>
      <StyleSelect id="surgeryType" name="surgeryType" required>
        <StyleOption value=""></StyleOption>
        <StyleOption value="orthopedic">Ortopédica</StyleOption>
        <StyleOption value="cardiac">Cardíaca</StyleOption>
        <StyleOption value="gastrointestinal">Gastrointestinal</StyleOption>
        <StyleOption value="neurosurgery">Neurocirurgia</StyleOption>
        <StyleOption value="plasticsurgery">Cirurgia Plástica</StyleOption>
        <StyleOption value="ophtalmic">Cirurgia Oftálmica</StyleOption>
        <StyleOption value="urologic">Urológica</StyleOption>
        <StyleOption value="vascular">Cirurgia Vascular</StyleOption>
        <StyleOption value="oncologic">Cirurgia Oncológica</StyleOption>
        <StyleOption value="otolaryngologic">
          Cirurgia Otorrinolaringológica
        </StyleOption>
        <StyleOption value="dental">Cirurgia Dentária</StyleOption>
        <StyleOption value="outras">Outras</StyleOption>
      </StyleSelect>
      <StyleLabel for="symptoms">Nome da Cirurgia:</StyleLabel>
      <StyleInput type="text" />
      <StyleLabel for="symptoms">
        Descreva os sintomas Pós-Operatórios que você está sentido:
      </StyleLabel>
      <StyleTextArea
        id="symptoms"
        name="symptoms"
        rows="4"
        cols="50"
        required
      ></StyleTextArea>
      <CaixaBotao>
        <LinkStyle to="/Carregamento">
          <Botao texto="Enviar Dados"></Botao>
        </LinkStyle>
        <LinkStyle to="/">
          <Botao texto="Voltar"></Botao>
        </LinkStyle>
      </CaixaBotao>
    </StyleForm>
  );
}
