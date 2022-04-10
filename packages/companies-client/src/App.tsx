import React from "react";
// Themes
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./layout/MUIstyles";
import "./App.less";
// Components
import Home from "./components";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
