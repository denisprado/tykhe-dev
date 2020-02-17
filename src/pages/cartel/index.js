import React from "react";

import Layout from "../../components/Layout";

export default class TransmissoesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1 className="title">Cartel</h1>
            <h2 className="subtitle is-spaced">
              A experiência de trabalho em cartel foi formulada por Lacan em
              torno da questão da formação do analista.
            </h2>
            <div className="content">
              <div className="columns">
                <div className="column is-3">
                  <img src="./img/cartel.gif" />
                </div>
                <div className="column is-9">
                  <p>
                    O cartel é, em suma, um trabalho de leitura, sustentado num
                    pequeno grupo, composto de três a cinco pessoas; mais Uma
                    cujo papel é o avesso de um líder. Esse é o seu primeiro
                    desafio. Pois cabe a esse último dar destino e consequência
                    ao trabalho de cada um, a partir de sua própria leitura. O
                    que fundamenta, então, o cartel é a realização de um
                    trabalho de elaboração onde cada um sustenta o que tem a
                    dizer, a partir de seu percurso particular de formação. É
                    dessa forma que nos abre a possibilidade de destacar em que
                    a leitura  concerne ao que é da ordem da prática analítica.
                    É um trabalho que nos permite interrogar, um a um, a partir
                    dos efeitos dessa experiência de leitura, os impasses e
                    saídas franqueadas por cada um, em sua análise pessoal.
                    Lacan sublinha que aquilo que é da ordem dos efeitos de uma
                    análise não se pode recolher em grandes grupos. Sendo assim,
                    o trabalho de leitura nos cartéis nos faz engajar em uma
                    reflexão sobre questões cruciais da formação do analista,
                    muitas vezes aterradas sobre os regulamentos, as regras, as
                    hierarquias e as rotinas.
                  </p>
                  <p>
                    A Tykhe abre essa possibilidade para aqueles, associados ou
                    não, que se interessarem em propor um tema e/ou um texto
                    para realizar uma leitura em cartel. Para isso, é necessário
                    que o interessado venha pessoalmente inscrever a sua
                    proposta no nosso mural. Se alguns outros apostarem também
                    na mesma ideia, poderá acontecer um cartel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
