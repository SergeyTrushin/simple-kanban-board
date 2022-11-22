import React, { FC } from "react";
import styled from "styled-components";

type BadgeProps = {
  variant: "circle" | "square";
  children: React.ReactNode;
};

const StyledBadge = styled.div<BadgeProps>`
  padding: ${({ variant }) =>
    variant === "circle" ? "2px 9px" : "5px 3px 5px 4px"};
  border-radius: ${({ variant }) => (variant === "circle" ? "100px" : "4px")};
  background-color: ${({ variant }) =>
    variant === "circle" ? "#e8ebef" : "#f21247"};
  color: ${({ variant }) => (variant === "circle" ? "#8c939f" : "#fff")};
  font-size: ${({ variant }) => (variant === "circle" ? "14px" : "10px")};
`;

export const Badge: FC<BadgeProps> = ({ variant, children }) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
};
