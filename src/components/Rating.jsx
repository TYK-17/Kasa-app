import './Rating.scss';

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <img
          key={star}
          src={star <= rating ? "/assets/star.png" : "/assets/star-inert.png"}
          alt={star <= rating ? "Étoile pleine" : "Étoile vide"}
          className="star-icon"
        />
      ))}
    </div>
  );
}

export default Rating;
