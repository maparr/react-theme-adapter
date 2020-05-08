import {createGlobalStyle} from "styled-components";
import {normalize} from "polished";
import {theme as DefaultTheme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
    ${normalize()}
    
    :root {
      font-size: 62.5%;
      body {
         height: 100vh;
         width: 100vw;
        font-size: 1.6rem;
      }
    }
   
`;

GlobalStyles.defaultProps = { theme: DefaultTheme }
