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
                <div className="columns">
                  <div className="column">
                    <article class="message is-info">
                      <div class="message-body">
                        A experiência de trabalho em cartel foi formulada por
                        Lacan em torno da questão da formação do analista. O
                        cartel é, em suma, um trabalho de leitura, sustentado
                        num pequeno grupo, composto de três a cinco pessoas.{" "}
                        <strong>Leia mais sobre Cartel</strong>
                      </div>
                    </article>
                  </div>
                  <div className="column">
                    <article class="message is-info">
                      <div class="message-body">
                        A Psicanálise, desde sua invenção por Freud, nunca se
                        pretendeu, tão somente, ser um novo saber, desvinculado
                        de sua experiência clínica.{" "}
                        <strong>Leia mais sobre a Sessão Clínica</strong>
                      </div>
                    </article>
                  </div>
                </div>
                <TransmissoesRoll />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
