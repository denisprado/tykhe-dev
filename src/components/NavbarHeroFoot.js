import React from "react";
import { Link } from "gatsby";

// import { Container } from './styles';

export default function NavbarHeroFoot(props) {
  const { page } = props;

  return (
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li
              className={
                page === "TYKHE - Associação de Psicanálise" && "is-active"
              }
            >
              <Link
                activeClassName="is-active"
                className="navbar-item"
                to="/publicacoes"
              >
                Publicações
              </Link>
            </li>
            <li>
              <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/transmissao"
              >
                Transmissão
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}