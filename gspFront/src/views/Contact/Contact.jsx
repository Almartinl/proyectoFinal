import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";
import Swal from "sweetalert2";

const initialContactState = {
  nombre: "",
  apellidos: "",
  email: "",
  pais: "",
  direccion: "",
  telefono: "",
  ciudad: "",
  descripcion: "",
};

export default function Contact() {
  document.title = "Contacto";

  const [newContact, setNewContact] = useState(initialContactState);

  function handleInput(e) {
    const newRegistro = {
      ...newContact,
      [e.target.name]: e.target.value,
    };
    setNewContact(newRegistro);
  }

  function registrar(e) {
    e.preventDefault();

    fetch("http://localhost:3000/user/contact", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newContact),
    }).then((response) => {
      console.log(response.status);
      if (response.status == 400) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Rellena todos los campos",
        });
      } else if (response.status == 200) {
        Swal.fire(
          "Registrado",
          "Formulario registrado correctamente",
          "success"
        );
        setNewContact(initialContactState);
      } else if (response.status == 409) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Formulario ya registrado",
        });
      }
    });
  }
  return (
    <Container maxWidth="xl">
      <Grid
        container
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center" },

          marginTop: "24px",
        }}
      >
        <Grid
          container
          spacing={1}
          item
          md={4}
          height="100vh"
          sx={{ py: { xs: 1, md: 10 }, paddingLeft: { xs: 1, md: 10 } }}
        >
          <Grid container item xs={12} bgcolor="darkgreen" boxShadow="10px">
            <Grid container flexDirection="column" gap={10}>
              <Typography
                variant="h4"
                fontWeight="800"
                color="white"
                px={6}
                paddingTop={5}
              >
                Datos de Contacto
              </Typography>
              <Grid
                container
                flexDirection="column"
                alignItems="center"
                gap={1}
              >
                {/* <Typography variant="h6" textAlign="center" color="white">
                No dude en ponerse en contacto con nosotros para obtener más
                información:
              </Typography> */}
                <Grid
                  container
                  flexDirection="column"
                  alignItems="center"
                  gap={2}
                >
                  <PhoneIcon fontSize="large" sx={{ color: "white" }} />
                  <Grid>
                    <Typography
                      variant="body1"
                      textAlign="center"
                      color="white"
                    >
                      Teléfono 1: +225 79 10 88 02
                    </Typography>
                    <Typography
                      variant="body1"
                      textAlign="center"
                      color="white"
                    >
                      Teléfono 2: +225 70 89 49 77
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  flexDirection="column"
                  alignItems="center"
                  gap={2}
                  marginTop={4}
                >
                  <EmailIcon fontSize="large" sx={{ color: "white" }} />
                  <Typography variant="body1" textAlign="center" color="white">
                    globalsolutionsprefabriquees@gmail.com
                  </Typography>
                </Grid>
              </Grid>
              <Grid container flexDirection="column" gap={4}>
                <Typography variant="h4" fontWeight="800" color="white" px={6}>
                  Siguenos
                </Typography>
                <Grid container flexDirection="row" justifyContent="center">
                  <IconButton href="https://www.linkedin.com/company/global-solutions-pr%C3%A9fabriqu%C3%A9es/">
                    <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton href="https://www.facebook.com/Global-Solutions-Pr%C3%A9fabriqu%C3%A9es-115355516956606">
                    <FacebookOutlinedIcon
                      fontSize="large"
                      sx={{ color: "white" }}
                    />
                  </IconButton>
                  <IconButton>
                    <WhatsAppIcon fontSize="large" sx={{ color: "white" }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          item
          md={8}
          height="100vh"
          sx={{
            py: { xs: 1, md: 10 },
            paddingRight: { xs: 0, md: 10 },
            paddingLeft: { xs: 1 },
          }}
        >
          <Grid item xs={12} py={5} border="4px solid darkgreen ">
            <Typography variant="h4" fontWeight="800" px={6} paddingTop={5}>
              Formulario de <br />
              Contacto
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={registrar}
              sx={{ mt: 3 }}
              px={6}
              paddingTop={5}
            >
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
                    value={newContact.nombre}
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
                    value={newContact.apellidos}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="direccion"
                    label="Direccion"
                    name="direccion"
                    autoComplete="direccion"
                    value={newContact.direccion}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    id="pais"
                    label="Pais"
                    name="pais"
                    autoComplete="new-pais"
                    value={newContact.pais}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    fullWidth
                    id="ciudad"
                    label="Ciudad"
                    name="ciudad"
                    autoComplete="new-ciudad"
                    value={newContact.ciudad}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={newContact.email}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    fullWidth
                    id="telefono"
                    label="Telefono"
                    name="telefono"
                    autoComplete="telefono"
                    value={newContact.telefono}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="descripcion"
                    label="Descrpcion"
                    type="descripcion"
                    id="descripcion"
                    autoComplete="new-descripcion"
                    multiline
                    rows={4}
                    value={newContact.descripcion}
                    onChange={handleInput}
                    color="success"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="He leido y acepto la Politica de Privacidad y el Aviso Legal"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2, backgroundColor: "darkgreen" }}
              >
                Enviar Formulario
              </Button>
              <Grid container justifyContent="flex-end"></Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          sx={{ marginTop: { xs: 60, md: 10 } }}
          gap={4}
        >
          <Typography variant="h4" fontWeight="800" color="darkgreen">
            Nuestra Localizacion
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3972.2402432196845!2d-3.9340390000000003!3d5.380298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ed12e1c981bb%3A0x58f4717241c5dfd4!2sGlobal%20Solutions%20Pr%C3%A9fabriqu%C3%A9es%20(GSP)!5e0!3m2!1sen!2sus!4v1677359850171!5m2!1sen!2sus"
            width="90%"
            height="400"
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </Container>
  );
}
