import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#ff6060', color: '#fff' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Accueil</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
