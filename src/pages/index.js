import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
          }
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="Home" />
      <BackgroundImage
        Tag="header"
        fluid={data.file.childImageSharp.fluid}
        style={{ height: "50vh" }}
      />
      <BlogPreview>
        <h2>Blog Posts</h2>
        {data.allMdx.nodes.map(post => (
          <h3>
            <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
          </h3>
        ))}
      </BlogPreview>
    </div>
  )
}

export default IndexPage

const BlogPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`
