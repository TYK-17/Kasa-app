import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import mountainImage from "/assets/mountain.png";
import aboutData from "../data/aboutData.json";
import "./About.scss";

function About() {
  return (
    <div className="about-container">
      <Banner image={mountainImage} alt="Montagnes enneigées" />
      <div className="about-collapses">
        {aboutData && aboutData.length > 0 ? (
          aboutData.map((item) => (
            <Collapse key={item.id} title={item.title} content={item.content} />
          ))
        ) : (
          <p>Aucune information disponible pour le moment.</p>
        )}
      </div>
    </div>
  );
}

export default About;
