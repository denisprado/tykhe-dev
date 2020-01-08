import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

class CatRoute extends React.Component {
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
    const cat = this.props.pageContext.cat;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const catHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } marcados com “${cat}”`;

    return (
      <Layout>
        <Helmet title={`${cat} | ${title}`} />
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
                  <a aria-current="page" href="/cats">
                    Categorias
                  </a>
                </li>
              </ul>
            </nav>

            <h1 className="title">{catHeader}</h1>

            <ul className="catlist columns is-multiline">{postLinks}</ul>
            <Link to="/cats/">Navegue pelas categorias</Link>
          </div>
        </section>
      </Layout>
    );
  }
}

export default CatRoute;

export const catPageQuery = graphql`
  query CatPage($cat: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { cat: { in: [$cat] } } }
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
