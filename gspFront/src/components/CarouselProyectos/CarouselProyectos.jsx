export default function CarouselProyectos({ fotos }) {
  console.log(fotos);
  if (Array.isArray(fotos)) {
  } else {
    fotos = JSON.parse(fotos);
  }

  const [firstImage, ...rest] = fotos;

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner sin">
        <div className="carousel-item active">
          <img
            src={`http://localhost:3000/${firstImage}`}
            className="d-block w-100"
            alt="carrusel"
            height="550px"
            style={{ objectFit: "cover" }}
          />
        </div>
        {rest.map((item, index) => (
          <div key={index} className="carousel-item">
            <img
              src={`http://localhost:3000/${item}`}
              className="d-block w-100 "
              alt="carrusel"
              height="550px"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
