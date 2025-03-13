// src/styles/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4A90E2", // Azul suave
    },
    secondary: {
      main: "#50E3C2", // Verde água claro
    },
    background: {
      default: "#F9F9F9", // Cinza muito claro para o fundo
      paper: "#FFFFFF",   // Branco para fundos de componentes
    },
    text: {
      primary: "#333333", // Cinza escuro para texto principal
      secondary: "#777777", // Cinza médio para texto secundário
    },
    error: {
      main: "#FF6B6B", // Vermelho suave para erros
    },
    warning: {
      main: "#FFD166", // Amarelo suave para alertas
    },
    success: {
      main: "#4CAF50", // Verde suave para sucesso
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif", // Fonte clean e moderna
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  spacing: 8, // Base para espaçamentos (8px)
  shape: {
    borderRadius: 8, // Bordas arredondadas suaves
  },
});

export default theme;