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
  const [disposicion, setDisposicion] = useState({
    disposicion: "",
  });
  const [eleccionForma, setEleccionForma] = useState([
    { orientacion: "", bungalowa: "" },
  ]);
  const [eleccionModelo, setEleccionModelo] = useState("");
  const [eleccionTipo, setEleccionTipo] = useState("");
  const [eleccionA, setEleccionA] = useState("");
  const [eleccionB, setEleccionB] = useState("");
  const [eleccionC, setEleccionC] = useState("");

  useEffect(() => {
    if (disposicion.disposicion !== "") {
      async function fetchSelecto2() {
        const response = await fetch(`http://localhost:3000/config`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(disposicion),
        });
        const selector2 = await response.json();
        setEleccionForma(selector2);
      }
      fetchSelecto2();
    }
  }, [disposicion]);

  console.log(eleccionForma, "eleccionforma");
  console.log(disposicion);
  const handleChange = (event) => {
    setDisposicion({ disposicion: event.target.value });
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
    setButton3d(false);
  }
  function handleView3d() {
    setButton3d(true);
  }

  useEffect(() => {
    setEleccionForma("");
    setEleccionTipo("");
    setEleccionA("");
    setButton3d(false);
  }, [disposicion]);

  useEffect(() => {
    setEleccionTipo("");
    setButton3d(false);
  }, [eleccionModelo]);

  useEffect(() => {
    setEleccionTipo("");
    setEleccionModelo("");
    setButton3d(false);
  }, [eleccionForma]);

  useEffect(() => {
    setEleccionB("");
    setEleccionC("");
    setButton3d(false);
  }, [eleccionA]);

  useEffect(() => {
    setEleccionC("");
    setButton3d(false);
  }, [eleccionB]);

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

  // if (disposicion == 1 && eleccionForma == 1 && eleccionTipo == 1) {
  //   bungalowFinal = "../../Diafano.png";
  //   disableButton = false;
  //   model3d = "../../box-de-punta.glb";
  // } else if (disposicion == 1 && eleccionForma == 1 && eleccionTipo == 2) {
  //   bungalowFinal = "../../duchasSimple.png";
  //   disableButton = false;
  // } else if (disposicion == 1 && eleccionForma == 1 && eleccionTipo == 3) {
  //   bungalowFinal = "../../mixtoSimple.png";
  //   disableButton = false;
  //   model3d = "../../box-mixto.glb";
  // } else if (disposicion == 1 && eleccionForma == 1 && eleccionTipo == 4) {
  //   bungalowFinal = "../../vaterSimple.png";
  //   disableButton = false;
  // } else if (disposicion == 1 && eleccionForma == 1 && eleccionTipo == 5) {
  //   bungalowFinal = "../../almacenSimple.png";
  //   disableButton = false;
  // }

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
                    value={disposicion.disposicion}
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
            {eleccionForma && eleccionForma.orientacion !== "" && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="orientacion">
                      Elige la orientacion
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={eleccionForma.orientacion}
                      label="demo-simple-select-label"
                      onChange={handleChangeForma}
                    >
                      {eleccionForma.map((item) => (
                        <MenuItem value={item.orientacion}>
                          {item.orientacion}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
            {eleccionForma.bungalowa && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="disposicion">
                      Elige tu disposicion
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={eleccionForma.bungalowa}
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
