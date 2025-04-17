import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <img src="/assets/logo.png" alt="Kasa Logo" style={{ height: "68px" }} />

      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
