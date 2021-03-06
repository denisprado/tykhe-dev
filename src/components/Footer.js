import { Link } from "gatsby";
import React from "react";
import logo from "../img/LogoTYKHE-bco.svg";
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
const Footer = class extends React.Component {
  render() {
    return (
      <div>
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
                  <a
                    title="facebook"
                    href="https://www.facebook.com/TykhePsicanalise"
                  >
                    < FaFacebookF />
                  </a>{" "}
                  <a
                    title="youtube"
                    className="navbar-item"
                    href="https://www.youtube.com/channel/UCG4TY-7a1GwZA1i_19yc4GA"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    title="instagram"
                    href="https://www.instagram.com/tykhepsicanalise/"
                  >
                    <FaInstagram />
                  </a>
                  <p>
                    <Link to="/contact">Contato</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <nav className="level has-background-grey-light	">
          <p className="level-item has-text-centered">
            <a
              className="has-text-grey"
              href="/admin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin
            </a>{" "}
            | Website por{" "}
            <a
              className="has-text-grey-dark"
              target="_blank"
              hef="http://www.denisforigo.com"
            >
              Denis Forigo
            </a>
          </p>
        </nav>
      </div>
    );
  }
};

export default Footer;
