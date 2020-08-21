import React from "react";

import Layout from "../../components/Layout";

export default class AtendimentoIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1 className="title">Atendimento Clínico
</h1>
            <h2 className="subtitle is-spaced">
              Os psicanalistas associados à Tykhe, comprometidos com o seu conjunto de atividades de transmissão da psicanálise, bem como com a participação da Seção Clínica, voltadas ao aprimoramento de suas práticas, oferecem atendimento clínico àqueles que demandam diretamente à Associação.
            </h2>
            <div className="content">
              <div className="columns">

                <div className="column is-9">
                  <p>
                    Os interessados devem se dirigir diretamente aos analistas da Tykhe, cujos contatos estão disponíveis <Link to={'/associados'}> neste link</Link > (<Link to={'/associados'}>https://www.tykhepsicanalise.com/associados</Link>). O valor da sessão será combinado com cada psicanalista associado e os atendimentos serão feitos diretamente em seus consultórios. Obs.: Durante a pandemia da Covid 19 os analistas estão realizando atendimentos on-line e estas condições devem ser combinados diretamente com cada um.
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
