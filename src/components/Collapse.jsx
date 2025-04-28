import { useState } from "react";
import PropTypes from "prop-types";
import "./Collapse.scss";
import vectorIcon from "/assets/vector.png"; // Import propre de l'icône

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  if (!title || !content) {
    console.error("Erreur : Collapse nécessite un titre et un contenu.");
    return null; // Sécurité : éviter d'afficher un collapse vide
  }

  return (
    <div className="collapse">
      <button
        className={`collapse-header ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <img
          src={vectorIcon}
          alt="Chevron"
          className={`vector-icon ${open ? "open" : ""}`}
        />
      </button>

      {open && (
        <div className="collapse-content">
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>
      )}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Collapse;
