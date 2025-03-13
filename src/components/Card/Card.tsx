// src/components/card/Card.tsx
import React from "react";
import { Card as MuiCard, CardProps, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

// Estilização do Card com styled-components
const StyledCard = styled(MuiCard)<CardProps>`
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

interface CardComponentProps extends CardProps {
  title?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardComponentProps> = ({ title, children, ...props }) => {
  return (
    <StyledCard {...props}>
      <CardContent>
        {title && (
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
        )}
        {children}
      </CardContent>
    </StyledCard>
  );
};

export default Card;