import React from "react";
import { Link } from "gatsby";

// import { Container } from './styles';

export default function NavbarSobreHeroFoot(props) {
  const { page } = props;

  return (
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li className={page === "Sobre" && "is-active"}>
              <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/sobre"
              >
                Sobre a Associação
              </Link>
            </li>
            <li className={page === "Direção" && "is-active"}>
              <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/direcao"
              >
                Direção Atual
              </Link>
            </li>
            <li className={page === "Associados" && "is-active"}>
              <Link
                className="navbar-item"
                activeClassName="is-active"
                to="/associados"
              >
                Associados
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
