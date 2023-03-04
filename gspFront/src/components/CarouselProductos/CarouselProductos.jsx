import { Button } from "@mui/material";

export default function CarouselProductos() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="6000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner con">
        <div className="carousel-item active">
          <img
            src="../../bungalowobra.jpg"
            className="d-block w-100"
            alt="carrusel"
            height="550px"
          />
          <div className="carousel-caption carousel-text">
            <h3 className="shadow-text display-4 fw-bold">
              Bungalows de Obras
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../../32.jpg"
            className="d-block w-100 "
            alt="carrusel"
            height="550px"
          />
          <div className="carousel-caption carousel-text">
            <h3 className="shadow-text display-4 fw-bold">
              Estructuras Metalicas
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src="../../44.jpg" className="d-block w-100" alt="carrusel" />
          <div className="carousel-caption carousel-text">
            <h3 className="shadow-text display-4 fw-bold">
              Edificios Prefabricados
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../../hangar2.jpg"
            className="d-block w-100"
            alt="carrusel"
          />
          <div className="carousel-caption carousel-text">
            <h3 className="shadow-text display-4 fw-bold">
              Naves Industriales
            </h3>
          </div>
        </div>
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
