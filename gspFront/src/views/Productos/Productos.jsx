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
  TableContainer,
  Table,
  TableBody,
  Paper,
  TableRow,
  TableCell,
  TableFooter,
} from "@mui/material";
import { CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";
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
  const [vistaBungalowCaseta, setVistaBungalowCaseta] = useState(false);
  const [vistaBungalowDiafano, setVistaBungalowDiafano] = useState(false);
  const [vistaBungalowWc, setVistaBungalowWc] = useState(false);
  const [vistaBungalowVestuario, setVistaBungalowVestuario] = useState(false);
  const [vistaEstructuras, setVistaEstructuras] = useState(false);
  const [vistaEdificios, setVistaEdificios] = useState(false);
  const [vistaNaves, setVistaNaves] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleExpandClick = () => {
    setExpandedCard(!expandedCard);
  };

  function bungalowObraClick(e) {
    e.preventDefault();
    setVistaBungalowsObras(true);
    setVistaInicio(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setVistaEstructuras(false);
    setVistaEdificios(false);
    setVistaNaves(false);
  }

  function bungalowAlmacenClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(true);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
  }

  function bungalowCasetaClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(true);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
  }

  function bungalowOficinaClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(true);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
  }

  function bungalowWcClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(true);
  }

  function bungalowVestuarioClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(true);
    setVistaBungalowWc(false);
  }

  function volverInicioClick(e) {
    e.preventDefault();
    setVistaInicio(true);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
  }

  function estructuraClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setVistaEstructuras(true);
    setVistaEdificios(false);
    setVistaNaves(false);
  }

  function edificioClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setVistaEstructuras(false);
    setVistaEdificios(true);
    setVistaNaves(false);
  }

  function naveClick(e) {
    e.preventDefault();
    setVistaInicio(false);
    setVistaBungalowsObras(false);
    setVistaBungalowAlmacen(false);
    setVistaBungalowCaseta(false);
    setVistaBungalowDiafano(false);
    setVistaBungalowVestuario(false);
    setVistaBungalowWc(false);
    setVistaEstructuras(false);
    setVistaEdificios(false);
    setVistaNaves(true);
  }

  useEffect(() => {
    setExpanded(false);
    setExpandedCard(false);
  }, [
    vistaInicio,
    vistaBungalowsObras,
    vistaBungalowAlmacen,
    vistaBungalowCaseta,
    vistaBungalowDiafano,
    vistaBungalowVestuario,
    vistaBungalowWc,
    vistaEdificios,
    vistaEstructuras,
    vistaNaves,
  ]);

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Grid container>
        {vistaBungalowAlmacen ||
        vistaBungalowCaseta ||
        vistaBungalowDiafano ||
        vistaBungalowWc ||
        vistaBungalowVestuario ? (
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
              Tipos de Bungalows de Obras
            </Typography>
            <Grid container gap={2}>
              <Button
                variant={vistaBungalowAlmacen ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaBungalowAlmacen
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "darkgreen",
                      }
                    : {
                        color: "darkgreen",
                        borderColor: "darkgreen",
                        fontWeight: "bold",
                      }
                }
                onClick={bungalowAlmacenClick}
              >
                Almacen
              </Button>
              <Button
                variant={vistaBungalowCaseta ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaBungalowCaseta
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "darkgreen",
                      }
                    : {
                        color: "darkgreen",
                        borderColor: "darkgreen",
                        fontWeight: "bold",
                      }
                }
                onClick={bungalowCasetaClick}
              >
                Caseta de vigilancia
              </Button>
              <Button
                variant={vistaBungalowDiafano ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaBungalowDiafano
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "darkgreen",
                      }
                    : {
                        color: "darkgreen",
                        borderColor: "darkgreen",
                        fontWeight: "bold",
                      }
                }
                onClick={bungalowOficinaClick}
              >
                Oficina Multiusos
              </Button>
              <Button
                variant={vistaBungalowWc ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaBungalowWc
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "darkgreen",
                      }
                    : {
                        color: "darkgreen",
                        borderColor: "darkgreen",
                        fontWeight: "bold",
                      }
                }
                onClick={bungalowWcClick}
              >
                Sanitarios
              </Button>
              <Button
                variant={vistaBungalowVestuario ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaBungalowVestuario
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "darkgreen",
                      }
                    : {
                        color: "darkgreen",
                        borderColor: "darkgreen",
                        fontWeight: "bold",
                      }
                }
                onClick={bungalowVestuarioClick}
              >
                Vestuarios
              </Button>
              <Button
                variant="outlined"
                fullWidth
                color="error"
                sx={{
                  fontWeight: "bold",
                }}
                onClick={volverInicioClick}
              >
                Volver a las Categorias
              </Button>
            </Grid>
          </Grid>
        ) : (
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
                        fontWeight: "bold",
                        backgroundColor: "darkgreen",
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
                variant={vistaEstructuras ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaEstructuras
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "darkgreen",
                      }
                    : {
                        color: "darkgreen",
                        borderColor: "darkgreen",
                        fontWeight: "bold",
                      }
                }
                onClick={estructuraClick}
              >
                Estructuras Metalicas
              </Button>
              <Button
                variant={vistaEdificios ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaEdificios
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "darkgreen",
                      }
                    : {
                        color: "darkgreen",
                        borderColor: "darkgreen",
                        fontWeight: "bold",
                      }
                }
                onClick={edificioClick}
              >
                Edificios Prefabricados
              </Button>
              <Button
                variant={vistaNaves ? "contained" : "outlined"}
                fullWidth
                color="success"
                sx={
                  vistaNaves
                    ? {
                        color: "white",
                        fontWeight: "bold",
                        backgroundColor: "darkgreen",
                      }
                    : {
                        color: "darkgreen",
                        borderColor: "darkgreen",
                        fontWeight: "bold",
                      }
                }
                onClick={naveClick}
              >
                Naves Industriales
              </Button>
            </Grid>
          </Grid>
        )}

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
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={bungalowAlmacenClick}
                      >
                        Almacen
                      </Button>
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={bungalowCasetaClick}
                      >
                        Caseta de Vigilancia
                      </Button>
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={bungalowOficinaClick}
                      >
                        Oficina Multiusos
                      </Button>
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={bungalowWcClick}
                      >
                        Sanitarios
                      </Button>
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={bungalowVestuarioClick}
                      >
                        Vestuarios
                      </Button>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaBungalowAlmacen && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item sm={12}>
                <Card>
                  <CardHeader
                    title="Almacen"
                    titleTypographyProps={{
                      color: "darkgreen",
                      align: "right",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../bungalowsalmacen.jpeg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="darkgreen"
                      fontWeight="bold"
                    >
                      Este bungalow es perfecto para poder almacenar todo tipo
                      de utensilios y materiales
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
                      <Typography
                        variant="h4"
                        bgcolor="darkgreen"
                        color="white"
                        p={1}
                      >
                        Descripcion
                      </Typography>
                      <Grid container>
                        <Grid item xs={12} md={4}>
                          <Typography variant="body1" p={1}>
                            Nuestros bungalows de sitio para uso como Almacenes
                            están perfectamente adaptados para servir como
                            Almacen en su campamento base, proyectos militares o
                            civiles con el fin de poner a sus equipos técnicos
                            en condiciones óptimas de comodidad y trabajo, para
                            una mejor tasa de productividad y desempeño diario.
                          </Typography>
                          <Typography variant="body1" p={1}>
                            Están diseñadas con unas dimensiones estándar de
                            6,00 X 2,40 m con una altura exterior de 2,60 m, o
                            12 X 2,40 m entre las muchas ventajas que tienen
                            tienes: el hecho de que se pueden personalizar según
                            los colores y las necesidades del cliente en cuanto
                            a de dimensiones y tabiques interiores.
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Accordion
                            expanded={expanded === "panel1"}
                            onChange={handleChange("panel1")}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                            >
                              <Typography
                                variant="h5"
                                sx={{ textDecoration: "underline" }}
                              >
                                Caracteristicas Tecnicas
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <TableContainer component={Paper}>
                                <Table
                                  sx={{ minWidth: 500 }}
                                  aria-label="custom pagination table"
                                >
                                  <TableBody>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        longitud exterior
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        6036 mm - disponible en 4835 mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        ancho exterior
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2435mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Altura del techo
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2500mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        altura total
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2935mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        revestimiento
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Paneles sándwich de espuma de
                                        poliuretano de 40 mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Piso
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Suelo de aglomerado hidrófugo de 22 mm
                                        (CTBH)
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Calefacción
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        1 convector de 2000 W
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        electricidad
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2x2 fluorescentes 36W - 2 uds 16A
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Carpintería
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Ventana de PVC - doble acristalamiento
                                        4-15-4 con persiana enrollable
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                  <TableFooter></TableFooter>
                                </Table>
                              </TableContainer>
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
                              <Typography
                                variant="h5"
                                sx={{ textDecoration: "underline" }}
                              >
                                Dimensiones
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <img src="../../PLANTA.jpg" width="100%"></img>
                            </AccordionDetails>
                          </Accordion>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaBungalowCaseta && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item sm={12}>
                <Card>
                  <CardHeader
                    title="Caseta de Vigilancia"
                    titleTypographyProps={{
                      color: "darkgreen",
                      align: "right",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../caseta.jpg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="darkgreen"
                      fontWeight="bold"
                    >
                      La caseta de vigilancia perfecta
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
                      <Typography
                        variant="h4"
                        bgcolor="darkgreen"
                        color="white"
                        p={1}
                      >
                        Descripcion
                      </Typography>
                      <Grid container>
                        <Grid item xs={12} md={4}>
                          <Typography variant="body1" p={1}>
                            Nuestros bungalows de sitio para uso como Almacenes
                            están perfectamente adaptados para servir como
                            Almacen en su campamento base, proyectos militares o
                            civiles con el fin de poner a sus equipos técnicos
                            en condiciones óptimas de comodidad y trabajo, para
                            una mejor tasa de productividad y desempeño diario.
                          </Typography>
                          <Typography variant="body1" p={1}>
                            Están diseñadas con unas dimensiones estándar de
                            6,00 X 2,40 m con una altura exterior de 2,60 m, o
                            12 X 2,40 m entre las muchas ventajas que tienen
                            tienes: el hecho de que se pueden personalizar según
                            los colores y las necesidades del cliente en cuanto
                            a de dimensiones y tabiques interiores.
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Accordion
                            expanded={expanded === "panel1"}
                            onChange={handleChange("panel1")}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                            >
                              <Typography
                                variant="h5"
                                sx={{ textDecoration: "underline" }}
                              >
                                Caracteristicas Tecnicas
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <TableContainer component={Paper}>
                                <Table
                                  sx={{ minWidth: 500 }}
                                  aria-label="custom pagination table"
                                >
                                  <TableBody>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        longitud exterior
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        6036 mm - disponible en 4835 mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        ancho exterior
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2435mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Altura del techo
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2500mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        altura total
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2935mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        revestimiento
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Paneles sándwich de espuma de
                                        poliuretano de 40 mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Piso
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Suelo de aglomerado hidrófugo de 22 mm
                                        (CTBH)
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Calefacción
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        1 convector de 2000 W
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        electricidad
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2x2 fluorescentes 36W - 2 uds 16A
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Carpintería
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Ventana de PVC - doble acristalamiento
                                        4-15-4 con persiana enrollable
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                  <TableFooter></TableFooter>
                                </Table>
                              </TableContainer>
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
                              <Typography
                                variant="h5"
                                sx={{ textDecoration: "underline" }}
                              >
                                Dimensiones
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <img src="../../PLANTA.jpg" width="100%"></img>
                            </AccordionDetails>
                          </Accordion>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaBungalowDiafano && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item sm={12}>
                <Card>
                  <CardHeader
                    title="Oficina Multiusos"
                    titleTypographyProps={{
                      color: "darkgreen",
                      align: "right",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../oficina.jpeg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="darkgreen"
                      fontWeight="bold"
                    >
                      La oficina que simpre has querido
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
                      <Typography
                        variant="h4"
                        bgcolor="darkgreen"
                        color="white"
                        p={1}
                      >
                        Descripcion
                      </Typography>
                      <Grid container>
                        <Grid item xs={12} md={4}>
                          <Typography variant="body1" p={1}>
                            Nuestros bungalows de sitio para uso como Almacenes
                            están perfectamente adaptados para servir como
                            Almacen en su campamento base, proyectos militares o
                            civiles con el fin de poner a sus equipos técnicos
                            en condiciones óptimas de comodidad y trabajo, para
                            una mejor tasa de productividad y desempeño diario.
                          </Typography>
                          <Typography variant="body1" p={1}>
                            Están diseñadas con unas dimensiones estándar de
                            6,00 X 2,40 m con una altura exterior de 2,60 m, o
                            12 X 2,40 m entre las muchas ventajas que tienen
                            tienes: el hecho de que se pueden personalizar según
                            los colores y las necesidades del cliente en cuanto
                            a de dimensiones y tabiques interiores.
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Accordion
                            expanded={expanded === "panel1"}
                            onChange={handleChange("panel1")}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                            >
                              <Typography
                                variant="h5"
                                sx={{ textDecoration: "underline" }}
                              >
                                Caracteristicas Tecnicas
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <TableContainer component={Paper}>
                                <Table
                                  sx={{ minWidth: 500 }}
                                  aria-label="custom pagination table"
                                >
                                  <TableBody>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        longitud exterior
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        6036 mm - disponible en 4835 mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        ancho exterior
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2435mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Altura del techo
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2500mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        altura total
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2935mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        revestimiento
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Paneles sándwich de espuma de
                                        poliuretano de 40 mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Piso
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Suelo de aglomerado hidrófugo de 22 mm
                                        (CTBH)
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Calefacción
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        1 convector de 2000 W
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        electricidad
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2x2 fluorescentes 36W - 2 uds 16A
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Carpintería
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Ventana de PVC - doble acristalamiento
                                        4-15-4 con persiana enrollable
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                  <TableFooter></TableFooter>
                                </Table>
                              </TableContainer>
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
                              <Typography
                                variant="h5"
                                sx={{ textDecoration: "underline" }}
                              >
                                Dimensiones
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <img src="../../PLANTA.jpg" width="100%"></img>
                            </AccordionDetails>
                          </Accordion>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaBungalowWc && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item sm={12}>
                <Card>
                  <CardHeader
                    title="Sanitarios"
                    titleTypographyProps={{
                      color: "darkgreen",
                      align: "right",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../wc.jpeg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="darkgreen"
                      fontWeight="bold"
                    >
                      El sanitario ideal para tus empleados
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
                      <Typography
                        variant="h4"
                        bgcolor="darkgreen"
                        color="white"
                        p={1}
                      >
                        Descripcion
                      </Typography>
                      <Grid container>
                        <Grid item xs={12} md={4}>
                          <Typography variant="body1" p={1}>
                            Nuestros bungalows de sitio para uso como Almacenes
                            están perfectamente adaptados para servir como
                            Almacen en su campamento base, proyectos militares o
                            civiles con el fin de poner a sus equipos técnicos
                            en condiciones óptimas de comodidad y trabajo, para
                            una mejor tasa de productividad y desempeño diario.
                          </Typography>
                          <Typography variant="body1" p={1}>
                            Están diseñadas con unas dimensiones estándar de
                            6,00 X 2,40 m con una altura exterior de 2,60 m, o
                            12 X 2,40 m entre las muchas ventajas que tienen
                            tienes: el hecho de que se pueden personalizar según
                            los colores y las necesidades del cliente en cuanto
                            a de dimensiones y tabiques interiores.
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Accordion
                            expanded={expanded === "panel1"}
                            onChange={handleChange("panel1")}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                            >
                              <Typography
                                variant="h5"
                                sx={{ textDecoration: "underline" }}
                              >
                                Caracteristicas Tecnicas
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <TableContainer component={Paper}>
                                <Table
                                  sx={{ minWidth: 500 }}
                                  aria-label="custom pagination table"
                                >
                                  <TableBody>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        longitud exterior
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        6036 mm - disponible en 4835 mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        ancho exterior
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2435mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Altura del techo
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2500mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        altura total
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2935mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        revestimiento
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Paneles sándwich de espuma de
                                        poliuretano de 40 mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Piso
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Suelo de aglomerado hidrófugo de 22 mm
                                        (CTBH)
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Calefacción
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        1 convector de 2000 W
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        electricidad
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2x2 fluorescentes 36W - 2 uds 16A
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Carpintería
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Ventana de PVC - doble acristalamiento
                                        4-15-4 con persiana enrollable
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                  <TableFooter></TableFooter>
                                </Table>
                              </TableContainer>
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
                              <Typography
                                variant="h5"
                                sx={{ textDecoration: "underline" }}
                              >
                                Dimensiones
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <img src="../../PLANTA.jpg" width="100%"></img>
                            </AccordionDetails>
                          </Accordion>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaBungalowVestuario && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item sm={12}>
                <Card>
                  <CardHeader
                    title="Vestuarios"
                    titleTypographyProps={{
                      color: "darkgreen",
                      align: "right",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../vestuario.jpeg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="darkgreen"
                      fontWeight="bold"
                    >
                      El Vestuario idoneo para poder Cambiarse en tus proyectos
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
                      <Typography
                        variant="h4"
                        bgcolor="darkgreen"
                        color="white"
                        p={1}
                      >
                        Descripcion
                      </Typography>
                      <Grid container>
                        <Grid item xs={12} md={4}>
                          <Typography variant="body1" p={1}>
                            Nuestros bungalows de sitio para uso como Almacenes
                            están perfectamente adaptados para servir como
                            Almacen en su campamento base, proyectos militares o
                            civiles con el fin de poner a sus equipos técnicos
                            en condiciones óptimas de comodidad y trabajo, para
                            una mejor tasa de productividad y desempeño diario.
                          </Typography>
                          <Typography variant="body1" p={1}>
                            Están diseñadas con unas dimensiones estándar de
                            6,00 X 2,40 m con una altura exterior de 2,60 m, o
                            12 X 2,40 m entre las muchas ventajas que tienen
                            tienes: el hecho de que se pueden personalizar según
                            los colores y las necesidades del cliente en cuanto
                            a de dimensiones y tabiques interiores.
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Accordion
                            expanded={expanded === "panel1"}
                            onChange={handleChange("panel1")}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                            >
                              <Typography
                                variant="h5"
                                sx={{ textDecoration: "underline" }}
                              >
                                Caracteristicas Tecnicas
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <TableContainer component={Paper}>
                                <Table
                                  sx={{ minWidth: 500 }}
                                  aria-label="custom pagination table"
                                >
                                  <TableBody>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        longitud exterior
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        6036 mm - disponible en 4835 mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        ancho exterior
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2435mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Altura del techo
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2500mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        altura total
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2935mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        revestimiento
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Paneles sándwich de espuma de
                                        poliuretano de 40 mm
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Piso
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Suelo de aglomerado hidrófugo de 22 mm
                                        (CTBH)
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Calefacción
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        1 convector de 2000 W
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        electricidad
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        2x2 fluorescentes 36W - 2 uds 16A
                                      </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell
                                        style={{ width: "25%" }}
                                        align="left"
                                      >
                                        Carpintería
                                      </TableCell>
                                      <TableCell
                                        style={{ maxWidth: "75%" }}
                                        align="left"
                                      >
                                        Ventana de PVC - doble acristalamiento
                                        4-15-4 con persiana enrollable
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                  <TableFooter></TableFooter>
                                </Table>
                              </TableContainer>
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
                              <Typography
                                variant="h5"
                                sx={{ textDecoration: "underline" }}
                              >
                                Dimensiones
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <img src="../../PLANTA.jpg" width="100%"></img>
                            </AccordionDetails>
                          </Accordion>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaEstructuras && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item sm={12}>
                <Card>
                  <CardHeader
                    title="Estructuras Metalicas"
                    titleTypographyProps={{
                      color: "darkgreen",
                      align: "right",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../estructuras.jpg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="darkgreen"
                      fontWeight="bold"
                    >
                      La estructura es lo mas importante de toda obra
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
                      <Typography
                        variant="h4"
                        bgcolor="darkgreen"
                        color="white"
                        p={1}
                      >
                        Descripcion
                      </Typography>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography variant="body1" p={1}>
                            Nuestras estructuras metálicas, hangares, naves
                            industriales son de muy alta calidad, y son
                            personalizables según sus necesidades, el tamaño y
                            el alcance del sitio a precios imbatibles.
                          </Typography>
                          <Typography variant="body1" p={1}>
                            Es decir, podemos realizar sus proyectos llave en
                            mano a medida para cubrir perfectamente todas sus
                            necesidades y objetivos estratégicos.
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaEdificios && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item sm={12}>
                <Card>
                  <CardHeader
                    title="Edificios Prefabricados"
                    titleTypographyProps={{
                      color: "darkgreen",
                      align: "right",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../edificio.jpeg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="darkgreen"
                      fontWeight="bold"
                    >
                      Edificios especiales prefabricados
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
                      <Typography
                        variant="h4"
                        bgcolor="darkgreen"
                        color="white"
                        p={1}
                      >
                        Descripcion
                      </Typography>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography variant="body1" p={1}>
                            Nuestras naves prefabricadas están compuestas por
                            estructuras ligeras de acero galvanizado, las
                            paredes y la cubierta son de paneles sándwich de
                            varios espesores según el proyecto con espuma de
                            poliuretano expandido como aislante, a esto se suman
                            las escaleras, los pasillos de las naves
                            prefabricadas.
                          </Typography>
                          <Typography variant="body1" p={1}>
                            Su montaje no requiere cimentaciones especiales, en
                            la mayoría de los casos una losa de 15 o 20 cm es
                            suficiente para instalar los postes y accesorios de
                            montaje de los paneles sándwich.
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </Grid>
          )}

          {vistaNaves && (
            <Grid container item xs={12} spacing={2} p={3}>
              <Grid item sm={12}>
                <Card>
                  <CardHeader
                    title="Naves Industriales"
                    titleTypographyProps={{
                      color: "darkgreen",
                      align: "right",
                      fontWeight: "bold",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="500"
                    image="../../hangar2.jpg"
                    alt="img"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="darkgreen"
                      fontWeight="bold"
                    >
                      Naves Industriales y Hangares
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
                      <Typography
                        variant="h4"
                        bgcolor="darkgreen"
                        color="white"
                        p={1}
                      >
                        Descripcion
                      </Typography>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography variant="body1" p={1}>
                            Nuestras estructuras metálicas, hangares, naves
                            industriales son de muy alta calidad, y son
                            personalizables según sus necesidades, el tamaño y
                            el alcance del sitio a precios imbatibles.
                          </Typography>
                          <Typography variant="body1" p={1}>
                            Es decir, podemos realizar sus proyectos llave en
                            mano a medida para cubrir perfectamente todas sus
                            necesidades y objetivos estratégicos.
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
