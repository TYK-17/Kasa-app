import { useParams, Navigate } from "react-router-dom";
import housings from "../data/housings.json";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import "./Housing.scss";

function Housing() {
  const { id } = useParams();
  const housing = housings.find((item) => item.id.toString() === id);

  if (!housing) return <Navigate to="/404" />;

  const [firstName, ...lastNameParts] = housing.host.name.split(" ");
  const lastName = lastNameParts.join(" ");

  return (
    <>
      <div className="carousel-wrapper">
        <Carousel pictures={housing.pictures} />
      </div>

      <div className="housing-container">
        <div className="housing-header">
          <div className="left">
            <h1 className="housing-title">{housing.title}</h1>
            <p className="housing-location">{housing.location}</p>
            <div className="tags">
              {housing.tags.map((tag) => (
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
              <img
                src={housing.host.picture}
                alt={housing.host.name}
                className="host-picture"
              />
            </div>
            <Rating rating={housing.rating} />
          </div>
        </div>

        <div className="collapses-horizontal">
          <Collapse title="Description" content={housing.description} />
          <Collapse
            title="Équipements"
            content={
              <ul>
                {housing.equipments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </>
  );
}

export default Housing;
