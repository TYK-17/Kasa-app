import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.scss";

function Header({ logoSrc }) {
  if (!logoSrc) {
    console.error("Erreur : logoSrc manquant pour Header.");
    return null; // Ne pas planter la page si l'image est cassée
  }

  return (
    <header className="header">
      <div className="header-container">
        <img src={logoSrc} alt="Kasa Logo" className="header-logo" />
        <nav className="header-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  logoSrc: PropTypes.string.isRequired,
};

export default Header;
