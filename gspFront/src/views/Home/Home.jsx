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
      <Grid>
        <CarouselPrincipal />
      </Grid>
    </Container>
  );
}
