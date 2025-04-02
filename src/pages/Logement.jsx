import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import Tag from '../components/Tag';

function Logement() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  if (!logement) return <Navigate to="/404" />;

  return (
    <div>
      <Carousel pictures={logement.pictures} />
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '1rem' }}>
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {logement.tags.map((tag, i) => (
              <Tag key={i} label={tag} />
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div>
            <span>{logement.host.name}</span><br />
            <img src={logement.host.picture} alt={logement.host.name} style={{ width: '50px', borderRadius: '50%' }} />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={
          <ul>{logement.equipments.map((eq, i) => <li key={i}>{eq}</li>)}</ul>
        } />
      </div>
    </div>
  );
}

export default Logement;
