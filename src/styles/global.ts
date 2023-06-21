import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
 

:focus{
  outline: 0;
  box-shadow: 0 0 0 2px ${props=> props.theme['yellow-dark']};
}

body{
  background: ${props=> props.theme['background']};
  color: ${props=> props.theme['base-text']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
  font: 400 1rem Roboto, sans-serif;
}

h1{
    color: ${props => props.theme["base-title"]};
    font-size: 3.3rem;
    line-height: 4rem;
    font-family: "Baloo 2";
}

h2{
    color: ${props => props.theme["base-subtitle"]};
    font-size: 2rem;
    line-height: 4rem;
    font-family: "Baloo 2";
}

h3{
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.3rem;
    line-height: 130%;
    font-family: "Baloo 2";
}
`;