import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container ">
            <div className="columns">
              <div className="column">
                <div className="container">
                  <BlogRoll />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
