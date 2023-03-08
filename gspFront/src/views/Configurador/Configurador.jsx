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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useEffect, useState, Suspense } from "react";
import { Canvas, render, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Html, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useAuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Configurador() {
  document.title = "configurador";

  const { dataToken } = useAuthContext();

  const navigate = useNavigate();

  const [disableButton, setDisableButton] = useState(true);
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
  const [open3d, setOpen3d] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenView3d = () => {
    setOpen3d(true);
  };
  const handleCloseView3d = () => {
    setOpen3d(false);
  };
  const handleClickOpenInfo = () => {
    setOpenInfo(true);
  };
  const handleCloseInfo = () => {
    setOpenInfo(false);
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
        nombrebungalow: planta[0].id,
      }),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        Swal.fire({
          title: "¿Estas Registrado?",
          text: "Registrate o inicia sesion para poder guardar el modelo en tu cuenta",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Ir al login/Register",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
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
    setDisableButton(true);
    setPlanta([]);
    setModelo3d([]);
  }, [bungalowaValue]);

  useEffect(() => {
    setBungalowc([]);
    setBungalowcValue("");
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
    setModelo3d([]);
  }

  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center scale={5}>
        <Grid width="100%">
          <Typography variant="h4" textAlign="center" color="darkgreen">
            {Math.floor(progress * 1)} % Cargado
          </Typography>
        </Grid>
      </Html>
    );
  }

  function View3d() {
    const Model = () => {
      const gltf = useLoader(GLTFLoader, `http://localhost:3000/${modelo3d}`);
      return (
        <>
          <primitive object={gltf.scene} scale={4} />
        </>
      );
    };

    return (
      <Canvas camera={{ position: [-1.8, 1.5, 2.5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <Suspense fallback={<Loader />}>
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
            Crea tu Bungalow en unos Clicks
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
            Crea tu Bungalow en unos Clicks
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Grid
            container
            item
            alignContent="flex-start"
            gap="24px"
            xs={12}
            md={4}
            sx={{ pr: { sx: 0, md: 4 } }}
          >
            <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="disposicion" color="success">
                    Elige tu disposicion
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={disposicionValue}
                    label="demo-simple-select-label"
                    onChange={handleChangeDisposicion}
                    color="success"
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
                    <InputLabel id="orientacion" color="success">
                      Elige la orientacion
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={orientacionValue}
                      label="demo-simple-select-label"
                      onChange={handleChangeOrientacion}
                      color="success"
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
                    <InputLabel id="modelo" color="success">
                      Elige El Modelo
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={modeloValue}
                      label="demo-simple-select-label"
                      onChange={handleChangeModelo}
                      color="success"
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
                    <InputLabel id="tipo" color="success">
                      Elige El Tipo
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={tipoValue}
                      label="demo-simple-select-label"
                      onChange={handleChangeTipo}
                      color="success"
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
                    <InputLabel id="bungalowa" color="success">
                      Bungalow-A
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={bungalowaValue}
                      label="demo-simple-select-label"
                      onChange={handleChangeBungalowa}
                      color="success"
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
                    <InputLabel id="bungalowb" color="success">
                      Bungalow-B
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={bungalowbValue}
                      label="demo-simple-select-label"
                      onChange={handleChangeBungalowb}
                      color="success"
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
                    <InputLabel id="bungalowc" color="success">
                      Bungalow-C
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={bungalowcValue}
                      label="demo-simple-select-label"
                      onChange={handleChangeBungalowc}
                      color="success"
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
            <Grid container item xs={12} justifyContent="space-between">
              <Button
                onClick={reset}
                variant="contained"
                color="error"
                sx={{ fontSize: { xs: "small", md: "large" } }}
              >
                Reset
              </Button>

              <Button
                variant="contained"
                color="success"
                sx={{
                  backgroundColor: "darkgreen",
                  fontSize: { xs: "small", md: "large" },
                }}
                disabled={disableButton}
                onClick={handleClickOpen}
              >
                Guardar
              </Button>

              <Button
                variant="contained"
                color="success"
                sx={{
                  backgroundColor: "darkgreen",
                  fontSize: { xs: "small", md: "large" },
                }}
                disabled={disableButton}
                onClick={handleClickOpenView3d}
              >
                vista 3d
              </Button>
              <Button
                variant="contained"
                color="info"
                onClick={handleClickOpenInfo}
                sx={{ fontSize: { xs: "small", md: "large" } }}
              >
                <InfoOutlinedIcon />
              </Button>
            </Grid>
          </Grid>
          {planta.length > 0 ? (
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "70vh",
                objectFit: "cover",
                backgroundImage: `url(${`http://localhost:3000/${planta[0].planta}`})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: { xs: "center center", md: "top center" },
                backgroundSize: "contain",
              }}
            >
              {/* <img
                src={`http://localhost:3000/${planta[0].planta}`}
                alt="foto"
                style={{
                  maxWidth: "100%",
                  // objectFit: "cover",
                }}
              /> */}
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "60vh",
                objectFit: "cover",
                backgroundImage: `url(../../intro.png)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "contain",
              }}
            >
              {/* <img
                src="../../intro.png"
                alt="foto"
                style={{
                  maxWidth: "100%",
                  // objectFit: "cover",
                }}
              /> */}
            </Grid>
          )}
          <Dialog
            maxWidth="lg"
            fullWidth
            open={open3d}
            onClose={handleCloseView3d}
          >
            <DialogTitle>Vista 3d</DialogTitle>
            <DialogContent>
              <Grid item xs={12} width="100%" height="70vh" marginTop="24px">
                <View3d />
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseView3d} variant="contained">
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            maxWidth="sm"
            fullWidth
            open={openInfo}
            onClose={handleCloseInfo}
          >
            <DialogTitle>Info</DialogTitle>
            <DialogContent
              sx={{
                display: "flex",
                alignItems: "stretch",
                justifyContent: "center",
              }}
            >
              <img
                src="../../INFO-WEB.jpg"
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseInfo} variant="contained">
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>
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
        </Grid>
      </Grid>
    </Container>
  );
}
