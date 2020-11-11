// MOBILE FIRST

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  background-image: ${(props) => props.mobile};
}

@media (min-width: 600px){
  body {
    background-image: ${(props) => props.tablet};
  }
}

@media (min-width: 900px) and (orientation: portrait) {
    body {
      background-image: ${(props) => props.tablet};
    }
  }

  @media (min-width: 1025px) {
    body {
      background-image: ${(props) => props.route};
    }
  }
`;

export default GlobalStyle;