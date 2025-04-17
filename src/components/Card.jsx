import { Link } from "react-router-dom";

function Card({ logement }) {
  return (
    <Link
      to={`/logement/${logement.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent), url(${logement.cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "340px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "flex-end",
          padding: "1rem",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {logement.title}
      </div>
    </Link>
  );
}

export default Card;
