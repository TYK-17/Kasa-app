function Banner({ image, text }) {
  return (
    <div
      style={{
        position: "relative",
        height: "223px",
        borderRadius: "25px",
        overflow: "hidden",
        margin: "2rem 0",
        display: "flex", // ✅ active flexbox
        alignItems: "center", // ✅ centre verticalement
        justifyContent: "center", // ✅ centre horizontalement
      }}
    >
      <img
        src={image}
        alt="Bannière"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(60%)",
          zIndex: 1,
        }}
      />
      <h1
        style={{
          color: "#fff",
          fontSize: "2rem",
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
          zIndex: 2,
        }}
      >
        {text}
      </h1>
    </div>
  );
}

export default Banner;
