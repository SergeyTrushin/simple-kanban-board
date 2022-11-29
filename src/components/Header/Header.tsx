import React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import { Button } from "../Button/Button";
import { DropDown } from "../DropDown/DropDown";
import { SearchInput } from "../SearchInput/SearchInput";
import { Badge } from "../Badge/Badge";

type Props = {
  className?: string;
};

const mockOptions = [
  { value: "Kanban", label: "Kanban" },
  { value: "Board view", label: "Board view" },
  { value: "Table view", label: "Table view" },
];
const mockFilters = [{ value: "Filter", label: "Filter" }];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px #f0f1f2;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconContainer = styled.div`
  position: relative;
  color: #8c939f;
  width: 32px;
  padding-left: 7.5px;
  padding-right: 6.5px;
`;

const BadgeContainer = styled.div`
  position: absolute;
  top: -9px;
  right: -10px;
`;

export const Header: React.FC<Props> = ({ className }) => {
  const notificationCount = 99;
  return (
    <Container className={className}>
      <ButtonContainer>
        <Button>
          <Icon.Plus />
          Add new
        </Button>

        <DropDown
          options={mockOptions}
          onChange={(value) => {
            console.log(value);
          }}
        />

        <DropDown options={mockFilters} />
      </ButtonContainer>

      <SearchContainer>
        <SearchInput placeholder="Search..." />

        <IconContainer>
          <Icon.Bell />

          <BadgeContainer>
            <Badge variant="square">{notificationCount}+</Badge>
          </BadgeContainer>
        </IconContainer>

        <img src="avatar.png" alt="Avatar" />
      </SearchContainer>
    </Container>
  );
};
