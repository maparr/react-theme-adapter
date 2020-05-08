import React from 'react';
import {ThemeProvider} from "styled-components";
import { createTheme, GlobalStyles } from "./theme";
import {MainPage} from "./containers/MainPage";

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
      </>
      <MainPage/>
    </ThemeProvider>
  );
}

export default App;
