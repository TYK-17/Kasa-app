import logements from '../data/logements.json';

function Home() {
  return (
    <div>
      <h1>Liste des logements</h1>
      <ul>
        {logements.map((logement) => (
          <li key={logement.id}>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <img src={logement.cover} alt={logement.title} width="300" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
