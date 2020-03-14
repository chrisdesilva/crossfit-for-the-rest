import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
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
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <Link to="/">&larr; Back to Homepage</Link>
    </Layout>
  )
}

export default BlogPost
