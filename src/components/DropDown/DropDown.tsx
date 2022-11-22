import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Icon from "../Icon";
import { DropDownMenu } from "./DropDownMenu";

export type SelectOptionValue = string | number;

export type SelectOption = { value: SelectOptionValue; label: string };

type DropDownProps = {
  options: SelectOption[];
  value?: SelectOptionValue;
  defaultValue?: SelectOptionValue;
  onChange?: (value: SelectOptionValue) => void;
};

const Container = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  min-width: 85px;
  background-color: #f5f8fa;
  border-radius: 50px;
  color: #222222;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.3s ease-out 0s;
  gap: 8px;

  &:hover {
    background-color: #d7dee480;
  }
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 14px 8px 20px;
`;

export const DropDown: React.FC<DropDownProps> = ({
  value,
  defaultValue,
  options,
  onChange,
}) => {
  const ref = useRef(null);
  const [innerValue, setInnerValue] = useState<SelectOptionValue | undefined>(
    value || defaultValue || options[0].label
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (value: SelectOptionValue) => () => {
    setInnerValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const listener = () => {
      timer = setTimeout(() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }, 200);
    };

    document.addEventListener("mousedown", listener);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      document.removeEventListener("mousedown", listener);
    };
  }, [isOpen]);

  return (
    <Container>
      <Label onClick={handleOpen} ref={ref}>
        {innerValue} <Icon.Arrow />
      </Label>

      {isOpen && (
        <DropDownMenu
          handleSelect={handleSelect}
          innerValue={innerValue}
          options={options}
        />
      )}
    </Container>
  );
};
