import "./home.css";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import CarouselPrincipal from "../../components/CarouselPrincipal/CarouselPrincipal";

export default function Home() {
  return (
    <>
      <CarouselPrincipal />
      <Container
        maxWidth="xl"
        sx={{
          marginTop: "24px",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            md={12}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              color="green"
              sx={{ my: "48px", fontWeight: "bold" }}
            >
              Servicios
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              color="green"
              sx={{ my: "48px", fontWeight: "bold" }}
            >
              Servicios
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img src="../../boxVerde.jpg" width="100%" alt="img" />
          </Grid>
          <Grid container item md={4} textAlign="center" alignItems="center">
            <Typography
              variant="h2"
              color="#d3b73d"
              sx={{ fontWeight: "bold" }}
            >
              Diseña tu bungalow
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img src="../../44.jpg" width="100%" alt="img" />
          </Grid>
          <Grid
            container
            item
            md={4}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h2"
              color="#d3b73d"
              sx={{ fontWeight: "bold" }}
            >
              Productos
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img src="../../exp1.jpg" width="100%" alt="img" />
          </Grid>

          <Grid container item md={4} textAlign="center" alignItems="center">
            <Typography
              variant="h2"
              color="#d3b73d"
              sx={{ fontWeight: "bold" }}
            >
              Nuestros trabajos
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
