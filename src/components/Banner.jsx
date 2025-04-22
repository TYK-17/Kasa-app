import './Banner.scss';

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" />
      <h1>{text}</h1>
    </div>
  );
}

export default Banner;
