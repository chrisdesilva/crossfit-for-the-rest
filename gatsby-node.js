exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allContentfulBlog {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed on post creation", result.errors)
  }

  const posts = result.data.allContentfulBlog.nodes

  posts.forEach(post => {
    actions.createPage({
      path: `/blog/${post.slug}`,
      component: require.resolve("./src/templates/blog-post.js"),
      context: {
        slug: post.slug,
      },
    })
  })
}
