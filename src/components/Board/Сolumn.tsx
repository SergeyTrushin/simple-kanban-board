import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";

import { Badge } from "../Badge/Badge";
import { Card } from "./Card";

type ColumnProps = {
  id: number;
  title: string;
  cards: {
    id: number;
    title: string;
    estimate: string;
    color: string;
  }[];
  cardIds: number[];
  moveCard: (cardId: number, destColumnId: number, index: number) => void;
  columnIndex: number;
};

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 25px 0 15px;
  background-color: #fff;
`;

const TasksContainer = styled.div<{ isFirstColumn: boolean }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 10px;
  padding: 39px 10px 0 10px;
  padding-left: ${({ isFirstColumn }) => (isFirstColumn ? "20px" : "10px")};
  margin-top: 1px;
  background-color: #fff;
`;

export const Column: React.FC<ColumnProps> = ({
  id,
  title,
  cards,
  cardIds,
  moveCard,
  columnIndex,
}) => {
  const cardsAmount = cardIds.length;
  const isFirstColumn = columnIndex === 0;

  const [, drop] = useDrop(
    () => ({
      accept: "card",
      drop(card: { id: number }, monitor) {
        if (!monitor.didDrop()) {
          moveCard(card.id, id, cardsAmount);
        }
      },
    }),
    [cardsAmount]
  );

  return (
    <ColumnContainer ref={drop}>
      <Title>
        {title} <Badge variant="circle">{cardsAmount}</Badge>
      </Title>

      <TasksContainer isFirstColumn={isFirstColumn}>
        {cardIds
          .map((cardId) => cards.find((card) => card.id === cardId))
          .map((card, index) =>
            card ? (
              <Card
                columnId={id}
                columnIndex={index}
                moveCard={moveCard}
                key={card.id}
                id={card.id}
                title={card.title}
                estimate={card.estimate}
                color={card.color}
              />
            ) : null
          )}
      </TasksContainer>
    </ColumnContainer>
  );
};
