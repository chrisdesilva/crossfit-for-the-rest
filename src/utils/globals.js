import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: "Anton", sans-serif;
  }
    a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    transition: color 300ms;
    font-size: 1rem;

    :hover {
      color: ${({ theme }) => theme.primaryDark}
    }
  }
`
