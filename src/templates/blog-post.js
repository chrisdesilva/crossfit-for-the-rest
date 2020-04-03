import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Layout from "../components/layout.js"

export const data = graphql`
  query($slug: String!) {
    blog: contentfulBlog(slug: { eq: $slug }) {
      post {
        childMdx {
          body
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <BlogWrapper>
        <MDXRenderer>{data.blog.post.childMdx.body}</MDXRenderer>
        <Link to="/">&larr; Back to Homepage</Link>
      </BlogWrapper>
    </Layout>
  )
}

export default BlogPost

const BlogWrapper = styled.div`
  max-width: 90vw;
  padding: 0 1rem;

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

  img {
    margin: 0 auto;
    width: 90vw;
    max-width: 500px;
    display: block;
  }

  /* a {
    color: #351c75;
    transition: color 300ms;

    :hover {
      color: black;
    }
  } */
`
