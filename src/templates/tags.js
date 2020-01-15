import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li className="column is-3" key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <div className="card">
            <div className="card-content">
              <p className="title">{post.node.frontmatter.title}</p>
            </div>
          </div>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } marcados com “${tag}”`;

    return (
      <Layout>
        <Helmet
          heroSize="is-medium"
          NavbarHeroFoot={false}
          title={`${tag} | ${title}`}
        />
        <section className="section">
          <div className="container">
            <nav
              className="breadcrumb margin-bottom-3"
              aria-label="breadcrumbs"
            >
              <ul>
                <li>
                  <a href="/">TYKHE</a>
                </li>
                <li className="is-active">
                  <a aria-current="page" href="/tags">
                    Tags
                  </a>
                </li>
              </ul>
            </nav>

            <h1 className="title">{tagHeader}</h1>

            <ul className="taglist columns is-multiline">{postLinks}</ul>
            <Link to="/tags/">Navegue pelas tags</Link>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
