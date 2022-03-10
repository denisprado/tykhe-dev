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
          <div className="container">
          <br></br>
          <br></br>
          <h1 className="title">Cartéis em andamento</h1>
            <span style={{'font-weight': 'bold'}}>Autismo</span>
            <br></br>
            Alex Munix
            Alex Barreiro
            Rita Bonança
            Kelly Macedo Alcântara
            Bruno de Paula
            <br></br>
            <br></br>
            <span style={{'font-weight': 'bold'}}>Seminário 9</span>
            <br></br>
            Leonardo Rodrigues
            Thales de Medeiros
            Elisa Mara do Nascimento
            Luís Américo Valadão
            Valéria Motta
            <br></br>
            <br></br>
            <span style={{'font-weight': 'bold'}}>Re-cortes: a direção do tratamento</span>
            <br></br>
            Poliana Muniz
            Deborah Steinberg
            Cibele Kiss
            Jaqueson da Silva
            <br></br>
            <br></br>
            <span style={{'font-weight': 'bold'}}>L'insu…</span>
            <br></br>
            Luís Américo Valadão
            Deborah Steinberg
            Francisco Capoulade
            Lauro Baldini
            Ricardo Goldenberg
            <br></br>
            <br></br>
            <span style={{'font-weight': 'bold'}}>Seminário 11: os quatro conceitos fundamentais da psicanálise</span>
            <br></br>
            Ana Júlia Campos
            Joice Rodrigues Souza Honorato
            Marcia Imaculada de Souza
            Mônica Gobita Alayon
            <br></br>
            <br></br>
            <span style={{'font-weight': 'bold'}}>3 tempos da lei</span>
            <br></br>
            Luís Américo Valadão
            Rita Bonança
            Cibele Kiss
            Bruno de Paula
            <br></br>
            <br></br>
            <span style={{'font-weight': 'bold'}}>Mais, ainda?</span>
            <br></br>
            Lucas Palma
            Silvia Nogueira Cordeiro
            Jaqueson da Silva 
            Lívia Ciscato
            Brunno Toledo
            Letícia Dorigon
          </div>
        </section>
      </Layout>
    );
  }
}
