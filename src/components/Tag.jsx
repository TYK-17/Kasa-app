import PropTypes from "prop-types";
import "./Tag.scss";

function Tag({ label }) {
  return <span className="tag">{label}</span>;
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tag;
