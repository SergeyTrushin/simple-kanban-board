import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../Icon";

type Item = {
  href: string;
  label: string;
};

type Props = {
  items: Item[];
  title: string;
  className?: string;
};

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Title = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 0 9px 16px;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #2d4071;
  }

  & > svg {
    transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0)")};
  }
`;

const Ul = styled.ul<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: ${({ open }) => (open ? "1000px" : "0px")};
  overflow: hidden;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Li = styled.li`
  display: flex;

  &:hover {
    background-color: #2d4071;

    a {
      color: #fff;
    }
  }

  a {
    width: 100%;
    padding: 9px 16px 9px 16px;
    text-decoration: none;
    font-size: 14px;
    line-height: 16px;
    color: #8c939f;
  }
`;

export const Menu: React.FC<Props> = ({ items, title, className }) => {
  const [active, setActive] = useState(true);

  const handleToggle = () => {
    setActive((prev) => !prev);
  };
  return (
    <Container className={className}>
      <Title active={active} onClick={handleToggle}>
        <Icon.Arrow />
        {title}
      </Title>

      <Ul open={active}>
        {items.map(({ href, label }) => (
          <Li key={href}>
            <a href={href}> {label}</a>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};
