import housings from "../data/housings.json";
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
        {housings.map((housing) => (
          <Card key={housing.id} housing={housing} />
        ))}
      </div>
    </div>
  );
}

export default Home;
