import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container columns">
            <div className="column is-offset-1">
              <nav
                className="breadcrumb margin-bottom-3"
                aria-label="breadcrumbs"
              >
                <ul>
                  <li>
                    <a href="/">TYKHE</a>
                  </li>
                  <li className="is-active">
                    <a aria-current="page" href="/publicacoes">
                      Publicações
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="container">
                <BlogRoll />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
