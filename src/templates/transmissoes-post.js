import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import PreviewCompatibleImage from "./../components/PreviewCompatibleImage";

export const TransmissoesPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  slug,
  featuredimage
}) => {
  const PostContent = contentComponent || Content;

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
            <a aria-current="page" href="/transmissao">
              Transmissão
            </a>
          </li>
          <li className="is-active">
            <a aria-current="page" href="/${slug}">
              {title}
            </a>
          </li>
        </ul>
      </nav>
      <div className="container content has-background-white">
        <div className="columns">
          <div className="column">
            <h1 className="title is-size-2-tablet is-size-4-mobile is-bold-light">
              {title}
            </h1>
            <div className="columns">
              <div className="column is-one-third">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: featuredimage,
                    alt: `Imagem de destaque para ${title}`
                  }}
                />
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
              <div className="column is-two-third">
                <PostContent content={content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TransmissoesPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const TransmissoesPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TransmissoesPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        slug={post.fields.slug}
        helmet={
          <Helmet titleTemplate="%s | Transmissão">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

TransmissoesPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default TransmissoesPost;

export const pageQuery = graphql`
  query TransmissoesPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD de MMMM de YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 980, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
