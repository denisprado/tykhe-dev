import React from "react";

import Layout from "../../components/Layout";
import TransmissoesRoll from "../../components/TransmissoesRoll";

export default class TransmissoesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section
          className="section"
          heroSize="is-medium"
          NavbarHeroFoot={false}
        >
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
                  <a aria-current="page" href="/transmissao">
                    Transmissão
                  </a>
                </li>
              </ul>
            </nav>

            <h1 className="title">Transmissão</h1>
            <h2 className="subtitle is-spaced">
              Palestras, Cursos e outras atividades de transmissão da TYKHE
            </h2>
            <TransmissoesRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
