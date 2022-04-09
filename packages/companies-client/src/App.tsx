import React from "react";
import "./App.less";
// Themes
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./layout/MUIstyles";
// Components
import Home from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
