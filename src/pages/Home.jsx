import logements from '../data/logements.json'
import Card from '../components/Card'

function Home() {
  return (
    <div>
      <h1>Liste des logements</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  )
}

export default Home
