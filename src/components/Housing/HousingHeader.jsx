import PropTypes from "prop-types";
import Tag from "../Tag/Tag";
import Rating from "../Rating/Rating";
import "./HousingHeader.scss";

function HousingHeader({
  title,
  location,
  tags,
  hostName,
  hostPicture,
  rating,
}) {
  const [firstName, ...lastNameParts] = hostName.split(" ");
  const lastName = lastNameParts.join(" ");

  return (
    <div className="housing-header">
      <div className="left">
        <h1 className="housing-title">{title}</h1>
        <p className="housing-location">{location}</p>
        <div className="tags">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>

      <div className="right">
        <div className="host">
          <span className="host-name">
            {firstName}
            <br />
            {lastName}
          </span>
          <img src={hostPicture} alt={hostName} className="host-picture" />
        </div>
        <Rating rating={rating} />
      </div>
    </div>
  );
}

HousingHeader.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  hostName: PropTypes.string.isRequired,
  hostPicture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default HousingHeader;
