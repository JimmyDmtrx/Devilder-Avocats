import { NavLink } from "react-router-dom";
import { React } from "react";

const Header = () => {
  return (
    <div className="header p-4 ">
      <div className="container">
        <section className="row justify-content-around align-items-center">
          <h1 className="col-5 fw-lighter">
            <span className="logo">Devilder</span> Avocats
          </h1>

          <div className="col-6">
            <ul className="d-flex justify-content-between mt-3">
              <li>
                <NavLink
                  to="/"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/equipe"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  Equipe
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/secteurs"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  Secteurs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/expertises"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  Expertises
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
