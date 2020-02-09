import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section margin-bottom-3">
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
                      <a aria-current="page" href="/contato">
                        contato
                      </a>
                    </li>
                  </ul>
                </nav>
                <h1 className="title">Contato</h1>
                <h2 className="subtitle is-spaced">
                  Envie sua mensagem ou saiba como chegar até nossa sede.
                </h2>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="content">
            <div className="columns margin-bottom-3">
              <div className="column is-4">
                <h4>Endereço</h4>
                <p>
                  <strong>Týkhe Associação de Psicanálise</strong>
                  <br />
                  Rua Américo Brasiliense, 244, sala 61
                  <br />
                  Cambuí, Campinas/SP - CEP 13025-230
                </p>
              </div>
              <div className="column is-4">
                <h4>Contato</h4>
                <p>
                  Tel: 19 3253-1945
                  <br />
                  Fax: 19 3254-0542
                  <br />
                  Email: tykhepsicanalise@gmail.com
                </p>
              </div>
              <div className="column is-4">
                <h4>Secretaria TÝKHE</h4>
                <p>
                  Horário de <strong>funcionamento da secretaria</strong>:
                  <br />
                  Terça e quinta-feira
                  <br />
                  das 15h às 20h.
                </p>
              </div>
            </div>
            <div className="columns margin-bottom-3">
              <div className="column is-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58823.47122046687!2d-47.08886598087608!3d-22.859202769122117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf4fd0b35f53%3A0x9fc34167a86cdb9a!2sR.%20Am%C3%A9rico%20Brasiliense%2C%20244%20-%20Cambu%C3%AD%2C%20Campinas%20-%20SP%2C%2013025-230!5e0!3m2!1spt-BR!2sbr!4v1576763631753!5m2!1spt-BR!2sbr"
                  frameborder="0"
                  width="100%"
                  height="100%"
                  allowfullscreen=""
                ></iframe>
              </div>
              <div className="column is-4">
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"name"}>
                      Seu nome
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"text"}
                        name={"name"}
                        onChange={this.handleChange}
                        id={"name"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"email"}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"email"}
                        name={"email"}
                        onChange={this.handleChange}
                        id={"email"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"message"}>
                      Mensagem
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={"message"}
                        onChange={this.handleChange}
                        id={"message"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
