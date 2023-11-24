import { NavLink } from "react-router-dom";
import { corPrimaria } from "../Variaveis/variaveis";
import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: ${corPrimaria};
  max-width: 100%;
  margin: 0 auto;
  height: 100dvh;
  @media (max-width: 768px) {
    height: auto;
  }
`;
export const LinkStyle = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;
