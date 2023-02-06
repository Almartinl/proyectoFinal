import "./home.css";
import { Button, Container, Grid, Typography } from "@mui/material";
import CarouselPrincipal from "../../components/CarouselPrincipal/CarouselPrincipal";

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "24px",
      }}
    >
      <CarouselPrincipal />

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src="../../16box.JPG" width="100%" alt="img" />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h2">Diseña tu bungalow</Typography>
        </Grid>
        <Grid item xs={4}>
          <img src="../../22.jpg" width="100%" alt="img" />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h2">Productos</Typography>
        </Grid>
        <Grid item xs={4}>
          <img src="../../exp1.jpg" width="100%" alt="img" />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h2">Nuestros trabajos</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
