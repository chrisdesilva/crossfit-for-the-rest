import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Layout from "../components/layout.js"

export const data = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <BlogWrapper>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <Link to="/">&larr; Back to Homepage</Link>
      </BlogWrapper>
    </Layout>
  )
}

export default BlogPost

const BlogWrapper = styled.div`
  padding: 2rem 5rem;

  h1 {
    margin-bottom: 4rem;
  }

  p {
    margin: 0 0 1rem 0;
  }

  ol {
    margin: 1rem 0;

    li {
      font-weight: bold;
    }
  }

  a {
    color: #351c75;
    transition: color 300ms;

    :hover {
      color: black;
    }
  }
`
