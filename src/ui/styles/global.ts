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
  
`;
