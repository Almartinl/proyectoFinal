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
  const { dataToken } = useAuthContext();

  const [user, setUser] = useState([]);
  const [stateChange, setStateChange] = useState(false);
  const [editNombre, setEditNombre] = useState(false);
  const [editApellido, setEditApellido] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [editDireccion, setEditDireccion] = useState(false);
  const [editTelefono, setEditTelefono] = useState(false);
  const [bungalow, setBungalow] = useState([]);

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
      console.log(data);
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
                <Grid item xs={12} md={4}>
                  <Typography variant="h5">Detalles del usuario</Typography>
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
                <Grid item xs={12} md={4}>
                  <Typography variant="h5">
                    Modelos del configurador y presupuestos:
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
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
                                    <Grid container wrap="nowwrap">
                                      <IconButton
                                        href={`http://localhost:3000/${row.planta}`}
                                        download={row.nombre}
                                      >
                                        <DownloadIcon />
                                      </IconButton>
                                      <IconButton
                                        onClick={(e) =>
                                          handleDeleteBungalow(e, row.id)
                                        }
                                      >
                                        <DeleteIcon />
                                      </IconButton>
                                    </Grid>
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      ) : (
                        <Grid item xs={12} md={8}>
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
        </Grid>
      </Grid>
    </Container>
  );
}
