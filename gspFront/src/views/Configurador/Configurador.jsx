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
  let model3d;

  const [button3d, setButton3d] = useState(false);
  const [disposicion, setDisposicion] = useState([]);
  const [disposicionValue, setDisposicionValue] = useState("");
  const [orientacion, setOrientacion] = useState([]);
  const [orientacionValue, setOrientacionValue] = useState("");
  const [modelo, setModelo] = useState([]);
  const [modeloValue, setModeloValue] = useState("");
  const [tipo, setTipo] = useState([]);
  const [tipoValue, setTipoValue] = useState("");
  const [bungalowa, setBungalowa] = useState([]);
  const [bungalowaValue, setBungalowaValue] = useState("");
  const [bungalowb, setBungalowb] = useState([]);
  const [bungalowbValue, setBungalowbValue] = useState("");
  const [bungalowc, setBungalowc] = useState([]);
  const [bungalowcValue, setBungalowcValue] = useState("");

  const [planta, setPlanta] = useState([]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(`http://localhost:3000/config/disposicion`);
      const selector = await response.json();
      setDisposicion(selector);
    }
    fetchSelector();
  }, []);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(`http://localhost:3000/config/orientacion`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ disposicion: disposicionValue }),
      });
      const selector = await response.json();
      setOrientacion(selector);
    }
    if (disposicionValue !== "") {
      fetchSelector();
    }
  }, [disposicionValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(`http://localhost:3000/config/modelo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orientacion: orientacionValue }),
      });
      const selector = await response.json();
      setModelo(selector);
    }
    if (orientacionValue !== "") {
      fetchSelector();
    }
  }, [orientacionValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(`http://localhost:3000/config/tipo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ modelo: modeloValue }),
      });
      const selector = await response.json();
      setTipo(selector);
    }
    if (modeloValue !== "") {
      fetchSelector();
    }
  }, [modeloValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(`http://localhost:3000/config/bungalowa`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo: tipoValue }),
      });
      const selector = await response.json();
      setBungalowa(selector);
    }
    if (tipoValue !== "" && disposicionValue != 1) {
      fetchSelector();
    }
  }, [tipoValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(`http://localhost:3000/config/bungalowb`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bungalowa: bungalowaValue }),
      });
      const selector = await response.json();
      setBungalowb(selector);
    }
    if (bungalowaValue !== "") {
      fetchSelector();
    }
  }, [bungalowaValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(`http://localhost:3000/config/bungalowc`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bungalowb: bungalowbValue }),
      });
      const selector = await response.json();
      setBungalowc(selector);
    }
    if (bungalowbValue !== "" && disposicionValue != 2) {
      fetchSelector();
    }
  }, [bungalowbValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `http://localhost:3000/config/modelosimple`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            disposicion: disposicionValue,
            orientacion: orientacionValue,
            modelo: modeloValue,
            tipo: tipoValue,
          }),
        }
      );
      const selector = await response.json();
      setPlanta(selector);
      bungalowFinal = selector;
    }
    if (disposicionValue == 1 && tipoValue != "") {
      fetchSelector();
    }
  }, [tipoValue]);

  function handleChangeDisposicion(event) {
    setDisposicionValue(event.target.value);
  }

  function handleChangeOrientacion(event) {
    setOrientacionValue(event.target.value);
  }

  function handleChangeModelo(event) {
    setModeloValue(event.target.value);
  }

  function handleChangeTipo(event) {
    setTipoValue(event.target.value);
  }

  function handleChangeBungalowa(event) {
    setBungalowaValue(event.target.value);
  }

  function handleChangeBungalowb(event) {
    setBungalowbValue(event.target.value);
  }

  function handleChangeBungalowc(event) {
    setBungalowcValue(event.target.value);
  }

  useEffect(() => {
    setOrientacion([]);
    setOrientacionValue("");
    setModelo([]);
    setModeloValue("");
    setTipo([]);
    setTipoValue("");
    setBungalowa([]);
    setBungalowaValue("");
    setBungalowb([]);
    setBungalowbValue("");
    setBungalowc([]);
    setBungalowcValue("");
    setButton3d(false);
  }, [disposicion]);

  function reset() {
    setDisposicionValue("");
    setOrientacion([]);
    setOrientacionValue("");
    setModelo([]);
    setModeloValue("");
    setTipo([]);
    setTipoValue("");
    setBungalowa([]);
    setBungalowaValue("");
    setBungalowb([]);
    setBungalowbValue("");
    setBungalowc([]);
    setBungalowcValue("");
    setPlanta([]);

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
  console.log(disposicionValue);
  console.log(orientacionValue);
  console.log(modeloValue);
  console.log(tipoValue);
  console.log(bungalowaValue);
  console.log(bungalowbValue);
  console.log(bungalowcValue);
  console.log(planta);
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
                    value={disposicionValue}
                    label="demo-simple-select-label"
                    onChange={handleChangeDisposicion}
                  >
                    {disposicion.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.disposicion}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="orientacion">Elige la orientacion</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={orientacionValue}
                    label="demo-simple-select-label"
                    onChange={handleChangeOrientacion}
                  >
                    {orientacion.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.orientacion}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="modelo">Elige El Modelo</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={modeloValue}
                    label="demo-simple-select-label"
                    onChange={handleChangeModelo}
                  >
                    {modelo.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.modelo}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="tipo">Elige El Tipo</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tipoValue}
                    label="demo-simple-select-label"
                    onChange={handleChangeTipo}
                  >
                    {tipo.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.tipo}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="bungalowa">Bungalow-A</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bungalowaValue}
                    label="demo-simple-select-label"
                    onChange={handleChangeBungalowa}
                  >
                    {bungalowa.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.bungalowa}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="bungalowb">Bungalow-B</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bungalowbValue}
                    label="demo-simple-select-label"
                    onChange={handleChangeBungalowb}
                  >
                    {bungalowb.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.bungalowb}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="bungalowc">Bungalow-C</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bungalowcValue}
                    label="demo-simple-select-label"
                    onChange={handleChangeBungalowc}
                  >
                    {bungalowc.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.bungalowc}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
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
          {planta.length > 0 ? (
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
                src={`http://localhost:3000/${planta[0].planta}`}
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
          {/* {button3d && (
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
          )} */}
        </Grid>
      </Grid>
    </Container>
  );
}
