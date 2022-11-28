import React, { useState } from "react";
import styled from "styled-components";

type Item = {
  title: string;
  icon: React.ReactNode;
};

type ListProps = {
  items: Item[];
  onChange?: (index: number) => void;
};

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
`;

const Li = styled.li<{ active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 4px 11px 10px;
  font-size: 14px;
  line-height: 16px;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#fff" : "")};
  color: ${({ active }) => (active ? "#0094ff" : "#222222")};

  &::before {
    position: absolute;
    display: ${({ active }) => (active ? "block" : "none")};
    content: "";
    background-color: #0094ff;
    border-radius: 0 10px 10px 0;
    width: 4px;
    left: 0;
    bottom: 0;
    top: 0;
  }

  & > svg {
    color: ${({ active }) => (active ? "#0094ff" : "#222222")};
  }

  &:hover {
    color: #0094ff;

    svg {
      color: #0094ff;
    }
  }
`;

const Title = styled.div`
  min-width: 86px;
`;

export const List: React.FC<ListProps> = ({ items, onChange }) => {
  const [active, setActive] = useState(0);

  const handleClick = (index: number) => () => {
    setActive(index);

    if (onChange) {
      onChange(index);
    }
  };

  return (
    <Ul>
      {items.map(({ title, icon }, index) => (
        <Li active={active === index} key={title} onClick={handleClick(index)}>
          {icon}

          <Title>{title}</Title>
        </Li>
      ))}
    </Ul>
  );
};
