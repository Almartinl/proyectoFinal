import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PeopleIcon from "@mui/icons-material/People";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CategoryIcon from "@mui/icons-material/Category";
import ConstructionIcon from "@mui/icons-material/Construction";
import TableViewIcon from "@mui/icons-material/TableView";
import { useState } from "react";
import { useEffect } from "react";

export default function DashboardInicio() {
  document.title = "Dashboard Inicio";

  const [countUser, setCountUser] = useState([]);
  const [countModels, setCountModels] = useState([]);
  const [countPresupuestos, setCountPresupuestos] = useState([]);
  const [countFormContact, setCountFormContact] = useState([]);
  const [countObras, setCountObras] = useState([]);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch("http://localhost:3000/user/count");
      const data = await response.json();
      setCountUser(data);
      console.log(data);
    }
    fetchCount();
  }, []);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch("http://localhost:3000/config/");
      const data = await response.json();
      setCountModels(data);
      console.log(data);
    }
    fetchCount();
  }, []);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch("http://localhost:3000/user/count/contact");
      const data = await response.json();
      setCountFormContact(data);
      console.log(data);
    }
    fetchCount();
  }, []);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch(
        "http://localhost:3000/bungalows/count/presupuestos"
      );
      const data = await response.json();
      setCountPresupuestos(data);
      console.log(data);
    }
    fetchCount();
  }, []);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch("http://localhost:3000/obras/count");
      const data = await response.json();
      setCountObras(data);
    }
    fetchCount();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Grid
              container
              textAlign="center"
              flexDirection="column"
              gap="56px"
            >
              <Typography variant="h4" color="darkgreen">
                Usuarios
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                gutterBottom
                fontWeight="bold"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <PeopleIcon fontSize="large" />
                {countUser.length > 0 && countUser[0].usuarios}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              height: 240,
            }}
          >
            <Grid
              container
              textAlign="center"
              flexDirection="column"
              gap="56px"
            >
              <Typography variant="h4" color="darkgreen">
                Modelos del Configurador
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                gutterBottom
                fontWeight="bold"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <ViewInArOutlinedIcon fontSize="large" />
                {countModels.length > 0 && countModels[0].modelos}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              height: 240,
            }}
          >
            <Grid
              container
              textAlign="center"
              flexDirection="column"
              gap="56px"
            >
              <Typography variant="h4" color="darkgreen">
                Presupuestos Pendientes
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                gutterBottom
                fontWeight="bold"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <TableViewIcon fontSize="large" />
                {countPresupuestos.length > 0 &&
                  countPresupuestos[0].presupuesto}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              height: 240,
            }}
          >
            <Grid
              container
              textAlign="center"
              flexDirection="column"
              gap="56px"
            >
              <Typography variant="h4" color="darkgreen">
                Formularios Pendientes
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                gutterBottom
                fontWeight="bold"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <ReceiptLongIcon fontSize="large" />
                {countFormContact.length > 0 && countFormContact[0].contactos}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              height: 240,
            }}
          >
            <Grid
              container
              textAlign="center"
              flexDirection="column"
              gap="56px"
            >
              <Typography variant="h4" color="darkgreen">
                Productos
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                gutterBottom
                fontWeight="bold"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <CategoryIcon fontSize="large" />8
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
              height: 240,
            }}
          >
            <Grid
              container
              textAlign="center"
              flexDirection="column"
              gap="56px"
            >
              <Typography variant="h4" color="darkgreen">
                Nuestras Obras
              </Typography>

              <Typography
                variant="h4"
                color="text.secondary"
                gutterBottom
                fontWeight="bold"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <ConstructionIcon fontSize="large" />
                {countObras.length > 0 && countObras[0].obras}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
