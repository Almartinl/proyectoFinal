import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import CarouselProyectos from "../../components/CarouselProyectos/CarouselProyectos";

export default function Proyectos() {
  const [obras, setObras] = useState([]);
  const [arrayCarousel, setArrayCarousel] = useState([]);
  const [nombreObra, setNombreObra] = useState("");
  const [openCarousel, setOpenCarousel] = useState(false);

  function handleCloseCarousel() {
    setOpenCarousel(false);
    setArrayCarousel([]);
    setNombreObra("");
  }
  function handleOpenCarousel(nombre, imagenes) {
    setOpenCarousel(true);
    setArrayCarousel(imagenes);
    setNombreObra(nombre);
    console.log(imagenes);
  }
  useEffect(() => {
    async function fetchObras() {
      const response = await fetch(`http://localhost:3000/obras`);
      const data = await response.json();
      setObras(data);
    }
    fetchObras();
  }, []);
  console.log(obras);
  console.log(arrayCarousel);
  return (
    <Grid marginY={10}>
      <Container maxWidth="xl">
        <Grid item xs={12} my={5} p={2}>
          <Typography variant="h2" fontWeight="bold" color="darkgreen">
            Nuestros Proyectos
          </Typography>
        </Grid>
        {obras.length > 0 && (
          <Grid container spacing={2}>
            {obras.map((obra) => (
              <Grid key={obra.id} item xs={12} md={4}>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea
                    onClick={() =>
                      handleOpenCarousel(obra.nombre, obra.imagenes)
                    }
                  >
                    <CardMedia
                      component="img"
                      height="400"
                      image={`http://localhost:3000/${obra.imagen}`}
                      alt="img"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {obra.nombre}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
            {arrayCarousel.length > 0 && (
              <Dialog
                maxWidth="lg"
                fullWidth
                open={openCarousel}
                onClose={handleCloseCarousel}
              >
                <DialogTitle>{nombreObra}</DialogTitle>
                <DialogContent>
                  <Grid
                    item
                    xs={12}
                    width="100%"
                    height="100%"
                    marginTop="24px"
                  >
                    <CarouselProyectos fotos={arrayCarousel} />
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseCarousel} variant="contained">
                    Cerrar
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </Grid>
        )}
      </Container>
    </Grid>
  );
}
