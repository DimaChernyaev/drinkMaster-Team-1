import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

@font-face {
    src: url('../src/assets/fonts/Manrope-Regular.ttf') format('ttf');
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    src: url(../src/assets/fonts/Manrope-SemiBold.ttf) format('ttf');
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    src: url(../src/assets/fonts/Manrope-SemiBold.ttf) format('ttf');
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-display: swap;
    font-style: normal;
  }

    :root {
    --white-color: #F3F3F3;
    --whitefifty-color: rgba(243, 243, 243, 0.5);
    --whitefourty-color: rgba(243, 243, 243, 0.4);
    --whitetwenty-color: rgba(243, 243, 243, 0.2);
    --whiteeighty-color: #F3F3F380;
    --blue-color: #161F37;
    --bluefifty-color: rgba(22, 31, 55, 0.5);
    // --hovergreen-color: rgba(64, 112, 205, 0.5);
    --welcomepagetext-color: #FAFAFA;
    --mainbackground-color: #0A0A11;
    --buttoncancel-color: #434D67;
    --red-color: rgba(218, 20, 20, 0.5);
    --green-color: rgba(60, 188, 129, 0.5);
    --errorred-color: #da1414;
    --successgren-color: #3CBC81;

    --transition: 300ms ease-in; 
  }

  
  html {
    /* dark theme */
  &[data-theme='dark'] {
    --background-color: var(--mainbackground-color);
    --text-color: #F3F3F3;
    --whitefifty-color: rgba(243, 243, 243, 0.5);
    --hovergreen-color: rgba(64, 112, 205, 0.5);
    --fill-paginator: rgba(243, 243, 243, 0.30);
  }

  &[data-theme='light'] {
    --background-color: var( --white-color);
    --text-color: #0A0A11;
    --whitefifty-color: rgba(10, 10, 17, 0.5);
    --hovergreen-color: rgba(64, 112, 205, 1);
    --fill-paginator: rgba(10, 10, 17, 0.30);
  }

  body {
    background-color: var(--background-color);
    font-family: 'Manrope', sans-serif;
    color: var(--text-color);
    word-wrap: break-word;
    line-height: 1.2;
  }


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
button {
  cursor: pointer;
  font-family: inherit;
}
`;

export default GlobalStyle;
