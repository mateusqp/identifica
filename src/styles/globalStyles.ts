// src/styles/globalStyles.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    line-height: 1.6;
  }

  /* Estilos para o container principal das páginas */
  .page-container {
    padding: ${({ theme }) => theme.spacing(4)};
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Estilos para o cabeçalho das páginas */
  .page-header {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Estilos para os botões de ação */
  .action-buttons {
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }

  /* Estilos para as tabelas */
  .data-table {
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
`;

export default GlobalStyles;