import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styled from "styled-components";

import { Column } from "./Сolumn";
import { ColumnCreateStatus } from "./ColumnCreateStatus";

type Props = {
  className?: string;
};

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 1px;
  margin-top: 1px;
`;

const initialCards = [
  {
    id: 1,
    title: "Card 1",
    estimate: "0:20h",
    color: "#ABE9CE",
  },
  {
    id: 2,
    title: "Card 2",
    estimate: "0:20h",
    color: "#D8DCFF",
  },
  {
    id: 3,
    title: "Card 3",
    estimate: "0:20h",
    color: "#FFDFBA",
  },
  {
    id: 4,
    title: "Card 4",
    estimate: "0:20h",
    color: "#F2BAE1",
  },
  {
    id: 5,
    title: "Card 5",
    estimate: "0:20h",
    color: "#ABE9CE",
  },
  {
    id: 6,
    title: "Card 6",
    estimate: "0:20h",
    color: "#ABE9CE",
  },
];

const initialColumns = [
  { id: 1, title: "New task", cardIds: [1, 2] },
  { id: 2, title: "Scheduled", cardIds: [3, 4] },
  { id: 3, title: "In progress", cardIds: [5, 6] },
  { id: 4, title: "Completed", cardIds: [] },
];

export const Board: React.FC<Props> = ({ className }) => {
  const [cards] = useState(initialCards);
  const [columns, setColumns] = useState(initialColumns);

  const moveCard = (cardId: number, destColumnId: number, index: number) => {
    setColumns((prev) =>
      prev.map((column) => {
        const filteredIds = column.cardIds.filter((id) => id !== cardId);

        return {
          ...column,
          cardIds:
            column.id === destColumnId
              ? [
                  ...filteredIds.slice(0, index),
                  cardId,
                  ...filteredIds.slice(index),
                ]
              : filteredIds,
        };
      })
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Container className={className}>
        {columns.map(({ title, id, cardIds }, index) => (
          <Column
            key={id}
            id={id}
            title={title}
            cardIds={cardIds}
            cards={cards}
            moveCard={moveCard}
            columnIndex={index}
          />
        ))}

        <ColumnCreateStatus />
      </Container>
    </DndProvider>
  );
};
