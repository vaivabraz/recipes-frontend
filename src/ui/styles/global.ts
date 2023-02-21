import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {},
  fontSize: {},
  fontWeight: {
    bold: 700,
    medium: 400,
  },
  lineHeight: {},
  borders: {},
};

export default createGlobalStyle`
  * {
    font-family: "Montserrat", sans-serif; 
    letter-spacing: 0.1em;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root ,  div#__next {
    min-height: 100%;
    margin:0;
    display:flex;
    flex:1;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }

  h5 {
    font-size: 16px;
    line-height: 24px;
    margin: 8px 0;
  }

  p {
    
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

 

:root {
  --BorderColor: var(--grullo_light);

  --BorderDarker: #c4c2c2;
  
  --AccentColor: var(--tuscan-red);
  --AccentColorStrong: var(--bloody-red);

  --Secondary:var(--khaki-web);
 
  --Background: var(--cultured);
  --BackgroundLight: var(--white);
  --BackgroundDark: var(--grullo);
 
  --Text: var(--smoky-black);
  --SecondaryText: var(--grullo_light);
 
  --ShadowNude: #c4a399;
 
  --errorsRed: #b63333;

  --Shadow: 0 0.4rem 0.375rem -0.375rem var(--ShadowNude);
  --DarkShadow: -3px 2px 15px 0px var(--very-dark-red);
  --BorderLine: 1px var(--BorderColor) solid;
  --DarkBorderLine: 1px var(--very-dark-red) solid;
  --BorderRadius:15px;


  --new-york-pink: #cc8b86ff;
  --white: #ffffffff;
  --cultured: #f6f3f3ff;
  --tuscan-red: #7d4f50ff;
  --bloody-red: #790e0e;
  --khaki-web: #d1be9cff;
  --grullo: #aa998fff;
  --grullo_light:#E5E0DC;
  --smoky-black: #171412ff;
  --very-dark-red: #551b1d;
}
  
`;
