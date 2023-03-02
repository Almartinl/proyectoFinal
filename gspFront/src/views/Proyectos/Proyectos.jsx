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
import { useState } from "react";
import CarouselProductos from "../../components/CarouselProductos/CarouselProductos";

export default function Proyectos() {
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

  return (
    <Grid marginY={10}>
      <Container maxWidth="xl">
        <Grid item xs={12} textAlign="center" my={5} p={2}>
          <Typography variant="h2" fontWeight="bold" color="darkgreen">
            Proyectos
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea onClick={handleOpenCanal}>
                <CardMedia
                  component="img"
                  height="400"
                  image="../../44.jpg"
                  alt="img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Cafeteria Canal+
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
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
                <CarouselProductos />
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
                <CarouselProductos />
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseOficinaBesix} variant="contained">
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Container>
    </Grid>
  );
}
