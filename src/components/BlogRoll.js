import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { setState } from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const BlogRoll = props => {
  const { data } = props;
  const { edges: allPosts } = data.allMarkdownRemark;

  const emptyQuery = "";

  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery
  });

  function handleInputChange(event) {
    const query = event.target.value;
    const { data } = props;
    console.log(data);
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
    <>
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-medium is-primary"
            type="text"
            id="filter"
            placeholder="Pesquise em nossas publicações."
            onChange={handleInputChange}
          />
          <span className="icon is-medium is-left">
            <i className="fas fa-envelope fa-lg"></i>
          </span>
          <span className="icon is-medium is-right">
            <i className="fas fa-check fa-lg"></i>
          </span>
        </div>
      </div>

      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className='column card is-4 blog-list-item tile is-child box notification ${
              post.frontmatter.featuredpost ? "is-featured" : ""'
              key={post.id}
            >
              <div className="card-image ">
                <figure className="image ">
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`
                        }}
                      />
                    </div>
                  ) : null}
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{post.frontmatter.title} </p>
                    {/* <p className="subtitle is-6">@johnsmith</p> */}
                  </div>
                </div>

                <div className="content">
                  {post.excerpt}
                  {post.tags && post.tags.map(tag => <a href="#">#{tag} </a>)}
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Continue Lendo →
                  </Link>
                  <time datetime="2016-1-1">{post.frontmatter.date}</time>
                </div>
              </div>
              {/* <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Continue Lendo →
                  </Link>
                </p>
              </article> */}
            </div>
          ))}
      </div>
    </>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
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
                    fluid(maxWidth: 120, quality: 100) {
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
