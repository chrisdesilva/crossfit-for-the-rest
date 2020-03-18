import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
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
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
        style={{ height: "50vh", backgroundSize: "contain" }}
      />
      <BlogContainer>
        <h1>CrossFit For The Rest Of Us</h1>
        <BlogPosts>
          {data.allMdx.nodes.map(post => (
            <BlogPreview key={post.frontmatter.title}>
              <div>
                <h2>
                  <Link to={`/blog/${post.frontmatter.slug}`}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
              </div>
            </BlogPreview>
          ))}
        </BlogPosts>
      </BlogContainer>
    </div>
  )
}

export default IndexPage

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

const BlogPosts = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-size: 1rem;
  }
`

const BlogPreview = styled.div`
  display: flex;
  align-items: center;
  /* div {
    width: 50%;
  } */
`
