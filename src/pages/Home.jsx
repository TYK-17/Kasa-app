import logements from "../data/logements.json";
import Card from "../components/Card";
import Banner from "../components/Banner";
import "./Home.scss";

function Home() {
  return (
    <div className="home-container">
      <Banner
        image="/assets/banner.png"
        text="Chez vous, partout et ailleurs"
      />

      <div className="card-grid">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;
