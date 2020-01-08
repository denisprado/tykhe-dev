import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const CatsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <section className="section">
      <div className="container">
        <Helmet title={`Categorias | ${title}`} />
        <nav className="breadcrumb margin-bottom-3" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="/">TYKHE</a>
            </li>
            <li className="is-active">
              <a aria-current="page" href="/cats">
                Tags
              </a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <h1 className="title">Categorias</h1>
          <h2 className="subtitle is-spaced">
            Navegue pelos tipos de publicação da TYKHE
          </h2>

          {group.map(cat => (
            <li key={cat.fieldValue}>
              <Link to={`/cats/${kebabCase(cat.fieldValue)}/`}>
                {cat.fieldValue} ({cat.totalCount})
              </Link>
            </li>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default CatsPage;

export const catPageQuery = graphql`
  query CatsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___cat) {
        fieldValue
        totalCount
      }
    }
  }
`;
