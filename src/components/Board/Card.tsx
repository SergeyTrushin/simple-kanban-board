import React, { FC } from "react";
import styled from "styled-components";
import { useDrag, useDrop } from "react-dnd";

type CardProps = {
  id: number;
  columnId: number;
  columnIndex: number;
  color: string;
  title: string;
  estimate: string;
  moveCard: (cardId: number, destColumnId: number, index: number) => void;
};

const CardStyled = styled.div<{
  isDragging: boolean;
  isComplete: boolean;
  isOver: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 15px;
  border-radius: 8px;
  background-color: ${({ color, isComplete }) =>
    isComplete ? "#F0F0F0" : color};
  opacity: ${({ isDragging, isOver }) => {
    if (isDragging) {
      return 0.1;
    }

    if (isOver) {
      return 0.5;
    }

    return 1;
  }};
`;

const Title = styled.div<{ isComplete: boolean }>`
  font-size: 14px;
  color: ${({ isComplete }) => (isComplete ? "#A5A5A5" : "#222222")};
  text-decoration: ${({ isComplete }) => (isComplete ? "line-through" : "")};
`;

const Estimate = styled.div<{ isComplete: boolean }>`
  font-size: 13px;
  color: ${({ isComplete }) => (isComplete ? "#A5A5A5" : "#435e52")};
`;

const completeColumnId = 4;

export const Card: FC<CardProps> = ({
  id,
  columnId,
  columnIndex,
  color,
  title,
  estimate,
  moveCard,
}) => {
  const isComplete = columnId === completeColumnId;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "card",
      drop(card: { id: number }) {
        moveCard(card.id, columnId, columnIndex);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [columnIndex]
  );

  return (
    <CardStyled
      ref={(element) => {
        drag(element);
        drop(element);
      }}
      color={color}
      isOver={isOver}
      isDragging={isDragging}
      isComplete={isComplete}
    >
      <Title isComplete={isComplete}>{title}</Title>
      <Estimate isComplete={isComplete}>{estimate}</Estimate>
    </CardStyled>
  );
};
