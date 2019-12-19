import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className=" container">
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
              <h1 className="title">Publicações</h1>
              <h2 className="subtitle is-spaced">Publicações da TYKHE</h2>

              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
