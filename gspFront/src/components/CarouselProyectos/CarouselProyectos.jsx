import { Button } from "@mui/material";

export default function CarouselProyectos({ fotos }) {
  const [firstImage, ...rest] = fotos;
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="6000"
    >
      <div className="carousel-inner sin">
        <div className="carousel-item active">
          <img
            src={firstImage}
            className="d-block w-100"
            alt="carrusel"
            height="550px"
          />
        </div>
        {rest.map((item) => (
          <div className="carousel-item">
            <img
              src={item}
              className="d-block w-100 "
              alt="carrusel"
              height="550px"
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
