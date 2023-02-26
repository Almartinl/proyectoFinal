import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Button,
} from "@mui/material";
import { CardActionArea } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import CarouselProductos from "../../components/CarouselProductos/CarouselProductos";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Productos() {
  const [expandedCard, setExpandedCard] = useState(false);
  const [vistaInicio, setVistaInicio] = useState(true);
  const [vistaBungalowsObras, setVistaBungalowsObras] = useState(false);
  const [vistaBungalowAlmacen, setVistaBungalowAlmacen] = useState(false);

  const handleExpandClick = () => {
    setExpandedCard(!expandedCard);
  };

  function bungalowObraClick(e) {
    e.preventDefault();
    setVistaBungalowsObras(true);
    setVistaInicio(false);
  }

  return (
    <Container maxWidth="xl" sx={{ my: 15 }}>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          sm={3}
          gap={10}
          bgcolor="#d3b72a"
          p={5}
          alignContent="flex-start"
        >
          <Typography variant="h4" fontWeight="800" color="darkgreen">
            Categorias de Productos
          </Typography>
          <Grid container gap={2}>
            <Button
              variant={vistaBungalowsObras ? "contained" : "outlined"}
              fullWidth
              color="success"
              sx={
                vistaBungalowsObras
                  ? {
                      color: "white",
                      borderColor: "darkgreen",
                      fontWeight: "bold",
                    }
                  : {
                      color: "darkgreen",
                      borderColor: "darkgreen",
                      fontWeight: "bold",
                    }
              }
              onClick={bungalowObraClick}
            >
              Bungalows de Obras
            </Button>
            <Button
              variant="outlined"
              fullWidth
              color="success"
              sx={{
                color: "darkgreen",
                borderColor: "darkgreen",
                fontWeight: "bold",
              }}
            >
              Estructuras Metalicas
            </Button>
            <Button
              variant="outlined"
              fullWidth
              color="success"
              sx={{
                color: "darkgreen",
                borderColor: "darkgreen",
                fontWeight: "bold",
              }}
            >
              Edificios Prefabricados
            </Button>
            <Button
              variant="outlined"
              fullWidth
              color="success"
              sx={{
                color: "darkgreen",
                borderColor: "darkgreen",
                fontWeight: "bold",
              }}
            >
              Naves Industriales
            </Button>
            {/* <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>Bungalows</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography>Users</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography>Advanced settings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography>Personal data</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion> */}
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={9}
          gap={5}
          bgcolor="#d7d7d7"
          flexDirection="column"
        >
          {vistaInicio && <CarouselProductos />}

          {vistaBungalowsObras && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item sm={12}>
                <Card>
                  <CardHeader
                    title="Bungalows de obras"
                    titleTypographyProps={{
                      color: "darkgreen",
                      align: "right",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../bungalowobra.jpg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="darkgreen"
                      fontWeight="bold"
                    >
                      Tenemos varios tipos de bungalows de obras Despliega aqui
                      abajo
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <ExpandMore
                      expand={expandedCard}
                      onClick={handleExpandClick}
                      aria-expanded={expandedCard}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon
                        sx={{ color: "darkgreen" }}
                        fontSize="large"
                      />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expandedCard} timeout="auto" unmountOnExit>
                    <CardContent
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Button variant="outlined" color="success">
                        Almacen
                      </Button>
                      <Button variant="outlined" color="success">
                        Caseta de Vigilancia
                      </Button>
                      <Button variant="outlined" color="success">
                        Oficina Multiusos
                      </Button>
                      <Button variant="outlined" color="success">
                        Sanitarios
                      </Button>
                      <Button variant="outlined" color="success">
                        Vestuarios
                      </Button>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </Grid>
          )}

          {/* <Grid item sm={6}>
              <Card>
                <CardHeader title="Estructuras Metalicas" />
                <CardMedia
                  component="img"
                  height="194"
                  image="../../32.jpg"
                  alt="img"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Vea nuestros tipos de estructuras metalicas
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "center", p: 3.5 }}
                />
              </Card>
            </Grid>
            <Grid item sm={6}>
              <Card>
                <CardHeader title="Edificios Prefabricados" />
                <CardMedia
                  component="img"
                  height="194"
                  image="../../44.jpg"
                  alt="img"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Vea nuestros tipos de edificios prefabricados
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "center", p: 3.5 }}
                ></CardActions>
              </Card>
            </Grid>
            <Grid item sm={6}>
              <Card>
                <CardHeader title="Naves Industriales" />
                <CardMedia
                  component="img"
                  height="194"
                  image="../../hangar2.jpg"
                  alt="img"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Vea nuestros tipos de naves industriales
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "center", p: 3.5 }}
                ></CardActions>
              </Card>
            </Grid> */}
        </Grid>
      </Grid>
    </Container>
  );
}
