import React from "react";
import styled from "styled-components";
import Titulo from "../../Componetes/Titulo";
import Texto from "../../Componetes/Texto";
import Linha from "../../Componetes/Linha";
import Login from "../../Componetes/Login";
import banner from "./banner.jpeg";
import { StyledMain } from "../../Componetes/UI";

const Caixa = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px 20px;
  }
`;
const CaixaConteudo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 50%;
  text-align: left;
  overflow-x: hidden;
  gap: 1.5em;
  padding: 0 50px;
  @media (max-width: 768px) {
    padding: 0px;
    text-align: center;
    margin: 20px 50px;
    width: 100vw;
  }
`;
const StyleImagem = styled.img`
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    height: 400px;
  }
`;
export default function Index() {
  return (
    <StyledMain>
      <Caixa>
        <CaixaConteudo>
          <Titulo
            titulo="Promova o Bem-Estar Pós-Operatório com Inovação: Cuide de Seus Entes
            Queridos à Distância!"
            cor="plano"
          />
          <Texto
            texto="Garanta uma assistência completa para seus entes queridos em
            recuperação pós-operatória com nossa inovadora abordagem apoiada
            pela inteligência artificial. Oferecemos um suporte personalizado,
            preços acessíveis e a flexibilidade para criar o plano ideal para
            atender às necessidades específicas do momento de seus entes
            queridos"
          />

          <Linha />
          <Texto texto="Entre no convênio" />
          <Login />
        </CaixaConteudo>
        <div>
          <StyleImagem src={banner}></StyleImagem>
        </div>
      </Caixa>
    </StyledMain>
  );
}
