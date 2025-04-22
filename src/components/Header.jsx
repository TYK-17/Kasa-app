import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
    <img src="/assets/logo.png" alt="Kasa Logo" style={{ height: "68px" }} />
    <nav className="header-nav">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Accueil
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
        A Propos
      </NavLink>
    </nav>
  </header>
  
  );
}

export default Header;
