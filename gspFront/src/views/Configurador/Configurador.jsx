import {
  Container,
  Grid,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function Configurador() {
  document.title = "configurador";
  let bungalowFinal;
  let disableButton = true;

  const [disposicion, setDisposicion] = useState("");
  const [eleccionForma, setEleccionForma] = useState("");
  const [eleccionModelo, setEleccionModelo] = useState("");
  const [eleccionTipo, setEleccionTipo] = useState("");
  const [eleccionA, setEleccionA] = useState("");
  const [eleccionB, setEleccionB] = useState("");
  const [eleccionC, setEleccionC] = useState("");

  const handleChange = (event) => {
    setDisposicion(event.target.value);
  };

  const handleChangeForma = (event) => {
    setEleccionForma(event.target.value);
  };

  const handleChangeModelo = (event) => {
    setEleccionModelo(event.target.value);
  };

  const handleChangeTipo = (event) => {
    setEleccionTipo(event.target.value);
  };

  const handleChangeA = (event) => {
    setEleccionA(event.target.value);
  };
  const handleChangeB = (event) => {
    setEleccionB(event.target.value);
  };
  const handleChangeC = (event) => {
    setEleccionC(event.target.value);
  };
  function reset() {
    setDisposicion("");
    setEleccionForma("");
    setEleccionTipo("");
    setEleccionModelo("");
    setEleccionA("");
    setEleccionB("");
    setEleccionC("");
  }

  useEffect(() => {
    setEleccionForma("");
    setEleccionTipo("");
    setEleccionA("");
  }, [disposicion]);

  useEffect(() => {
    setEleccionTipo("");
  }, [eleccionModelo]);

  useEffect(() => {
    setEleccionTipo("");
    setEleccionModelo("");
  }, [eleccionForma]);

  useEffect(() => {
    setEleccionB("");
    setEleccionC("");
  }, [eleccionA]);

  useEffect(() => {
    setEleccionC("");
  }, [eleccionB]);

  if (disposicion == 1 && eleccionForma == 1 && eleccionTipo == 1) {
    bungalowFinal = "../../Diafano.png";
    disableButton = false;
  } else if (disposicion == 1 && eleccionForma == 1 && eleccionTipo == 2) {
    bungalowFinal = "../../duchasSimple.png";
    disableButton = false;
  } else if (disposicion == 1 && eleccionForma == 1 && eleccionTipo == 3) {
    bungalowFinal = "../../mixtoSimple.png";
    disableButton = false;
  } else if (disposicion == 1 && eleccionForma == 1 && eleccionTipo == 4) {
    bungalowFinal = "../../vaterSimple.png";
    disableButton = false;
  } else if (disposicion == 1 && eleccionForma == 1 && eleccionTipo == 5) {
    bungalowFinal = "../../almacenSimple.png";
    disableButton = false;
  }
  return (
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
            color="darkgreen"
            sx={{ my: "48px", fontWeight: "bold" }}
          >
            Crea tu Bungalow en un Click
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
            variant="h3"
            color="darkgreen"
            sx={{ my: "48px", fontWeight: "bold" }}
          >
            Crea tu Bungalow en un Click
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Grid container item alignContent="flex-start" gap="24px" xs={4}>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="disposicion">Elige tu disposicion</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={disposicion}
                    label="demo-simple-select-label"
                    onChange={handleChange}
                  >
                    <MenuItem value={"1"}>1 Bungalow</MenuItem>
                    <MenuItem value={"2"}>2 Bungalows</MenuItem>
                    <MenuItem value={"3"}>3 Bungalows</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            {disposicion == 1 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccionforma">
                      orientacion del bungalow
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion"
                      value={eleccionForma}
                      label="demo-simple-select-label"
                      onChange={handleChangeForma}
                    >
                      <MenuItem value={"1"}>Vertical</MenuItem>
                      <MenuItem value={"2"}>Horizontal</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {eleccionForma == 1 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="elecciontipo">Tipo de bungalow</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion"
                      value={eleccionTipo}
                      label="demo-simple-select-label"
                      onChange={handleChangeTipo}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                      <MenuItem value={"2"}>Duchas</MenuItem>
                      <MenuItem value={"3"}>Mixto</MenuItem>
                      <MenuItem value={"4"}>Vater</MenuItem>
                      <MenuItem value={"5"}>Almacen</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {eleccionForma == 2 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccionmodelo">Elige un modelo</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion"
                      value={eleccionModelo}
                      label="demo-simple-select-label"
                      onChange={handleChangeModelo}
                    >
                      <MenuItem value={"1"}>1 Puerta y 1 Ventana</MenuItem>
                      <MenuItem value={"2"}>1 Puerta y 2 Ventanas</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {eleccionModelo == 1 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="elecciontipo">Tipo de bungalow</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion"
                      value={eleccionTipo}
                      label="demo-simple-select-label"
                      onChange={handleChangeTipo}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                      <MenuItem value={"2"}>Duchas</MenuItem>
                      <MenuItem value={"3"}>Mixto</MenuItem>
                      <MenuItem value={"4"}>Vater</MenuItem>
                      <MenuItem value={"5"}>Almacen</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {eleccionModelo == 2 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="elecciontipo1">Tipo de bungalow</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion1"
                      value={eleccionTipo}
                      label="demo-simple-select-label"
                      onChange={handleChangeTipo}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                      <MenuItem value={"2"}>Duchas</MenuItem>
                      <MenuItem value={"3"}>Mixto</MenuItem>
                      <MenuItem value={"4"}>Vater</MenuItem>
                      <MenuItem value={"5"}>Almacen</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 2 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-a">Bungalow A</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-a"
                      value={eleccionA}
                      label="demo-simple-select-label"
                      onChange={handleChangeA}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                      <MenuItem value={"2"}>Duchas</MenuItem>
                      <MenuItem value={"3"}>Mixto</MenuItem>
                      <MenuItem value={"4"}>Vestuario</MenuItem>
                      <MenuItem value={"5"}>Almacen</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 2 && eleccionA == 1 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-b">Bungalow B</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-b"
                      value={eleccionB}
                      label="demo-simple-select-label"
                      onChange={handleChangeB}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                      <MenuItem value={"2"}>Duchas</MenuItem>
                      <MenuItem value={"3"}>Mixto</MenuItem>
                      <MenuItem value={"4"}>Vestuario</MenuItem>
                      <MenuItem value={"5"}>Almacen</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 2 && eleccionA == 2 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-b">Bungalow B</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-b"
                      value={eleccionB}
                      label="demo-simple-select-label"
                      onChange={handleChangeB}
                    >
                      <MenuItem value={"1"}>Vestuario</MenuItem>
                      <MenuItem value={"2"}>Diafano</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 2 && eleccionA == 3 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-b">Bungalow B</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-b"
                      value={eleccionB}
                      label="demo-simple-select-label"
                      onChange={handleChangeB}
                    >
                      <MenuItem value={"1"}>Vestuario</MenuItem>
                      <MenuItem value={"2"}>Diafano</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 2 && eleccionA == 4 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-b">Bungalow B</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-b"
                      value={eleccionB}
                      label="demo-simple-select-label"
                      onChange={handleChangeB}
                    >
                      <MenuItem value={"1"}>Duchas</MenuItem>
                      <MenuItem value={"2"}>Mixtos</MenuItem>
                      <MenuItem value={"3"}>Diafano</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 2 && eleccionA == 5 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-b">Bungalow B</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-b"
                      value={eleccionB}
                      label="demo-simple-select-label"
                      onChange={handleChangeB}
                    >
                      <MenuItem value={"1"}>Almacen</MenuItem>
                      <MenuItem value={"2"}>Diafano</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-a">Bungalow A</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-a"
                      value={eleccionA}
                      label="demo-simple-select-label"
                      onChange={handleChangeA}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                      <MenuItem value={"2"}>Duchas</MenuItem>
                      <MenuItem value={"3"}>Mixto</MenuItem>
                      <MenuItem value={"4"}>Vestuario</MenuItem>
                      <MenuItem value={"5"}>Almacen</MenuItem>
                      <MenuItem value={"6"}>Oficina</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 1 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-b">Bungalow B</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-b"
                      value={eleccionB}
                      label="demo-simple-select-label"
                      onChange={handleChangeB}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                      <MenuItem value={"2"}>Vestuario</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 1 && eleccionB == 1 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-c">Bungalow C</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-c"
                      value={eleccionC}
                      label="demo-simple-select-label"
                      onChange={handleChangeC}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                      <MenuItem value={"2"}>Oficina</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 1 && eleccionB == 2 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-c">Bungalow C</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-c"
                      value={eleccionC}
                      label="demo-simple-select-label"
                      onChange={handleChangeC}
                    >
                      <MenuItem value={"1"}>Vestuario</MenuItem>
                      <MenuItem value={"2"}>Duchas</MenuItem>
                      <MenuItem value={"3"}>Mixto</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 2 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-b">Bungalow B</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-b"
                      value={eleccionB}
                      label="demo-simple-select-label"
                      onChange={handleChangeB}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                      <MenuItem value={"2"}>Vestuario</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 2 && eleccionB == 1 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-c">Bungalow C</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-c"
                      value={eleccionC}
                      label="demo-simple-select-label"
                      onChange={handleChangeC}
                    >
                      <MenuItem value={"1"}>Vestuario</MenuItem>
                      <MenuItem value={"2"}>Diafano</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 2 && eleccionB == 2 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-c">Bungalow C</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-c"
                      value={eleccionC}
                      label="demo-simple-select-label"
                      onChange={handleChangeC}
                    >
                      <MenuItem value={"1"}>Vestuario</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 3 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-b">Bungalow B</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-b"
                      value={eleccionB}
                      label="demo-simple-select-label"
                      onChange={handleChangeB}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                      <MenuItem value={"2"}>Vestuario</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 3 && eleccionB == 1 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-c">Bungalow C</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-c"
                      value={eleccionC}
                      label="demo-simple-select-label"
                      onChange={handleChangeC}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                      <MenuItem value={"2"}>Vestuario</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 3 && eleccionB == 2 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-c">Bungalow C</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-c"
                      value={eleccionC}
                      label="demo-simple-select-label"
                      onChange={handleChangeC}
                    >
                      <MenuItem value={"1"}>Vestuario</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 4 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-b">Bungalow B</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-b"
                      value={eleccionB}
                      label="demo-simple-select-label"
                      onChange={handleChangeB}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                      <MenuItem value={"2"}>Vestuario</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 4 && eleccionB == 1 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-c">Bungalow C</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-c"
                      value={eleccionC}
                      label="demo-simple-select-label"
                      onChange={handleChangeC}
                    >
                      <MenuItem value={"1"}>Duchas</MenuItem>
                      <MenuItem value={"2"}>Mixto</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 4 && eleccionB == 2 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-c">Bungalow C</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-c"
                      value={eleccionC}
                      label="demo-simple-select-label"
                      onChange={handleChangeC}
                    >
                      <MenuItem value={"1"}>Duchas</MenuItem>
                      <MenuItem value={"2"}>Mixto</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 5 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-b">Bungalow B</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-b"
                      value={eleccionB}
                      label="demo-simple-select-label"
                      onChange={handleChangeB}
                    >
                      <MenuItem value={"1"}>Almacen</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 5 && eleccionB == 1 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-c">Bungalow C</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-c"
                      value={eleccionC}
                      label="demo-simple-select-label"
                      onChange={handleChangeC}
                    >
                      <MenuItem value={"1"}>Almacen</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 6 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-b">Bungalow B</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-b"
                      value={eleccionB}
                      label="demo-simple-select-label"
                      onChange={handleChangeB}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {disposicion == 3 && eleccionA == 6 && eleccionB == 1 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="eleccion-c">Bungalow C</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="text-eleccion-c"
                      value={eleccionC}
                      label="demo-simple-select-label"
                      onChange={handleChangeC}
                    >
                      <MenuItem value={"1"}>Diafano</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}

            <Button onClick={reset} variant="contained" color="error">
              Reset
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ backgroundColor: "darkgreen" }}
              disabled={disableButton}
            >
              Guardar
            </Button>
          </Grid>
          {bungalowFinal ? (
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <img
                src={bungalowFinal}
                alt="foto"
                style={{
                  maxWidth: "100%",
                  maxHeight: "50%",
                  objectFit: "cover",
                }}
              />
            </Grid>
          ) : (
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <img
                src="../../intro.png"
                alt="foto"
                style={{
                  maxWidth: "100%",
                  maxHeight: "50%",
                  objectFit: "cover",
                }}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
