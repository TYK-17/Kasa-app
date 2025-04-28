import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.scss";

function Card({ housing }) {
  if (!housing || !housing.id || !housing.cover || !housing.title) {
    console.error("Erreur : Données housing manquantes pour Card.");
    return null; // Sécurité : si housing incomplet, ne rien afficher
  }

  return (
    <Link to={`/housing/${housing.id}`} className="card-link">
      <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), url(${housing.cover})`,
        }}
      >
        {housing.title}
      </div>
    </Link>
  );
}

Card.propTypes = {
  housing: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
