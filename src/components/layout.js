import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"
import { GlobalStyle } from "../utils/globals"

import Header from "./header"
import "./layout.css"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ChildContainer = styled.div`
  flex-grow: 1;
  padding: 1rem;
  h1 {
    text-align: center;
  }
  /* margin-top: 97px; */
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <GlobalStyle />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <ChildContainer>{children}</ChildContainer>
        <footer style={{ textAlign: "center" }}>
          © {new Date().getFullYear()}, CrossFit For The Rest Of Us
        </footer>
      </PageContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
