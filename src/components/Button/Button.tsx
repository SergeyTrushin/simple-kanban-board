import React from "react";
import styled from "styled-components";

const backgroundColors: Record<string, string> = {
  primary: "#0094ff",
  primaryHovered: "#0076cc",
  outlined: "#f5f8fa",
  outlinedHovered: "#d7dee480",
  text: "transparent",
};

const textColors: Record<string, string> = {
  primary: "#ffffff",
  outlined: "#222222",
  text: "#8C939F",
};

const Container = styled.button<ButtonProps>`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: ${({ variant }) => (variant === "text" ? "0px" : "40px")};
  min-width: 85px;
  padding: ${({ variant }) => (variant === "text" ? "0px" : "8px 20px")};
  background-color: ${(props) => {
    return backgroundColors[props.variant || "primary"];
  }};
  border: none;
  border-radius: 50px;
  outline: none;
  color: ${(props) => textColors[props.variant || "primary"]};
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease-out 0s;

  &:hover {
    background-color: ${({ variant }) => backgroundColors[`${variant}Hovered`]};
  }
`;
type ButtonProps = {
  /** View variant */
  variant?: "primary" | "outlined" | "text";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...restProps
}) => {
  return (
    <Container variant={variant} {...restProps}>
      {children}
    </Container>
  );
};
