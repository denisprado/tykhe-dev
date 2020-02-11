import React from "react";

import Layout from "../../components/Layout";
import TransmissoesRoll from "../../components/TransmissoesRoll";

export default class TransmissoesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <nav
                  className="breadcrumb margin-bottom-3"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="/">TYKHE</a>
                    </li>
                    <li className="is-active">
                      <a aria-current="page" href="/transmissao">
                        Transmissão
                      </a>
                    </li>
                  </ul>
                </nav>
                <h1 className="title">Transmissão</h1>
                <h2 className="subtitle is-spaced">
                  Grupos de leitura, seminários, cursos e atividades.
                </h2>
                <TransmissoesRoll />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
