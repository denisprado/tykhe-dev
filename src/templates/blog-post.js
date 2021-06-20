import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  pdf_file,
  helmet
}) => {
  const PostContent = contentComponent || Content;
  console.log(pdf_file)
  return (
    <section className="section">
      {helmet || ""}
      <nav
        className="breadcrumb container margin-bottom-3"
        aria-label="breadcrumbs"
      >
        <ul>
          <li>
            <a href="/">TYKHE</a>
          </li>
          <li>
            <a aria-current="page" href="/publicacoes">
              Publicações
            </a>
          </li>
          <li className="is-active">
            <a aria-current="page" href="/{slug}">
              {title}
            </a>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="content">
          <div className="columns box">
            <div className="column">
              <h1 className="title is-size-2-tablet is-size-6-mobile is-bold-light">
                {title}
              </h1>
              <div className="columns box">
                <div className="column">

                  <PostContent content={content} />
                </div>
                <div className="column">
                  <iframe src={pdf_file.publicURL} width={'100%'} marginTop={'20px'} height={'800px'} />
                </div>
              </div>
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,

  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        pdf_file={post.frontmatter.pdf_file}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
      query BlogPostByID($id: String!) {
        markdownRemark(id: {eq: $id }) {
        id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
      title
      description
      pdf_file {
        publicURL
      }
      tags
      }
      fields {
        slug
      }
    }
  }
      `;
