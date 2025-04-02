import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) return <Navigate to="/404" />

  return (
    <div>
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <img src={logement.cover} alt={logement.title} width="500" />
      <p>{logement.description}</p>
      <ul>
        {logement.equipments.map((eq, index) => (
          <li key={index}>{eq}</li>
        ))}
      </ul>
    </div>
  )
}

export default Logement;
