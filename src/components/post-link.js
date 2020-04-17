import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article class="card ">
    <Link to={post.frontmatter.permalink}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.permalink} className="post-link">
          Title: &nbsp;&nbsp;{post.frontmatter.title} <br /><br />
          Permalink: &nbsp;&nbsp;{post.frontmatter.permalink}
        </Link>
      </h2>
      {/* <div class="post-meta">{post.frontmatter.date}</div> */}
    </header>
  </article>
)
export default PostLink