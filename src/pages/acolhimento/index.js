import React from "react";

import Layout from "../../components/Layout";

export default class TransmissoesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1 className="title is-spaced">Comissão de Acolhimento</h1>

            <div className="content">
              <div className="columns">
                <div className="column is-3">
                  <h4>Integrantes</h4>
                  <table>

                    <tr>
                      <td>Geison de Araújo Campos</td>
                    </tr>
                    <tr>
                      <td>Marta Togni Ferreira</td>
                    </tr>
                  </table>

                </div>
                <div className="column is-9">
                  <p>
                    A Comissão de Acolhimento tem a função de receber e acolher
                    os pedidos de estabelecimento de laços com a Tykhe
                    Associação de Psicanálise, sejam: 1) pedidos de entrada na
                    instituição para um percurso de formação em psicanálise; 2)
                    pedidos de informações e questões sobre a formação ou sobre
                    o funcionamento da instituição; 3) acolher e direcionar
                    aquele(a)s que nos procuram para que possam encontrar suas
                    vias singulares de entrada na psicanálise; 4) acolher os
                    relatos e registrar os efeitos da experiência daquele(a)s
                    que vierem a deixar a instituição.
                  </p>
                  <p>
                    Esta entrada não se dá por vias burocráticas ou pelo
                    seguimento de um programa nos moldes da universidade. A
                    entrada na formação acontece pelo desejo e pela disposição
                    do sujeito de se sustentar aí, em determinado momento de seu
                    percurso.
                  </p>
                  <p>
                    A solicitação de entrada na instituição ou de informações
                    sobre o funcionamento deve ser encaminhada por e-mail à
                    secretaria da Tykhe, que vai direcionar o pedido à Comissão
                    para agendar uma entrevista com um dos membros.
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
