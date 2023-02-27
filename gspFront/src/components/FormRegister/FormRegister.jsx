import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Swal from "sweetalert2";

const initialUserState = {
  nombre: "",
  apellidos: "",
  email: "",
  password: "",
  direccion: "",
  telefono: "",
};

const theme = createTheme();

export default function FormRegister({ vista, estado }) {
  const [newUsuario, setNewUsuario] = useState(initialUserState);
  function handleInput(e) {
    const newRegistro = {
      ...newUsuario,
      [e.target.name]: e.target.value,
    };
    setNewUsuario(newRegistro);
  }

  function registrar(e) {
    e.preventDefault();

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newUsuario),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Rellena todos los campos",
        });
      } else if (response.status == 200) {
        Swal.fire("Registrado", "Usuario registrado correctamente", "success");
        setNewUsuario(initialUserState);
      } else if (response.status == 409) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Usuario ya registrado",
        });
      }
    });
  }

  function handleChange() {
    estado(!vista);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 7,
            border: "1px solid darkgreen",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "darkgreen" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <Box component="form" noValidate onSubmit={registrar} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nombre"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  value={newUsuario.nombre}
                  onChange={handleInput}
                  color="success"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellidos"
                  name="apellidos"
                  autoComplete="family-name"
                  value={newUsuario.apellidos}
                  onChange={handleInput}
                  color="success"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="direccion"
                  label="Direccion"
                  name="direccion"
                  autoComplete="direccion"
                  value={newUsuario.direccion}
                  onChange={handleInput}
                  color="success"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="telefono"
                  label="Telefono"
                  name="telefono"
                  autoComplete="telefono"
                  value={newUsuario.telefono}
                  onChange={handleInput}
                  color="success"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={newUsuario.email}
                  onChange={handleInput}
                  color="success"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={newUsuario.password}
                  onChange={handleInput}
                  color="success"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="success" />
                  }
                  label="Quiero recibir inspiración, promociones de marketing y actualizaciones por Email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "darkgreen" }}
            >
              Registrate
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleChange()}
                >
                  ¿Ya tienes cuenta? Inicia sesion
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
