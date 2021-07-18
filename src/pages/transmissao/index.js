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
