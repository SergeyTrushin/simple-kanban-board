import React, { FC, useRef, useState } from "react";
import styled from "styled-components";

import Icon from "../Icon";

type SearchInputProps = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const InputContainer = styled.div`
  position: relative;
  width: 180px;
  padding: 12px 16px;
  background-color: #f5f8fa;
  border-radius: 50px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
`;

const PlaceHolder = styled.label`
  position: absolute;
  top: 12px;
  left: 16px;
  color: #8c939f;
  cursor: text;
`;

const IconContainer = styled.label`
  position: absolute;
  top: 12px;
  right: 16px;
  cursor: text;
`;

export const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  onChange,
  onBlur,
  onFocus,
  ...restProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(value !== undefined && value !== "");

  const placeholderElement = React.useMemo(() => {
    if (filled || focused) {
      return null;
    }

    if (placeholder) {
      return <PlaceHolder htmlFor="input">{placeholder}</PlaceHolder>;
    }

    return null;
  }, [placeholder, filled, focused]);

  const iconElement = React.useMemo(() => {
    if (filled || focused) {
      return null;
    }

    return (
      <IconContainer htmlFor="input">
        <Icon.Search />
      </IconContainer>
    );

    return null;
  }, [placeholder, filled, focused]);

  const handleClick = React.useCallback(() => {
    inputRef.current?.focus();
    setFocused(true);
  }, [inputRef]);

  const handleFocus = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      if (onFocus) {
        onFocus(event);
      }
    },
    [onFocus]
  );

  const handleBlur = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur]
  );

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      if (onChange) {
        onChange(event);
      }
    },
    [onChange]
  );

  React.useEffect(() => {
    if (value !== undefined && value !== "") {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [value]);
  return (
    <InputContainer>
      {placeholderElement}
      <Input
        {...restProps}
        id="input"
        ref={inputRef}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onClick={handleClick}
      />
      {iconElement}
    </InputContainer>
  );
};
