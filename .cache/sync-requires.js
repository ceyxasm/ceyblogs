
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/ceyxasm/code/ceyblogs/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/home/ceyxasm/code/ceyblogs/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/home/ceyxasm/code/ceyblogs/src/pages/index.js")),
  "component---src-posts-first-blog-mdx": preferDefault(require("/home/ceyxasm/code/ceyblogs/src/posts/first-blog.mdx")),
  "component---src-posts-second-blog-mdx": preferDefault(require("/home/ceyxasm/code/ceyblogs/src/posts/second-blog.mdx"))
}

