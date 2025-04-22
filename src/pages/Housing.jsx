import { useParams, Navigate } from 'react-router-dom';
import housings from '../data/housings.json';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import Tag from '../components/Tag';

function Housing() {
  const { id } = useParams();
  const housing = housings.find((l) => l.id === id);

  if (!housing) return <Navigate to="/404" />;

  return (
    <div>
      <Carousel pictures={housing.pictures} />
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '1rem' }}>
        <div>
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {housing.tags.map((tag, i) => (
              <Tag key={i} label={tag} />
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div>
            <span>{housing.host.name}</span><br />
            <img src={housing.host.picture} alt={housing.host.name} style={{ width: '50px', borderRadius: '50%' }} />
          </div>
          <Rating rating={housing.rating} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <Collapse title="Description" content={housing.description} />
        <Collapse title="Équipements" content={
          <ul>{housing.equipments.map((eq, i) => <li key={i}>{eq}</li>)}</ul>
        } />
      </div>
    </div>
  );
}

export default Housing;
