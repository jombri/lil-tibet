import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    
    font-family: 'Catamaran', sans-serif;
    
  }
  h1, h2, h3, h4, h5, h5, p {
    margin: 0;
  }

  .wrapper {
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;
  }
`