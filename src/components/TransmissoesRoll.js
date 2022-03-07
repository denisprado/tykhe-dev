import { graphql, Link, StaticQuery } from "gatsby";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { Chrono } from "react-chrono";

export const TransmissoesRoll = props => {
  const { data } = props;
  const { edges: allPosts } = data.allMarkdownRemark;

  const emptyQuery = "";

  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery
  });

  

  function truncateString(str, n) {
    if (str.length > n) {
      return str.substring(0, n) + "...";
    } else {
      return str;
    }
  }

  function handleInputChange(event) {
    const query = event.target.value;
    const { data } = props;
    // this is how we get all of our posts
    const { edges: posts } = data.allMarkdownRemark || [];
    const filteredData = posts.filter(post => {
      // destructure data from post frontmatter
      const { description, title, tags } = post.node.frontmatter;
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        tags
          .join("") // convert tags from an array to string
          .toLowerCase()
          .includes(query.toLowerCase())
      );
    });

    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData // with filtered data from posts.filter(post => (//filteredData)) above
    });
  }

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const posts = hasSearchResults ? filteredData : allPosts;

  return (
    <div>
      <nav className="panel margin-bottom-3">
        <div className="panel-block has-background-white">
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              id="filter"
              placeholder="Filtrar atividades de Transmissão."
              onChange={handleInputChange}
            />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
      </nav>
      <div className="columns is-multiline">
        <Chrono mode="VERTICAL_ALTERNATING">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column is-4" key={post.id}>
              <article className="box card">
                <div className="card-image">
                  <figure className="image">
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <Link to={post.fields.slug}>
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `Imagem de destaque para ${post.frontmatter.title}`
                            }}
                          />
                        </Link>
                      </div>
                    ) : null}
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">{post.frontmatter.title}</p>

                  <div className="content">{truncateString(post.frontmatter.description, 150)}</div>
                  <div className="content">
                    {post.frontmatter.tags && post.frontmatter.tags.length
                      ? post.frontmatter.tags.map(tag => (
                          <Link
                            to={`/tags/${kebabCase(tag)}/`}
                            key={tag + `tag`}
                          >
                            <span className="tag is-medium">{truncateString(tag, 30)}</span>
                          </Link>
                        ))
                      : null}
                  </div>

                  <footer className="card-footer">
                    <div className="card-footer-item">
                      <Link to={post.fields.slug}>Continue Lendo →</Link>
                    </div>
                  </footer>
                </div>
              </article>
            </div>
          ))}
        </Chrono>
      </div>
    </div>
  );
};

TransmissoesRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query TransmissoesRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "transmissoes-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                tags
                templateKey
                date(formatString: "DD/MM/YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TransmissoesRoll data={data} count={count} />}
  />
);
