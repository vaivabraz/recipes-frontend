import { createGlobalStyle } from "styled-components";
///* @import url('<https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap>'); */
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0; 
    text-decoration: none;
    border: none;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    font-weight: lighter;
    color:#4C3F2F;
    letter-spacing: 0.1em;
    font-size: 16px;
    line-height: 24px;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root ,  div#__next {
    height: 100%;
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
  --Accent: #b10f14;
  --BorderColor: "#DBDBDB";
  --BorderDarker: "#c4c2c2";
  --DarkGrey: "#888179";
  --HeaderBackground:#fff8f0;
  --AccentColor: "#E1A200";
  --Background: "#ffffff";
  --BackgroundLight: "#ffffff";
  --Text: "#4C3F2F";
  --ShadowNude: "#c4a399";
  --Shadow: 0 0.4rem 0.375rem -0.375rem #c4a399;
  --BorderLine: 1px #DBDBDB solid;
  --errorsRed: "#b63333";


  --ShadowCard: var(--Grey6) 0px 2px 4px 0px;
}
  
`;
