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

const arrayCanal = [
  "http://localhost:3000/images/products/canal+4.jpeg",
  "http://localhost:3000/images/products/canal+1.jpeg",
  "http://localhost:3000/images/products/canal+2.jpeg",
  "http://localhost:3000/images/products/canal+3.jpeg",
];

export default function Proyectos() {
  const [obras, setObras] = useState([]);
  const [openCanal, setOpenCanal] = useState(false);
  const [openOfcinaBesix, setOpenOficinaBesix] = useState(false);

  function handleCloseCanal() {
    setOpenCanal(false);
  }
  function handleOpenCanal() {
    setOpenCanal(true);
  }

  function handleCloseOficinaBesix() {
    setOpenOficinaBesix(false);
  }
  function handleOpenOficinaBesix() {
    setOpenOficinaBesix(true);
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
                  <CardActionArea onClick={handleOpenCanal}>
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

            {/* <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea onClick={handleOpenOficinaBesix}>
                  <CardMedia
                    component="img"
                    height="400"
                    image="../../besix-abobo.jpeg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Oficinas Besix Abobo
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image="../../edificio.jpeg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Escuela Francesa Sevigne
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image="../../22.jpg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Salon de Actos Escuela Abobo
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image="../../PROJETR+1BUREAUXVALLON2PLATEAUX.jpeg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Oficinas Vallon
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image="../../16box.jpg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Oficinas Cafe Cacao
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Dialog
              maxWidth="lg"
              fullWidth
              open={openCanal}
              onClose={handleCloseCanal}
            >
              <DialogTitle>Cafeteria Canal+</DialogTitle>
              <DialogContent>
                <Grid item xs={12} width="100%" height="70vh" marginTop="24px">
                  <CarouselProyectos fotos={arrayCanal} />
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseCanal} variant="contained">
                  Cerrar
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog
              maxWidth="lg"
              fullWidth
              open={openOfcinaBesix}
              onClose={handleCloseOficinaBesix}
            >
              <DialogTitle>Cafeteria Canal+</DialogTitle>
              <DialogContent>
                <Grid item xs={12} width="100%" height="70vh" marginTop="24px">
                  <CarouselProyectos fotos={arrayCanal} />
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseOficinaBesix} variant="contained">
                  Cerrar
                </Button>
              </DialogActions>
            </Dialog> */}
          </Grid>
        )}
      </Container>
    </Grid>
  );
}
