import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import '../pages/Blog.css'
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        featuredDate(formatString: "Do MMMM, YYYY")
        featuredImage {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
        }
        body {
          raw
        }
        
      }
  }
`

const BlogPost = props => {
  return (
<div>
      <div className="content">
        <h1 className="tempHead">{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.featuredDate}
        </span>

        {props.data.contentfulBlogPost.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
            alt={props.data.contentfulBlogPost.title}
          />
        )}
        <p>
        {documentToPlainTextString(JSON.parse(props.data.contentfulBlogPost.body.raw))}
      </p>
      </div>
            <Link to="/" className="backA">Visit the Blog Page</Link>
    </div>
  )
}

export default BlogPost