import './Banner.scss';

function Banner({ image, text = "" }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" />
      {text && (
        <h1>
          Chez vous, <br className="mobile-line-break" />
          partout et ailleurs
        </h1>
      )}
    </div>
  );
}

export default Banner;
