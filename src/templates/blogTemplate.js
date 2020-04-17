import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import div_element from './../shared/const';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const parser = (html_source) => {
    // let result_html = html_source.replace(new RegExp(div_element.before_str, 'gi'), div_element.after_str);
    let result_html = html_source.split(div_element.before_1).join(div_element.before_2);
    result_html = result_html.split(div_element.after_1).join(div_element.after_2);
    return result_html;
  }

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        {/* <meta name="description" content={frontmatter.metaDescription} /> */}
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: parser(html) }}
          />
          {/* { console.log(ReactHtmlParser(html)) } */}
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { permalink: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        permalink
        title
        thumbnail
      }
    }
  }
`