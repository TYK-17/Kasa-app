import { Link } from "react-router-dom";
import './Card.scss';

function Card({ housing }) {
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

export default Card;
