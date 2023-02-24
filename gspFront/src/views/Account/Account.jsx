import {
  Container,
  Grid,
  Typography,
  Paper,
  Divider,
  Button,
  TextField,
  Box,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  tableCellClasses,
  Link,
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BadgeIcon from "@mui/icons-material/Badge";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PasswordIcon from "@mui/icons-material/Password";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Account() {
  document.title = "Perfil";

  const { dataToken, logout } = useAuthContext();

  const [user, setUser] = useState([]);
  const [stateChange, setStateChange] = useState(false);
  const [editNombre, setEditNombre] = useState(false);
  const [editApellido, setEditApellido] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [editDireccion, setEditDireccion] = useState(false);
  const [editTelefono, setEditTelefono] = useState(false);
  const [bungalow, setBungalow] = useState([]);
  const [listaPresupuesto, setListaPresupuesto] = useState([]);
  const presupuesto = {
    usuario: dataToken.id,
    descripcion: listaPresupuesto,
  };

  const [newName, setNewName] = useState({ nombre: "" });
  function handleInputName(e) {
    const newRegistro = {
      ...newName,
      [e.target.name]: e.target.value,
    };
    setNewName(newRegistro);
  }
  const [newApellido, setNewApellido] = useState({ apellidos: "" });
  function handleInputApellido(e) {
    const newRegistro = {
      ...newApellido,
      [e.target.name]: e.target.value,
    };
    setNewApellido(newRegistro);
  }
  const [newEmail, setNewEmail] = useState({ email: "" });
  function handleInputEmail(e) {
    const newRegistro = {
      ...newEmail,
      [e.target.name]: e.target.value,
    };
    setNewEmail(newRegistro);
  }
  const [newPassword, setNewPassword] = useState({ password: "" });
  function handleInputPassword(e) {
    const newRegistro = {
      ...newPassword,
      [e.target.name]: e.target.value,
    };
    setNewPassword(newRegistro);
  }
  const [newDireccion, setNewDireccion] = useState({ direccion: "" });
  function handleInputDireccion(e) {
    const newRegistro = {
      ...newDireccion,
      [e.target.name]: e.target.value,
    };
    setNewDireccion(newRegistro);
  }
  const [newTelefono, setNewTelefono] = useState({ telefono: "" });
  function handleInputTelefono(e) {
    const newRegistro = {
      ...newTelefono,
      [e.target.name]: e.target.value,
    };
    setNewTelefono(newRegistro);
  }
  function registrarName(e) {
    e.preventDefault();
    setStateChange(!stateChange);

    fetch(`http://localhost:3000/user/${dataToken.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newName),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cambio de Nombre Registrado Correctamente",
        });
        setNewName({ nombre: "" });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }
  function registrarApellido(e) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`http://localhost:3000/user/${dataToken.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newApellido),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cambio de Apellidos Registrado Correctamente",
        });
        setNewApellido({ apellidos: "" });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }
  function registrarEmail(e) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`http://localhost:3000/user/${dataToken.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newEmail),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cambio de Email Registrado Correctamente",
        });
        setNewApellido({ apellido: "" });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }
  function registrarPassword(e) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`http://localhost:3000/user/${dataToken.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newPassword),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cambio de Contraseña Registrado Correctamente",
        });
        setNewPassword({ password: "" });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }
  function registrarDireccion(e) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`http://localhost:3000/user/${dataToken.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newDireccion),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cambio de Direccion Registrado Correctamente",
        });
        setNewDireccion({ direccion: "" });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }
  function registrarTelefono(e) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`http://localhost:3000/user/${dataToken.id}`, {
      method: "PATCH",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newTelefono),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cambio de Telefono Registrado Correctamente",
        });
        setNewTelefono({ telefono: "" });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }
  function handleEditNombre() {
    setEditNombre(!editNombre);
  }
  function handleEditApellido() {
    setEditApellido(!editApellido);
  }
  function handleEditEmail() {
    setEditEmail(!editEmail);
  }
  function handleEditPassword() {
    setEditPassword(!editPassword);
  }
  function handleEditDireccion() {
    setEditDireccion(!editDireccion);
  }
  function handleEditTelefono() {
    setEditTelefono(!editTelefono);
  }

  function handleDeleteBungalow(e, id) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`http://localhost:3000/bungalows/delete`, {
      method: "DELETE",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Modelo Borrado Correctamente",
        });
      }
    });
  }

  function addPresupuesto(e, nombre, nombreModelo, id) {
    e.preventDefault();
    setListaPresupuesto([
      ...listaPresupuesto,
      { nombre: nombre, modelo: nombreModelo, id: id },
    ]);
  }

  function deleteListPresupuesto(e, indexList) {
    e.preventDefault();
    const newList = listaPresupuesto.filter(
      (item, index) => index !== indexList
    );
    setListaPresupuesto(newList);
  }

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch("http://localhost:3000/user/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: dataToken.email,
        }),
      });
      const data = await response.json();
      setUser(data);
    }
    fetchCount();
  }, [stateChange]);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch("http://localhost:3000/bungalows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: dataToken.id,
        }),
      });
      const data = await response.json();
      setBungalow(data);
      console.log(data);
    }
    fetchCount();
  }, [stateChange]);

  function downloadImg(e, url, nombre) {
    e.preventDefault();

    fetch(`http://localhost:3000/${url}`)
      .then((respuesta) => respuesta.blob())
      .then((blob) => {
        const imagenUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = imagenUrl;
        link.download = nombre;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }

  function sendPresupuesto(e) {
    e.preventDefault();
    presupuesto.descripcion = JSON.stringify(
      listaPresupuesto.map((item) => item.modelo)
    );
    if (listaPresupuesto.length < 1) {
      return;
    }
    fetch(`http://localhost:3000/bungalows/addpresupuesto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(presupuesto),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Presupuesto Enviado Correctamente",
        });
      }
    });
  }

  function deleteAccount() {
    Swal.fire({
      title: "¿Seguro que quieres borrar tu cuenta?",
      text: "Recuerda que luego si quieres volver a ver tu perfil tendras que solicitar al administrador permisos",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrame !!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/user/delete/${dataToken.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => {
          if (response.status == 400) {
            alert("error al recibir el body");
          } else if (response.status == 200) {
            Swal.fire("Borrado!", "Tu cuenta ha sido inabilitada", "success");
            logout();
          } else if (response.status == 409) {
            alert("usuario ya registrado");
          }
        });
      }
    });
  }

  console.log(listaPresupuesto);
  console.log(presupuesto);
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h2" fontWeight="bold" component="h1" gutterBottom>
        Cuenta
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              my: 4,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fafafa",
            }}
          >
            {user.length > 0 && (
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <Typography variant="h5">Detalles del usuario</Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <BadgeIcon />
                      <Typography variant="h6">
                        Nombre: {user[0].nombre}
                      </Typography>
                      <Button onClick={handleEditNombre}>
                        <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  {editNombre && (
                    <Box
                      component="form"
                      onSubmit={registrarName}
                      sx={{
                        "& > :not(style)": { m: 1 },
                      }}
                      noValidate
                    >
                      <TextField
                        id="outlined-basic"
                        label="Nombre"
                        name="nombre"
                        variant="outlined"
                        value={newName.nombre}
                        onChange={handleInputName}
                      />
                      <IconButton color="success" type="submit">
                        <SaveIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => setNewName({ nombre: "" })}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  )}
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <BadgeIcon />
                      <Typography variant="h6">
                        Apellidos: {user[0].apellidos}
                      </Typography>
                      <Button onClick={handleEditApellido}>
                        <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  {editApellido && (
                    <Box
                      component="form"
                      onSubmit={registrarApellido}
                      sx={{
                        "& > :not(style)": { m: 1 },
                      }}
                      noValidate
                    >
                      <TextField
                        id="outlined-basic"
                        label="Apellidos"
                        name="apellidos"
                        variant="outlined"
                        value={newApellido.apellidos}
                        onChange={handleInputApellido}
                      />
                      <IconButton color="success" type="submit">
                        <SaveIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => setNewApellido({ apellido: "" })}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  )}
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <ContactMailIcon />
                      <Typography variant="h6">
                        Email: {user[0].email}
                      </Typography>
                      <Button onClick={handleEditEmail}>
                        <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  {editEmail && (
                    <Box
                      component="form"
                      onSubmit={registrarEmail}
                      sx={{
                        "& > :not(style)": { m: 1 },
                      }}
                      noValidate
                    >
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        name="email"
                        variant="outlined"
                        value={newEmail.email}
                        onChange={handleInputEmail}
                      />
                      <IconButton color="success" type="submit">
                        <SaveIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => setNewEmail({ email: "" })}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  )}
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <LocalPhoneIcon />
                      <Typography variant="h6">
                        Telefono: {user[0].telefono}
                      </Typography>
                      <Button onClick={handleEditTelefono}>
                        <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  {editTelefono && (
                    <Box
                      component="form"
                      onSubmit={registrarTelefono}
                      sx={{
                        "& > :not(style)": { m: 1 },
                      }}
                      noValidate
                    >
                      <TextField
                        id="outlined-basic"
                        label="Telefono"
                        name="telefono"
                        variant="outlined"
                        value={newTelefono.telefono}
                        onChange={handleInputTelefono}
                      />
                      <IconButton color="success" type="submit">
                        <SaveIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => setNewTelefono({ telefono: "" })}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  )}
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <LocationOnIcon />
                      <Typography variant="h6">
                        Direccion: {user[0].direccion}
                      </Typography>
                      <Button onClick={handleEditDireccion}>
                        <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  {editDireccion && (
                    <Box
                      component="form"
                      onSubmit={registrarDireccion}
                      sx={{
                        "& > :not(style)": { m: 1 },
                      }}
                      noValidate
                    >
                      <TextField
                        id="outlined-basic"
                        label="Direccion"
                        name="direccion"
                        variant="outlined"
                        value={newDireccion.direccion}
                        onChange={handleInputDireccion}
                      />
                      <IconButton color="success" type="submit">
                        <SaveIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => setNewDireccion({ direccion: "" })}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  )}
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <PasswordIcon />
                      <Typography variant="h6">
                        Contraseña: ***********
                      </Typography>
                      <Button onClick={handleEditPassword}>
                        <EditIcon />
                      </Button>
                    </Grid>
                  </Grid>
                  {editPassword && (
                    <Box
                      component="form"
                      onSubmit={registrarPassword}
                      sx={{
                        "& > :not(style)": { m: 1 },
                      }}
                      noValidate
                    >
                      <TextField
                        id="outlined-basic"
                        label="Contraseña"
                        name="password"
                        variant="outlined"
                        value={newPassword.password}
                        onChange={handleInputPassword}
                      />
                      <IconButton color="success" type="submit">
                        <SaveIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => setNewPassword({ password: "" })}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  )}
                </Grid>
              </Grid>
            )}
          </Paper>

          <Paper
            sx={{
              p: 2,
              my: 4,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fafafa",
            }}
          >
            {user.length > 0 && (
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <Typography variant="h5">Modelos del configurador</Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {bungalow.length > 0 ? (
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 200 }}
                            aria-label="customized table"
                          >
                            <TableHead>
                              <TableRow>
                                <StyledTableCell>
                                  Nombre del modelo
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  vista en planta
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                  Acciones
                                </StyledTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {bungalow.map((row) => (
                                <StyledTableRow key={row.id}>
                                  <StyledTableCell component="th" scope="row">
                                    {row.nombre}
                                  </StyledTableCell>
                                  <StyledTableCell align="left">
                                    {row.planta}
                                  </StyledTableCell>
                                  <StyledTableCell align="left">
                                    <Grid container wrap="nowrap">
                                      <Tooltip title="Descargar Modelo">
                                        <IconButton
                                          onClick={(e) =>
                                            downloadImg(
                                              e,
                                              row.planta,
                                              row.nombre
                                            )
                                          }
                                          color="primary"
                                        >
                                          <DownloadIcon />
                                        </IconButton>
                                      </Tooltip>
                                      <Tooltip title="Borrar modelo">
                                        <IconButton
                                          onClick={(e) =>
                                            handleDeleteBungalow(e, row.id)
                                          }
                                          color="error"
                                        >
                                          <DeleteIcon />
                                        </IconButton>
                                      </Tooltip>
                                      <Tooltip title="Añadir a Presupuesto">
                                        <IconButton
                                          onClick={(e) =>
                                            addPresupuesto(
                                              e,
                                              row.nombre,
                                              row.nombrebungalow,
                                              row.id
                                            )
                                          }
                                          color="success"
                                        >
                                          <AddCircleIcon />
                                        </IconButton>
                                      </Tooltip>
                                    </Grid>
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      ) : (
                        <Grid item xs={12} md={10}>
                          <Typography variant="h5">
                            No Hay Modelos Guardados
                          </Typography>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Paper>
          <Paper
            sx={{
              p: 2,
              my: 4,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fafafa",
            }}
          >
            {user.length > 0 && (
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <Typography variant="h5">Solicitud de Presupuesto</Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Box
                        component="form"
                        noValidate
                        onSubmit={sendPresupuesto}
                        sx={{ mt: 3 }}
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Box sx={{ mt: 1 }}>
                              {listaPresupuesto.length > 0 ? (
                                <List>
                                  {listaPresupuesto.map((row, index) => (
                                    <Grid key={index}>
                                      <ListItem sx={{ width: "100%" }}>
                                        <ListItemText primary={row.nombre} />
                                        <IconButton
                                          color="error"
                                          onClick={(e) =>
                                            deleteListPresupuesto(e, index)
                                          }
                                        >
                                          <DeleteIcon />
                                        </IconButton>
                                      </ListItem>
                                    </Grid>
                                  ))}
                                </List>
                              ) : (
                                <Typography variant="h5">
                                  No hay modelos añadidos al presupuesto
                                </Typography>
                              )}
                            </Box>
                          </Grid>
                        </Grid>
                        {listaPresupuesto.length > 0 ? (
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                          >
                            Mandar solicitud
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled
                          >
                            Mandar solicitud
                          </Button>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Paper>
          <Paper
            sx={{
              p: 2,
              my: 4,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fafafa",
            }}
          >
            {user.length > 0 && (
              <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                  <Typography variant="h5">Borrar Cuenta</Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="error"
                        onClick={deleteAccount}
                      >
                        <HighlightOffIcon />
                        <Typography variant="h5">Borrar Cuenta</Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
