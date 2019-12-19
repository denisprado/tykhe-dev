import React from "react";
import { Link } from "gatsby";

import logo from "../img/LogoTYKHE.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-grey-lighter	has-text-black">
        <div className="content has-text-centered margin-bottom-3">
          <img src={logo} alt="TYKHE" style={{ width: "14rem" }} />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/sobre">
                        Sobre
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/publicacoes">
                        Publicações
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/transmissao">
                        Transmissao
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contato">
                        Contato
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 has-background-color-grey">
                <nav className="navbar is-transparent ">
                  <div className="navbar-menu">
                    <div className="navbar-start ">
                      <a
                        title="facebook"
                        className="navbar-item"
                        href="https://facebook.com"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        title="twitter"
                        className="navbar-item"
                        href="https://twitter.com"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        title="instagram"
                        className="navbar-item"
                        href="https://instagram.com"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
