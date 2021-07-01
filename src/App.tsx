import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
import AlpacaGenerator from "./components/AlpacaGenerator";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlpacaGenerator />
    </ThemeProvider>
  );
}

export default App;
