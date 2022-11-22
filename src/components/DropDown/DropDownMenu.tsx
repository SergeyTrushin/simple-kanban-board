import React from "react";
import styled from "styled-components";

import { SelectOption, SelectOptionValue } from "./DropDown";

type DropDownMenuProps = {
  options: SelectOption[];
  innerValue?: SelectOptionValue;
  handleSelect: (value: SelectOptionValue) => () => void;
};

const Menu = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  display: flex;
  flex-direction: column;
  min-width: 132px;
  background-color: #fff;
  padding: 6px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

const MenuItem = styled.div<{ active: boolean }>`
  display: inline-flex;
  padding: 12px 8px;
  background-color: ${(props) => (props.active ? "#F5F8FA" : "")};
  border-radius: 4px;

  &:hover {
    background-color: #f5f8fa;
  }
`;

export const DropDownMenu = ({
  options,
  innerValue,
  handleSelect,
}: DropDownMenuProps) => {
  return (
    <Menu>
      {options.map(({ value, label }) => (
        <MenuItem
          key={value}
          active={value === innerValue}
          onClick={handleSelect(value)}
        >
          {label}
        </MenuItem>
      ))}
    </Menu>
  );
};
