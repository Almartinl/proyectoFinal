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
  tableFooterClasses,
} from "@mui/material";
import { useEffect, useState, Suspense } from "react";
import { Canvas, render, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Configurador() {
  document.title = "configurador";
  let bungalowFinal;
  let disableButton = true;
  let model3d = "";

  const [button3d, setButton3d] = useState(true);
  const [disposicion, setDisposicion] = useState("");
  const [allTable, setAllTable] = useState([]);
  const [orientacion, setOrientacion] = useState("");
  const [orientacionObject, setOrientacionObject] = useState([]);

  useEffect(() => {
    async function fetchSelecto2() {
      const response = await fetch(`http://localhost:3000/config`);
      const selector = await response.json();
      setAllTable(
        selector.filter((item) => {
          return item.disposicion == disposicion;
        })
      );
    }
    fetchSelecto2();
  }, [disposicion]);

  useEffect(() => {
    async function fetchSelecto2() {
      const response = await fetch(`http://localhost:3000/config`);
      const selector = await response.json();
      setOrientacionObject(
        selector.filter((item) => item.orientacion == orientacion)
      );
    }
    fetchSelecto2();
  }, [orientacion]);

  console.log(allTable);
  console.log(orientacionObject);

  const handleChange = (event) => {
    setDisposicion(event.target.value);
  };

  function handleChangeOrientacion(event) {
    setOrientacion(event.target.value);
  }

  useEffect(() => {
    setOrientacion("");
    setAllTable([]);
    setButton3d(false);
  }, [disposicion]);

  function reset() {
    setDisposicion("");
    setEleccionForma("");
    setEleccionTipo("");
    setEleccionModelo("");
    setEleccionA("");
    setEleccionB("");
    setEleccionC("");
    setButton3d(false);
  }
  function handleView3d() {
    setButton3d(true);
  }
  function View3d() {
    const Model = () => {
      const gltf = useLoader(GLTFLoader, model3d);
      return (
        <>
          <primitive object={gltf.scene} scale={1.5} />
        </>
      );
    };

    return (
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    );
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
                    <InputLabel id="orientacion">
                      Elige la orientacion
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={orientacion}
                      label="demo-simple-select-label"
                      onChange={handleChangeOrientacion}
                    >
                      {allTable.map((item) => (
                        <MenuItem key={item.id} value={item.orientacion}>
                          {item.orientacion}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}

            {/* {eleccionForma.bungalowa !== "" && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="disposicion">Bungalow A</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={eleccionForma.bungalowa}
                      label="demo-simple-select-label"
                      onChange={handleChangeForma}
                    >
                      {eleccionForma.map((item) => (
                        <MenuItem value={item.bungalowa}>
                          {item.bungalowa}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )} */}
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
            <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: "darkgreen" }}
              disabled={disableButton}
              onClick={handleView3d}
            >
              vista 3d
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
          {button3d && (
            <Grid item xs={12} width="100%" height="80vh">
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{ textAlign: "center", color: "darkgreen" }}
              >
                Vista 3d
              </Typography>
              <View3d />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
