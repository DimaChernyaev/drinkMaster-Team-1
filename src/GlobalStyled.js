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
    --white-fifty-color: rgba(243, 243, 243, 0.5);
    --whitefourty-color: rgba(243, 243, 243, 0.4);
    --whitetwenty-color: rgba(243, 243, 243, 0.2);
    --whiteeighty-color: #F3F3F380;
    --blacktwenty-color: rgba(0, 0, 0, 0.2);
    --blue-color: #161F37;
    --bluefifty-color: rgba(22, 31, 55, 0.5);
    --hovergreen-color: rgba(64, 112, 205, 0.5);
    --welcomepagetext-color: #FAFAFA;
    --mainbackground-color: #0A0A11;   
    --red-color: rgba(218, 20, 20, 0.5);
    --green-color: rgba(60, 188, 129, 0.5);
    --errorred-color: #da1414;
    --successgren-color: #3CBC81;

    --transition: 300ms ease-in; 
  }

  html {
    
        &[data-theme='dark'] {
    --background-color: var(--mainbackground-color);
    --background-image-color: var(--bluefifty-color);
    --background-image-color-hover: var(--blue-color);
    --background-color-ingredients: transparent;
    --btn-add-drink-color: var(--blue-color);
    --btn-add-drink-background: var(--white-color);
    --buttoncancel-color: #434D67;
    --error-text: rgba(243, 243, 243, 0.1);
    --fill-paginator: rgba(243, 243, 243, 0.30);
    --fill-paginator-hover: var(--white-color);
    --filter-background: var(--blue-color);      
    --filter-border: rgba(243, 243, 243, 0.20);
    --filter-text: var(--white-color); 
    --form-add-drink-text: var(--white-color);
    --hovergreen-color: rgba(64, 112, 205, 0.5);    
    --header-color: var(--white-color); 
    --ingridientTitle-color: rgba(243, 243, 243, 0.50);
    --navigation-border-color: rgba(243, 243, 243, 0.20);
    --placeholder-color: rgba(243, 243, 243, 0.50);
    --subTitle-color: rgba(243, 243, 243, 0.50);
    --text-color: var(--white-color);     
    --whitefifty-color: rgba(243, 243, 243, 0.5);
    --header-line: var(--whitetwenty-color);
  }

    &[data-theme='light'] {
    --background-color: var(--white-color);
    --background-image-color: var(--blue-color);
    --background-image-color-hover: var(--bluefifty-color);
    --background-color-ingredients: red;
    --btn-add-drink-color: var(--white-color);
    --btn-add-drink-background: var(--blue-color);
    --buttoncancel-color: var(--white-color);
    --error-text: rgba(64, 112, 205, 0.10);
    --fill-paginator: rgba(10, 10, 17, 0.30);
    --fill-paginator-hover: #4070CD;
    --filter-background: #FFF;     
    --filter-border: rgba(10, 10, 17, 0.20);
    --filter-text: #0A0A11;
    --form-add-drink-text: var(--mainbackground-color);  
    --hovergreen-color: rgba(64, 112, 205, 1);    
    --header-color: var(--blue-color);
    --ingridientTitle-color:  rgba(10, 10, 17, 0.50);
    --navigation-border-color: rgba(22, 31, 55, 0.20);
    --placeholder-color: rgba(10, 10, 17, 0.5);
    --subTitle-color: rgba(22, 31, 55, 0.50);
    --text-color: #0A0A11;
    --whitefifty-color: rgba(10, 10, 17, 0.5);
    --header-line: var(--blacktwenty-color); 
  }
}
 
  body {
    margin: 0;
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
