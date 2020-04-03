import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
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
      blog: allContentfulBlog(
        sort: { fields: post___childMdx___frontmatter___date }
      ) {
        nodes {
          leadImage {
            fluid {
              src
            }
          }
          slug
          post {
            childMdx {
              excerpt
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        Tag="header"
        fluid={data.file.childImageSharp.fluid}
        style={{ height: "50vh", backgroundSize: "contain" }}
      />
      <BlogContainer>
        <h1>CrossFit For The Rest Of Us</h1>
        <BlogPosts>
          {data.blog.nodes.map(post => (
            <BlogPreview key={post.post.childMdx.frontmatter.title}>
              <div>
                <Link to={`/blog/${post.slug}`}>
                  {post.post.childMdx.frontmatter.title}
                </Link>
                <p>{post.post.childMdx.frontmatter.date}</p>
              </div>
            </BlogPreview>
          ))}
        </BlogPosts>
      </BlogContainer>
    </Layout>
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
    color: ${props => props.theme.primary};
    font-size: 1rem;
  }

  p {
    font-size: 0.75rem;
    color: ${props => props.theme.primary};
  }
`

const BlogPreview = styled.div`
  display: flex;
  align-items: center;
  /* div {
    width: 50%;
  } */
`
