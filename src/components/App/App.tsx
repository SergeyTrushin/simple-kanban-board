import React from "react";
import styled from "styled-components";
import "normalize.css";

import "../../styles/global.scss";

import { Header } from "../Header/Header";
import { Board } from "../Board/Board";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f3f3f3;
`;

export const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Board />
    </Container>
  );
};
