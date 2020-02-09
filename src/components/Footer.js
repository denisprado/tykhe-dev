import { Link } from "gatsby";
import React from "react";
import logo from "../img/LogoTYKHE-bco.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-text-centered has-background-dark	 ">
          <div className="container margin-bottom-3 has-background-dark	 ">
            <div className="content has-centered-text">
              <div>
                <Link to="/">
                  <div className="content has-text-centered margin-top-3">
                    <img
                      src={logo}
                      alt="TYKHE"
                      style={{ width: "12rem", marginTop: "1.5rem" }}
                    />
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/sobre">Sobre</Link>{" "}
                <span className=" has-text-gray">○ </span>
                <Link to="/publicacoes">Publicações</Link> ○{" "}
                <Link to="/transmissao">Transmissao</Link>
              </div>
              <div>
                <div className="has-text-centered">
                  <a title="facebook" href="https://facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>{" "}
                  <a title="twitter" href="https://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>{" "}
                  <a title="instagram" href="https://instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <p>
                    <Link to="/contact">Contato</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="content has-background-grey-light	">
          <div className="container">
            <nav className="level">
              <div className="level-left has-text-centered">
                <div className="level-item">
                  <a href="/admin/" target="_blank" rel="noopener noreferrer">
                    Admin
                  </a>
                </div>
              </div>
              <div className="level-right has-text-centered">
                <div className="level-item">
                  Website por{" "}
                  <a target="_blank" hef="http://www.denisforigo.com">
                    Denis Forigo
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
};

export default Footer;
