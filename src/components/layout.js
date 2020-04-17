import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; 2020 MD Parser</p>
      </footer>
    </div>
  )
}