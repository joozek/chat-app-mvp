import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before
  {
    box-sizing: border-box;
  }

  body {
    font-size: 1.5vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

export default GlobalStyle;
