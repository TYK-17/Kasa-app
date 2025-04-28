import PropTypes from "prop-types";
import Collapse from "../Collapse/Collapse";
import "./HousingCollapses.scss";

function HousingCollapses({ description, equipments }) {
  return (
    <div className="collapses-horizontal">
      <Collapse title="Description" content={description} />
      <Collapse
        title="Équipements"
        content={
          <ul>
            {equipments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        }
      />
    </div>
  );
}

HousingCollapses.propTypes = {
  description: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HousingCollapses;
