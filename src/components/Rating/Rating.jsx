import PropTypes from "prop-types";
import fullStar from "/assets/star.png";
import emptyStar from "/assets/star-inert.png";
import "./Rating.scss";

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <img
          key={star}
          src={star <= rating ? fullStar : emptyStar}
          alt={star <= rating ? "Étoile pleine" : "Étoile vide"}
          className="star-icon"
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
