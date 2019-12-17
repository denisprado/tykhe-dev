import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/LogoTYKHE.png";

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
      <>
        <nav
          className="navbar is-transparent has-shadow is-spaced"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand is-large">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="TYKHE" style={{ width: "90px" }} />
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
                <Link className="navbar-item" to="/publicacoes">
                  Publicações
                </Link>
                <Link className="navbar-item" to="/transmissoes">
                  Transmissão
                </Link>
              </div>
              <div className="navbar-end has-text-centered">
                <Link className="navbar-item" to="/sobre">
                  Sobre
                </Link>
                <Link className="navbar-item" to="/formacao">
                  Formação
                </Link>
                <Link className="navbar-item" to="/direcao">
                  Direção
                </Link>
                <Link className="navbar-item" to="/associados">
                  Associados
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
};

export default Navbar;
