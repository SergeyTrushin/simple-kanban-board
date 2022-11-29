import React, { FC, useRef, useState } from "react";
import styled from "styled-components";

import Icon from "../Icon";

type Props = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
};

const InputContainer = styled.div`
  position: relative;
  width: 187px;
  padding: 9px 10px;
  background: #2d4071;
  border-radius: 4px;
  font-size: 14px;
  line-height: 14px;
`;

const Input = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
  color: #8c939f;
`;

const PlaceHolder = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #8c939f;
  cursor: text;
`;

const IconContainer = styled.label`
  position: absolute;
  top: 10px;
  right: 16px;
  cursor: text;
`;

export const SearchInput: FC<Props> = ({
  placeholder,
  onChange,
  onBlur,
  onFocus,
  className,
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
    <InputContainer className={className}>
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
