import { Link } from 'react-router-dom'

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
        <img src={logement.cover} alt={logement.title} style={{ width: '100%' }} />
        <div style={{ padding: '1rem' }}>
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
