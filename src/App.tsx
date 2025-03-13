import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";

const App: React.FC = () => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
      <AppRoutes />
      </StyledThemeProvider>
    </MuiThemeProvider>
    </div>
  );
};

export default App;