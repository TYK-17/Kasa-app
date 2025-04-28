import { useState } from "react";
import PropTypes from "prop-types";
import "./Carousel.scss";
import vector from "/assets/vector.png"; // Réutilisation de l'icône collapse

function Carousel({ pictures }) {
  if (!pictures || pictures.length === 0) {
    console.error("Erreur : Aucune image fournie au Carousel.");
    return null;
  }

  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  const next = () =>
    current === total - 1 ? setCurrent(0) : setCurrent(current + 1);
  const prev = () =>
    current === 0 ? setCurrent(total - 1) : setCurrent(current - 1);

  return (
    <div className="carousel-container">
      <img
        src={pictures[current]}
        alt={`Slide ${current + 1}`}
        className="carousel-image"
      />

      {total > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Image précédente"
            className="carousel-button left"
          >
            <img
              src={vector}
              alt="Précédent"
              className="arrow-icon rotate-left"
            />
          </button>
          <button
            onClick={next}
            aria-label="Image suivante"
            className="carousel-button right"
          >
            <img
              src={vector}
              alt="Suivant"
              className="arrow-icon rotate-right"
            />
          </button>
          <span className="carousel-counter">
            {current + 1}/{total}
          </span>
        </>
      )}
    </div>
  );
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
