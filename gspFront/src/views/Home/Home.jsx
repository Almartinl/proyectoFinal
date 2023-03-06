import "./home.css";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import CarouselPrincipal from "../../components/CarouselPrincipal/CarouselPrincipal";
import { Link } from "react-router-dom";

export default function Home() {
  document.title = "Inicio";
  return (
    <Grid marginTop={4}>
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
              variant="h2"
              color="darkgreen"
              sx={{ marginTop: "40px", fontWeight: "bold" }}
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
              color="darkgreen"
              sx={{ my: "48px", fontWeight: "bold" }}
            >
              Servicios
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider
              orientation="horizontal"
              sx={{ border: "1px solid darkgreen" }}
            />
          </Grid>
          <Grid item md={4}>
            <Grid sx={{ boxShadow: "7px 5px 8px 0px #727272" }}>
              <img src="../../boxVerde.jpg" width="100%" alt="img" />
            </Grid>
          </Grid>

          <Grid container md={4} item textAlign="center" alignItems="center">
            <Link
              to="/configurador"
              style={{ textDecoration: "none", height: "100%" }}
            >
              <Button
                sx={{
                  height: "100%",
                  color: "#d3b73d",
                  ":hover": { bgcolor: "darkgreen", color: "white" },
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  Diseña tu bungalow
                </Typography>
              </Button>
            </Link>
          </Grid>

          <Grid item md={4}>
            <Grid sx={{ boxShadow: "-7px 5px 8px 0px #727272" }}>
              <img src="../../44.jpg" width="100%" alt="img" />
            </Grid>
          </Grid>
          <Grid
            container
            item
            md={4}
            alignItems="center"
            justifyContent="center"
          >
            <Link
              to="/productos"
              style={{
                textDecoration: "none",
                height: "100%",
                width: "100%",
              }}
            >
              <Button
                fullWidth
                sx={{
                  height: "100%",
                  color: "#d3b73d",
                  ":hover": { bgcolor: "darkgreen", color: "white" },
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  Productos
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item md={4}>
            <Grid sx={{ boxShadow: "0px -4px 8px 2px #727272" }}>
              <img src="../../exp1.jpg" width="100%" alt="img" />
            </Grid>
          </Grid>

          <Grid container item md={4} textAlign="center" alignItems="center">
            <Link
              to="/proyectos"
              style={{ textDecoration: "none", height: "100%" }}
            >
              <Button
                sx={{
                  height: "100%",
                  color: "#d3b73d",
                  ":hover": { bgcolor: "darkgreen", color: "white" },
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  Proyectos realizados
                </Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} marginTop={8}>
          <Divider
            orientation="horizontal"
            sx={{ border: "1px solid darkgreen" }}
          />
        </Grid>
        <Container
          maxWidth="xl"
          sx={{
            marginTop: "24px",
            px: { xs: 0, md: 3 },
            paddingTop: 10,
            paddingBottom: 0,
          }}
        >
          <Grid
            container
            spacing={{ xs: 0, md: 2 }}
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Grid item xs={12} textAlign="start" md>
              <Typography
                variant="h3"
                color="Darkgreen"
                fontWeight="bold"
                sx={{ paddingLeft: { xs: 0, md: 4 } }}
              >
                Nuestras
                <br /> Ventajas
              </Typography>
            </Grid>

            <Grid
              item
              bgcolor="darkgreen"
              md={8}
              xs={12}
              marginRight={{ xs: 0, md: 6 }}
              boxShadow="3px 4px 5px 2px #727272"
              marginTop={{ xs: 5, md: 0 }}
            >
              <Typography color="white" p={4}>
                Si está cansado del bajo rendimiento de sus equipos, los
                retrasos y otras sanciones a pagar por el incumplimiento de los
                plazos de sus sitios: o de tratar con personas poco o nada
                organizadas, que no tienen control sobre sus actividades. que no
                son nada profesionales, y lo que es peor, te ofrecen soluciones
                prefabricadas de mierda: con problemas de estanqueidad,
                manillas, cerraduras, calidad del servicio postventa, etc.
                <br />
                <br /> Entonces está en la página web correcta, así es como: Las
                soluciones modulares y prefabricadas que le ofrecemos en GSP
                definitivamente resolverán sus problemas en sus sitios y tendrán
                un impacto real y poderoso en sus resultados y en la
                productividad de sus equipos. .
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Grid>
  );
}
