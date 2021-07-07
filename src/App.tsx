import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
import Meta from "./components/Meta";
import AlpacaGenerator from "./components/AlpacaGenerator";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <AlpacaGenerator />
    </ThemeProvider>
  );
}

export default App;
