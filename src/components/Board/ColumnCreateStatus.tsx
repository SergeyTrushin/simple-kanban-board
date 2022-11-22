import React from "react";
import styled from "styled-components";

import { Button } from "../Button/Button";
import Icon from "../Icon";

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 19px 36px;
  background-color: #fff;
`;

const ButtonStyled = styled(Button)`
  gap: 4px;
`;

const TasksContainer = styled.div`
  flex-grow: 1;
  margin-top: 1px;
  background-color: #fff;
`;

export const ColumnCreateStatus: React.FC = () => {
  return (
    <ColumnContainer>
      <Title>
        <ButtonStyled variant="text">
          <Icon.PlusGray /> Create status
        </ButtonStyled>
      </Title>

      <TasksContainer />
    </ColumnContainer>
  );
};
