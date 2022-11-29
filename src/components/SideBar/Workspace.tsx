import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0 6px 16px;
  background: #2d4071;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;

export const Workspace: React.FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <img src="small-avatar.png" alt="borio-avatar" />
      My workspace
    </Container>
  );
};
