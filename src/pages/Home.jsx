import housings from "../data/housings.json";
import Card from "../components/Card/Card";
import Banner from "../components/Banner/Banner";
import bannerImage from "/assets/banner.png";
import "./Home.scss";

function Home() {
  return (
    <div className="home-container">
      <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      <div className="card-grid">
        {housings && housings.length > 0 ? (
          housings.map((housing) => <Card key={housing.id} housing={housing} />)
        ) : (
          <p>Aucun logement disponible pour le moment.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
