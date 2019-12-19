import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <section className="section container">
      <Helmet title={`Tags | ${title}`} />
      <nav className="breadcrumb margin-bottom-3" aria-label="breadcrumbs">
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
      <div className="container">
        <h1 className="title">Tags</h1>
        <h2 className="subtitle is-spaced">Assuntos dos artigos da TYKHE</h2>

        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
