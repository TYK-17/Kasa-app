import { Link } from "react-router-dom";
import "./Error404.scss";

function Error404() {
  return (
    <main className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error-link" aria-label="Retour à l'accueil">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Error404;
