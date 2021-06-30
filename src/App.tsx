import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import AlpacaGenerator from "./AlpacaGenerator";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlpacaGenerator />
    </ThemeProvider>
  );
}

export default App;
