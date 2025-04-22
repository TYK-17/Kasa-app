import { useParams, Navigate } from 'react-router-dom';
import housings from '../data/housings.json';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import Tag from '../components/Tag';
import './Housing.scss';

function Housing() {
  const { id } = useParams();
  const housing = housings.find((item) => item.id === id);

  if (!housing) return <Navigate to="/404" />;

  const nameParts = housing.host.name.split(' ');
const firstName = nameParts.slice(0, -1).join(' ');
const lastName = nameParts.slice(-1).join(' ');


  return (
    <div className="housing-container">
      <Carousel pictures={housing.pictures} />

      <div className="housing-header">
        <div className="left">
          <h1 className="housing-title">{housing.title}</h1>
          <p className="housing-location">{housing.location}</p>
          <div className="tags">
            {housing.tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        </div>

        <div className="right">
          <div className="host">
          <span className="host-name">
  {firstName}<br />{lastName}
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
              {housing.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Housing;
