// src/components/Button/Button.tsx
import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(MuiButton)<ButtonProps>`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};