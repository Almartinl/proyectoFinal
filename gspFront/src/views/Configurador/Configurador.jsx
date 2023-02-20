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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import { useEffect, useState, Suspense } from "react";
import { Canvas, render, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useAuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

export default function Configurador() {
  document.title = "configurador";

  const { dataToken } = useAuthContext();

  const [disableButton, setDisableButton] = useState(true);
  const [view3d, setView3d] = useState(false);
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
  const [nombreProyecto, setNombreProyecto] = useState("");

  const [planta, setPlanta] = useState([]);
  const [modelo3d, setModelo3d] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      const response = await fetch(`http://localhost:3000/config/modelo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orientacion: "3" }),
      });
      const selector = await response.json();
      setModelo(selector);
      setOrientacionValue("3");
      setModeloValue("3");
      setTipoValue("11");
    }
    if (disposicionValue == "2") {
      fetchSelector();
    }
  }, [disposicionValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(`http://localhost:3000/config/modelo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orientacion: "4" }),
      });
      const selector = await response.json();
      setModelo(selector);
      setOrientacionValue("4");
      setModeloValue("5");
      setTipoValue("17");
    }
    if (disposicionValue == "3") {
      fetchSelector();
    }
  }, [disposicionValue]);

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
      const response = await fetch(`http://localhost:3000/config/tipo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ modelo: "4" }),
      });
      const selector = await response.json();
      setTipo(selector);
      setModeloValue("4");

      console.log(selector);
    }
    if (orientacionValue == "1") {
      fetchSelector();
    }
  }, [orientacionValue]);

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
      setModelo3d(selector[0].modelo3d);
      setDisableButton(false);
    }
    if (disposicionValue == 1 && tipoValue != "") {
      fetchSelector();
    }
  }, [tipoValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(`http://localhost:3000/config/modelodoble`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          disposicion: disposicionValue,
          orientacion: orientacionValue,
          modelo: modeloValue,
          tipo: tipoValue,
          bungalowa: bungalowaValue,
          bungalowb: bungalowbValue,
        }),
      });
      const selector = await response.json();
      setPlanta(selector);
      setModelo3d(selector[0].modelo3d);
      setDisableButton(false);
    }
    if (disposicionValue == 2 && bungalowb != "") {
      fetchSelector();
    }
  }, [bungalowbValue]);

  useEffect(() => {
    async function fetchSelector() {
      const response = await fetch(
        `http://localhost:3000/config/modelotriple`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            disposicion: disposicionValue,
            orientacion: orientacionValue,
            modelo: modeloValue,
            tipo: tipoValue,
            bungalowa: bungalowaValue,
            bungalowb: bungalowbValue,
            bungalowc: bungalowcValue,
          }),
        }
      );
      const selector = await response.json();
      setPlanta(selector);
      setModelo3d(selector[0].modelo3d);
      setDisableButton(false);
    }
    if (disposicionValue == 3 && bungalowc != "") {
      fetchSelector();
    }
  }, [bungalowcValue]);

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

  function handleSubmitGuardar(event) {
    event.preventDefault();
    fetch("http://localhost:3000/bungalows/save", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombreProyecto,
        usuario: dataToken.id,
        planta: planta[0].planta,
      }),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        // alert("Modelo guardado correctamente");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Modelo Guardado Correctamente",
        });
        setNombreProyecto("");
      } else if (response.status == 409) {
        alert("modelo ya registrado");
      }
    });

    setOpen(false);
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
    setView3d(false);
    setDisableButton(true);
    setPlanta([]);
    setModelo3d([]);
  }, [disposicionValue]);

  useEffect(() => {
    if (orientacion.length > 1) {
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
      setView3d(false);
      setDisableButton(true);
      setPlanta([]);
      setModelo3d([]);
    }
  }, [orientacionValue]);

  useEffect(() => {
    if (modelo.length > 1) {
      setTipo([]);
      setTipoValue("");
      setBungalowa([]);
      setBungalowaValue("");
      setBungalowb([]);
      setBungalowbValue("");
      setBungalowc([]);
      setBungalowcValue("");
      setView3d(false);
      setDisableButton(true);
      setPlanta([]);
      setModelo3d([]);
    }
  }, [modeloValue]);

  useEffect(() => {
    if (tipo.length > 1) {
      setBungalowa([]);
      setBungalowaValue("");
      setBungalowb([]);
      setBungalowbValue("");
      setBungalowc([]);
      setBungalowcValue("");
      setView3d(false);
      setDisableButton(true);
      setPlanta([]);
      setModelo3d([]);
    }
  }, [tipoValue]);

  useEffect(() => {
    setBungalowb([]);
    setBungalowbValue("");
    setBungalowc([]);
    setBungalowcValue("");
    setView3d(false);
    setDisableButton(true);
    setPlanta([]);
    setModelo3d([]);
  }, [bungalowaValue]);

  useEffect(() => {
    setBungalowc([]);
    setBungalowcValue("");
    setView3d(false);
    setDisableButton(true);
    setPlanta([]);
    setModelo3d([]);
  }, [bungalowbValue]);

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
    setDisableButton(true);
    setView3d(false);
    setModelo3d([]);
  }
  function handleView3d() {
    setView3d(true);
  }
  function View3d() {
    const Model = () => {
      const gltf = useLoader(GLTFLoader, `http://localhost:3000/${modelo3d}`);
      return (
        <>
          <primitive object={gltf.scene} scale={3.5} />
        </>
      );
    };

    return (
      <Canvas camera={{ position: [-1.8, 1.5, 2.5], fov: 60 }}>
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
  console.log(modelo3d);
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
            {orientacion.length > 1 && (
              <Grid item xs={12}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="orientacion">
                      Elige la orientacion
                    </InputLabel>
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
            )}
            {modelo.length > 1 && (
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
            )}
            {tipo.length > 1 && (
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
            )}
            {bungalowa.length > 0 && (
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
            )}
            {bungalowb.length > 0 && (
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
            )}
            {bungalowc.length > 0 && (
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
            )}

            <Button onClick={reset} variant="contained" color="error">
              Reset
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ backgroundColor: "darkgreen" }}
              disabled={disableButton}
              onClick={handleClickOpen}
            >
              Guardar
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Guardar Modelo</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Escribe el Nombre para guardar el modelo
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Nombre"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={nombreProyecto}
                  onChange={(e) => setNombreProyecto(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmitGuardar}>Guardar</Button>
              </DialogActions>
            </Dialog>
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
                height: "50vh",
              }}
            >
              <img
                src={`http://localhost:3000/${planta[0].planta}`}
                alt="foto"
                style={{
                  maxWidth: "100%",
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
                height: "50vh",
              }}
            >
              <img
                src="../../intro.png"
                alt="foto"
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
              />
            </Grid>
          )}
          {view3d && (
            <Grid item xs={12} width="100%" height="80vh" marginTop="24px">
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{ textAlign: "center", color: "darkgreen" }}
              >
                Vista 3d
              </Typography>
              <Grid item xs={12} width="100%" height="80vh" marginTop="24px">
                <View3d />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
