import React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import { List } from "./List";

const mockList = [
  { title: "Roadmap", icon: <Icon.List /> },
  { title: "Schedule", icon: <Icon.Calendar /> },
  { title: "Tasks", icon: <Icon.Task /> },
  { title: "Notes", icon: <Icon.Notes /> },
  { title: "Files", icon: <Icon.File /> },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding-top: 24px;
  padding-right: 16px;
`;

const Title = styled.div`
  padding-left: 16px;
  font-size: 18px;
  line-height: 21px;
  color: #222222;
`;

export const Tools: React.FC = () => {
  return (
    <Container>
      <Title>Tools</Title>

      <List items={mockList} onChange={(v) => console.log(v)} />
    </Container>
  );
};
