import PropTypes from "prop-types";
import "./Banner.scss";

function Banner({ image }) {
  if (!image) {
    console.error("Erreur : Aucune image fournie au composant Banner.");
    return null; // Sécurité : pas d'affichage si pas d'image
  }

  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner-image" />
      <h1 className="banner-text">
        Chez vous, <br className="mobile-line-break" /> partout et ailleurs
      </h1>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Banner;
