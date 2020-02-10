import React from "react";

import Layout from "../../components/Layout";
import TransmissoesRoll from "../../components/TransmissoesRoll";

const Modal = ({ children, closeModal, modalState, title }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">{children}</div>
        </section>
      </div>
    </div>
  );
};

export default class TransmissoesIndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }

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
                        <strong>
                          <a
                            className="is-link is-primary"
                            onClick={this.toggleModal}
                          >
                            Leia mais sobre Cartel
                          </a>
                        </strong>
                        <Modal
                          closeModal={this.toggleModal}
                          modalState={this.state.modalState}
                          title="Cartel"
                        >
                          <p>
                            A experiência de trabalho em cartel foi formulada
                            por Lacan em torno da questão da formação do
                            analista. O cartel é, em suma, um trabalho de
                            leitura, sustentado num pequeno grupo, composto de
                            três a cinco pessoas; mais Uma cujo papel é o avesso
                            de um líder. Esse é o seu primeiro desafio. Pois
                            cabe a esse último dar destino e consequência ao
                            trabalho de cada um, a partir de sua própria
                            leitura. O que fundamenta, então, o cartel é a
                            realização de um trabalho de elaboração onde cada um
                            sustenta o que tem a dizer, a partir de seu percurso
                            particular de formação. É dessa forma que nos abre a
                            possibilidade de destacar em que a leitura  concerne
                            ao que é da ordem da prática analítica. É um
                            trabalho que nos permite interrogar, um a um, a
                            partir dos efeitos dessa experiência de leitura, os
                            impasses e saídas franqueadas por cada um, em sua
                            análise pessoal. Lacan sublinha que aquilo que é da
                            ordem dos efeitos de uma análise não se pode
                            recolher em grandes grupos. Sendo assim, o trabalho
                            de leitura nos cartéis nos faz engajar em uma
                            reflexão sobre questões cruciais da formação do
                            analista, muitas vezes aterradas sobre os
                            regulamentos, as regras, as hierarquias e as
                            rotinas.
                          </p>
                          <p>
                            A Tykhe abre essa possibilidade para aqueles,
                            associados ou não, que se interessarem em propor um
                            tema e/ou um texto para realizar uma leitura em
                            cartel. Para isso, é necessário que o interessado
                            venha pessoalmente inscrever a sua proposta no nosso
                            mural. Se alguns outros apostarem também na mesma
                            ideia, poderá acontecer um cartel.
                          </p>
                        </Modal>
                      </div>
                    </article>
                  </div>
                  <div className="column">
                    <article class="message is-info">
                      <div class="message-body">
                        A Psicanálise, desde sua invenção por Freud, nunca se
                        pretendeu, tão somente, ser um novo saber, desvinculado
                        de sua experiência clínica.{" "}
                        <a
                          className="is-link is-primary"
                          onClick={this.toggleModal}
                        >
                          <strong>Leia mais sobre a Sessão Clínica</strong>
                        </a>
                      </div>
                      <Modal
                        closeModal={this.toggleModal}
                        modalState={this.state.modalState}
                        title="Sessão Clínica"
                      >
                        <p>
                          A Psicanálise, desde sua invenção por Freud, nunca se
                          pretendeu, tão somente, ser um novo saber,
                          desvinculado de sua experiência clínica.
                        </p>
                        <p>
                          Lacan inaugura a seção clínica em 5 de janeiro no ano
                          de 1977 com a seguinte formulação: “O que é a clínica
                          psicanalítica? Não é complicado. Ela tem uma base – é
                          o que se diz em uma psicanálise”. Chega a desconsertar
                          um enunciado de tamanha simplicidade e que, no
                          entanto, procede, em proporção inversa, de uma
                          condensação tamanha; de um longo percurso de síntese e
                          redução. Estão aí embutidos nessa formulação uma
                          teoria do sujeito (o significante como causa material
                          do sujeito), e o papel que nessa teoria é exercido
                          pela linguagem (o incons-ciente estruturado pela
                          linguagem; o inconsciente é o que se diz; o
                          inconsciente no significante).
                        </p>
                        <p>
                          Isso que se diz vem da voz do analisando, impulsionado
                          sob a promessa de que a questão endereçada àquele
                          Outro sabido, pudesse receber de volta uma resposta
                          arranjada com palavras na mais justa adequação às
                          coisas, que bastaria; nada restaria. “Eu me pergunto o
                          que queres, eu te pergunto o que sou” O psicanalista
                          faz diferença. “Então é preciso clinicar”, diz Lacan.
                          O que se passa do lado do analista? Segundo Porge, há
                          um termo que marca a dessimetria entre a posição do
                          analisando e a do analista na dimensão da clínica
                          psicanalítica, é trancher, palavra de múltiplas
                          acepções: fatiar, dividir, separar, decidir, tomar uma
                          decisão, interromper uma conversa, cortar. Na prática
                          “do que se diz”, que é propriamente o dispositivo
                          analítico, o que determina a posição do analista, de
                          seu ato, é que ele corta.
                        </p>
                        <p>
                          Na prática clínica do que se diz, no instante em que a
                          palavra (do analisando) arde, o psicanalista corta
                          antes que se diga que o sujeito já vai tarde. Se o
                          analista encarna essa função de corte, é por ocupar um
                          lugar na transferência e no discurso analítico – o
                          psicanalista faz parte do conceito do inconsciente,
                          uma vez que é a ele que se destina “o que se diz”. De
                          modo que a razão primeira para situar o analista do
                          lado do trancher vem, então, do seu colamento com o
                          inconsciente.
                        </p>
                        <p>
                          Lemos ainda na “Abertura da Seção Clínica”: “Proponho
                          que a Seção que se intitula da ‘clínica psicanalítica’
                          seja uma forma de indagar o psicanalista, de
                          pressioná-lo a declarar suas razões”. Enuncia-se assim
                          uma nova nuance para o termo seção, uma vez que a
                          clínica psicanalítica acontece pelo advento de um
                          corte, de uma secção pelo qual o psicanalista declara
                          às claras as razões do ato que cometeu e que lhe
                          acometeu.  A seção clínica é onde a prática do
                          psicanalista é posta em questão, lugar onde a razão
                          que a fundamenta possa não só ser mostrada, mas também
                          elaborada, em sessão compartilhada.
                        </p>
                        <p>
                          A Seção Clínica dentro da Týkhe - Associação de
                          Psicanálise é o lugar privilegiado para que tais
                          questões relativas a essa prática possam se realizar.
                          Questões estas que envolvem tanto os conceitos
                          fundamentais, a metapsicologia, quanto o desejo do
                          psicanalista. O que pode um analista transmitir de sua
                          prática a um público? A aposta é que a transmissão
                          aconteça na medida em que a psicanálise em intensão se
                          desdobre em psicanálise em extensão, a partir da
                          articulação da clínica com os textos de Psicanálise.
                          Articulação esta que se sustenta a partir do desejo do
                          analista.
                        </p>
                        <p>
                          A seção clínica se dá num 2º tempo do acontecimento
                          clínico, momento em que se inclui o 3º elemento. Cai o
                          fato. Surge o caso clínico.
                        </p>
                        <p>
                          Nossos encontros têm frequência mensal, e são
                          reservados aos membros da Týkhe, responsáveis pelo
                          acontecer da Secção Clínica, o que não exclui que
                          possa haver convidados. Trataremos dos impasses do
                          psicanalista em sua prática, sempre clínica. Lembrando
                          que a clínica se realiza no encontro do psicanalista
                          com o sujeito, seja o encontro no consultório, na
                          instituição ou até mesmo na rua, como um
                          acontecimento.
                        </p>
                        <p>
                          Privilegiamos o encontro com o Real que pode levar um
                          praticante a querer trazer à baila seus impasses,
                          aventurar-se a testemunhar seu encontro, produzir e
                          fazer passar uma questão.
                        </p>
                        <p>
                          A Seção Clínica e a Apresentação de Pacientes se
                          enlaçam, mas não se confundem - à medida que houver a
                          segunda, esta será trabalhada, por um único anotador,
                          que trará suas elaborações por escrito na seção
                          clínica.
                        </p>
                        <p>
                          A agenda é aberta à surpresa, um convite aos
                          associados da Týkhe para que se apresentem.
                        </p>
                        <p>Coordenadores:</p>
                        <p>
                          ​ Antonio Moreira Lima Jr.
                          <br />
                          Luis Américo Valadão Queiroz
                        </p>
                      </Modal>
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
