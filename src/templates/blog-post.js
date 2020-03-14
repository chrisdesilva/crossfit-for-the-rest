import React from "react"
import { graphql } from "gatsby"
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
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>Author: {data.mdx.frontmatter.author}</p>
      <p>{data.mdx.body}</p>
    </Layout>
  )
}

export default BlogPost
