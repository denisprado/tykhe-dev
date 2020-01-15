import React from "react";
import { Link } from "gatsby";

// import { Container } from './styles';

export default function NavbarHeroFoot() {
  return (
    <div className="hero-foot">
      <nav className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            <li>
              <Link className="navbar-item" to="/publicacoes">
                Publicações
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/transmissao">
                Transmissão
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
