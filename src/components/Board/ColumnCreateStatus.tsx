import React from "react";
import styled from "styled-components";

import { Button } from "../Button/Button";
import Icon from "../Icon";

type Props = {
  className?: string;
};

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 13px 36px;
  background-color: #fff;
`;

const ButtonStyled = styled(Button)`
  height: 20px;
  gap: 4px;
`;

const TasksContainer = styled.div`
  flex-grow: 1;
  margin-top: 1px;
  background-color: #fff;
`;

export const ColumnCreateStatus: React.FC<Props> = ({ className }) => {
  return (
    <ColumnContainer className={className}>
      <Title>
        <ButtonStyled variant="text">
          <Icon.PlusGray /> Create status
        </ButtonStyled>
      </Title>

      <TasksContainer />
    </ColumnContainer>
  );
};
