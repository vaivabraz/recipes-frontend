import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: "Montserrat", sans-serif; 
    letter-spacing: 0.1em;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root ,  div#__next {
    height: 100%;
    margin:0;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    list-style-type: none;
  }
  button {
    cursor: pointer;
  }
  h1 {
  font-size: 39.06px;
}

h2 {
  font-size: 31.25px;
}

h3 {
  font-size: 25px;
}

h4 {
  font-size: 20px;
}

h5 {
  font-size: 16px;
  line-height: 24px;
}

:root {
  --BorderColor: #DBDBDB;

  --BorderDarker: #c4c2c2;
 
  --DarkGrey: #888179;
 
  --HeaderBackground: #fff8f0;
 
  --AccentColor: var(--tuscan-red);
  --AccentColorOld: #b75114;

  --Secondary:var(--khaki-web);
 
  --Background: var(--cultured);
  --BackgroundLight: var(--white);
  --BackgroundDark: var(--grullo);
 
  --Text: var(--smoky-black);
  --TextOld: #4C3F2F;
 
  --ShadowNude: #c4a399;
 
  --errorsRed: #b63333;

  --Shadow: 0 0.4rem 0.375rem -0.375rem var(--ShadowNude);
  --BorderLine: 1px var(--BorderColor) solid;
  --BorderRadius:15px;


  --new-york-pink: #cc8b86ff;
  --white: #ffffffff;
  --cultured: #f6f3f3ff;
  --tuscan-red: #7d4f50ff;
  --khaki-web: #d1be9cff;
  --grullo: #aa998fff;
  --smoky-black: #171412ff;
}
  
`;
