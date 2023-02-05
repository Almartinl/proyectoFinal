import "./home.css";
import { Button, Container, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "24px",
        position: "relative",
      }}
    >
      <Grid>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
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
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="../../public/22.jpg"
                className="d-block w-100"
                alt="carrusel"
              />
              <div className="carousel-caption ">
                <h2 className="display-2">ofertas de otoño</h2>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
                <a href="#" className="btn btn-primary">
                  Comprar
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../public/44.jpg"
                className="d-block w-100 "
                alt="carrusel"
              />
              <div className="carousel-caption">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../../public/22.jpg"
                className="d-block w-100"
                alt="carrusel"
              />
              <div className="carousel-caption">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Grid>
    </Container>
  );
}
