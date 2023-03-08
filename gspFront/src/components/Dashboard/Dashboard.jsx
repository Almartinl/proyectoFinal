import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import TableViewIcon from "@mui/icons-material/TableView";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Button } from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [nombrePanel, setNombrePanel] = useState("Panel");
  const navigate = useNavigate();
  function Linkto(ruta, nombre) {
    navigate(ruta);
    setNombrePanel(nombre);
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
              backgroundColor: "#07004e",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {nombrePanel}
            </Typography>
            <img src="../../../public/logonuevo.png" height="60px" />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: [1],
            }}
          >
            <Typography variant="h5" textAlign="center" color="darkgreen">
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          {!open ? (
            <>
              <Button
                color="primary"
                sx={{
                  py: "16px",
                  color: "darkgreen",
                  ":hover": { bgcolor: "darkgreen", color: "white" },
                }}
                onClick={() => {
                  Linkto("/dashboard", "Panel");
                }}
              >
                <DashboardIcon />
              </Button>
              <Button
                color="primary"
                sx={{
                  py: "16px",
                  color: "darkgreen",
                  ":hover": { bgcolor: "darkgreen", color: "white" },
                }}
                onClick={() => {
                  Linkto("/dashboard/usuarios", "Usuarios");
                }}
              >
                <PeopleIcon />
              </Button>
              <Button
                color="primary"
                sx={{
                  py: "16px",
                  color: "darkgreen",
                  ":hover": { bgcolor: "darkgreen", color: "white" },
                }}
                onClick={() => {
                  Linkto("/dashboard/presupuestos", "Presupuestos");
                }}
              >
                <TableViewIcon />
              </Button>
              <Button
                color="primary"
                sx={{
                  py: "16px",
                  color: "darkgreen",
                  ":hover": { bgcolor: "darkgreen", color: "white" },
                }}
                onClick={() => {
                  Linkto("/dashboard/contacto", "Formulario");
                }}
              >
                <ReceiptLongIcon />
              </Button>

              <Button
                color="error"
                sx={{
                  py: "16px",
                  ":hover": { bgcolor: "#d32f2f", color: "white" },
                }}
                onClick={() => {
                  Linkto("/", "Panel");
                }}
              >
                <ExitToAppIcon />
              </Button>
            </>
          ) : (
            <>
              <Button
                color="primary"
                size="large"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "20%",
                  py: "16px",
                  color: "darkgreen",
                  ":hover": { bgcolor: "darkgreen", color: "white" },
                }}
                onClick={() => {
                  Linkto("/dashboard", "Panel");
                }}
              >
                <DashboardIcon />
                Panel
              </Button>

              <Button
                color="primary"
                size="large"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "20%",
                  py: "16px",
                  color: "darkgreen",
                  ":hover": { bgcolor: "darkgreen", color: "white" },
                }}
                onClick={() => {
                  Linkto("/dashboard/usuarios", "Usuarios");
                }}
              >
                <PeopleIcon />
                Usuarios
              </Button>
              <Button
                color="primary"
                size="large"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "20%",
                  py: "16px",
                  color: "darkgreen",
                  ":hover": { bgcolor: "darkgreen", color: "white" },
                }}
                onClick={() => {
                  Linkto("/dashboard/presupuestos", "Presupuestos");
                }}
              >
                <TableViewIcon />
                Presupuestos
              </Button>
              <Button
                color="success"
                size="large"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "20%",
                  py: "16px",
                  color: "darkgreen",
                  ":hover": { bgcolor: "darkgreen", color: "white" },
                }}
                onClick={() => {
                  Linkto("/dashboard/contacto", "Formularios");
                }}
              >
                <ReceiptLongIcon />
                Formularios
              </Button>

              <Button
                color="error"
                size="large"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "20%",
                  py: "16px",
                  ":hover": { bgcolor: "#d32f2f", color: "white" },
                }}
                onClick={() => {
                  Linkto("/", "Panel");
                }}
              >
                <ExitToAppIcon />
                Salir
              </Button>
            </>
          )}
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
