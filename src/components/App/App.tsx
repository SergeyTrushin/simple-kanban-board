import React from "react";
import styled from "styled-components";
import "normalize.css";

import "../../styles/global.scss";

import { Header } from "../Header/Header";
import { Board } from "../Board/Board";
import { Tools } from "../Tools/Tools";

const Container = styled.div`
  display: flex;
  background-color: #f5f8fa;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100vh;
`;

export const App: React.FC = () => {
  return (
    <Container>
      <Tools />
      <BoardContainer>
        <Header />
        <Board />
      </BoardContainer>
    </Container>
  );
};
