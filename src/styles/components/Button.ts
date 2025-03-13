// src/styles/components/Button.ts
import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";

export const Button = styled(MuiButton)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.text.secondary};
    cursor: not-allowed;
  }
`;