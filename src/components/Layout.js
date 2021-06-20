import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarHeroFoot from "../components/NavbarHeroFoot";
import NavbarSobreHeroFoot from "../components/NavbarSobreHeroFoot";
import logo from "../img/LogoTYKHE-bco.svg";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";


const TemplateWrapper = ({ children }) => {
  const { props } = children;

  const { title, description } = useSiteMetadata();
  return (
    children && (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix("/")}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}img/favicon-16x16.png`}
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix("/")}img/og-image.jpg`}
          />
        </Helmet>

        {props && props.heroSize ? (
          <section className={"hero is-primary is-bold " + props.heroSize}>
            <div className="hero-head">
              <Navbar hasLogo={false} />
            </div>
            <div className="hero-body">
              {children.props.title && (
                <div className="container ">
                  <div className="columns">
                    <div className="column has-text-centered is-3 is-offset-1">
                      <img src={logo} alt="TYKHE" style={{ width: "18rem" }} />
                    </div>
                    <div className="column is-6">
                      <p className="subtitle">{children.props.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {children.props.NavbarSobreHeroFoot ? (
              <NavbarSobreHeroFoot page={children.props.title} />
            ) : null}
            {children.props.NavbarHeroFoot ? (
              <NavbarHeroFoot page={children.props.title} />
            ) : null}
          </section>
        ) : (
          <section className={"hero is-primary is-bold is-small"}>
            <div className="hero-head">
              <Navbar hasLogo={true} />
            </div>
          </section>
        )}
        {children}
        <Footer />
      </div>
    )
  );
};

export default TemplateWrapper;
