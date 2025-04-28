import { useParams, Navigate } from "react-router-dom";
import housings from "../data/housings.json";
import Carousel from "../components/Carousel/Carousel";
import HousingHeader from "../components/Housing/HousingHeader";
import HousingCollapses from "../components/Housing/HousingCollapses";
import "./Housing.scss";

function Housing() {
  const { id } = useParams();
  const housing = housings.find((item) => item.id.toString() === id);

  if (!housing) return <Navigate to="/404" />;

  return (
    <>
      <div className="carousel-wrapper">
        <Carousel pictures={housing.pictures} />
      </div>

      <div className="housing-container">
        <HousingHeader
          title={housing.title}
          location={housing.location}
          tags={housing.tags}
          hostName={housing.host.name}
          hostPicture={housing.host.picture}
          rating={housing.rating}
        />

        <HousingCollapses
          description={housing.description}
          equipments={housing.equipments}
        />
      </div>
    </>
  );
}

export default Housing;
