import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "./Blog.css";
import Img from "gatsby-image";

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: featuredDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              featuredDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <div className="main">
      <ul className="posts">
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <div>
              <div className="container mt-5">
                <div className="row">
                  <div className="col-12">
                    <article className="blog-card">
                      <div className="blog-card__background">
                        <div className="card__background--wrapper">
                          <div className="card__background--main">
                            {edge.node.featuredImage && (
                              <Img
                                className="featured"
                                fluid={edge.node.featuredImage.fluid}
                                alt={edge.node.title}
                              />
                            )}
                            <div className="card__background--layer" />
                          </div>
                        </div>
                      </div>
                      <div className="blog-card__head">
                        <span className="date__box">
                          <div className="meta">
                            <span>Posted on {edge.node.featuredDate}</span>
                          </div>
                        </span>
                      </div>
                      <div className="blog-card__info">
                        <h5>
                          <Link to={`/${edge.node.slug}/`}>
                            {edge.node.title}
                          </Link>
                        </h5>
                        <p>{edge.node.excerpt.childMarkdownRemark.excerpt}</p>
                        <Link
                          to={`/${edge.node.slug}/`}
                          className="btn btn--with-icon"
                        >
                          <i className="btn-icon fa fa-long-arrow-right" />
                          Read More
                        </Link>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <section className="detail-page">
                <div className="container mt-5"></div>
              </section>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
