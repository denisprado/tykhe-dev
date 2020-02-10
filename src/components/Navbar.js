import { Link } from "gatsby";
import React from "react";
import logo from "../img/LogoTYKHE-bco.png";
const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar-brand is-large">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="TYKHE" style={{ width: "8rem" }} />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${this.state.navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link
              activeClassName="is-active"
              className="navbar-item"
              to="/publicacoes"
            >
              Publicações
            </Link>
            <Link
              activeClassName="is-active"
              className="navbar-item margin-right-3"
              to="/transmissao"
            >
              Transmissão
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <Link
              activeClassName="is-active"
              className="navbar-item"
              to="/sobre"
            >
              Sobre
            </Link>

            <Link
              activeClassName="is-active"
              className="navbar-item"
              to="/direcao"
            >
              Direção
            </Link>
            <Link
              activeClassName="is-active"
              className="navbar-item"
              to="/associados"
            >
              Associados
            </Link>
            <Link
              activeClassName="is-active"
              className="navbar-item"
              to="/contact"
            >
              Contato
            </Link>
            <a
              title="facebook"
              className="navbar-item"
              href="https://www.facebook.com/TykhePsicanalise"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              title="instagram"
              className="navbar-item"
              href="https://www.instagram.com/tykhepsicanalise/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
