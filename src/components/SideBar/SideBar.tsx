import React from "react";
import styled from "styled-components";

import { SearchInput } from "./SearchInput";
import { Workspace } from "./Workspace";
import { Menu } from "../Menu/Menu";

type Props = {
  className?: string;
};

const MenuFavorites = [
  { href: "#", label: "Marketing" },
  { href: "#", label: "Mobile App" },
];

const MenuMyProjects = [
  { href: "#", label: "Marketing" },
  { href: "#", label: "Landing Pages" },
  { href: "#", label: "Wedding" },
  { href: "#", label: "Mobile App" },
  { href: "#", label: "House Construction" },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 219px;
  padding-top: 26px;
  background-color: #0f1d40;
`;

const Img = styled.img`
  max-width: 131px;
  margin-left: 16px;
`;

const SearchInputStyled = styled(SearchInput)`
  margin-top: 26px;
  margin-left: 16px;
`;

const WorkspaceStyled = styled(Workspace)`
  margin-top: 19px;
`;

export const SideBar: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <Img src="bordio-logo.svg" alt="borio-avatar" />

      <SearchInputStyled placeholder="Search..." />

      <WorkspaceStyled />

      <Menu items={MenuFavorites} title="Favorites" />

      <Menu items={MenuMyProjects} title="My Projects" />
    </Container>
  );
};
