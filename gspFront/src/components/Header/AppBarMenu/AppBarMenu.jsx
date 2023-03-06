import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import { Grid } from "@mui/material";
import { deepOrange, yellow } from "@mui/material/colors";

const pages = [
  { nombre: "Inicio", ruta: "/" },
  { nombre: "Productos", ruta: "/productos" },
  { nombre: "Configurador", ruta: "/configurador" },
  { nombre: "Nuestros Proyectos", ruta: "/proyectos" },
  { nombre: "Sobre Nosotros", ruta: "/nosotros" },
  { nombre: "Contacto", ruta: "/contacto" },
];
const settings = [{ nombre: "Perfil", ruta: "/account" }];
const settingsAdmin = [{ nombre: "Dashboard", ruta: "/dashboard" }];

export default function AppBarMenu() {
  const { authorization, dataToken, logout } = useAuthContext();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleLogout() {
    logout();
    setAnchorElUser(null);
  }

  return (
    <AppBar position="static" sx={{ background: "none", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Link
                  key={index}
                  to={page.ruta}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ ":hover": { bgcolor: "darkgreen", color: "white" } }}
                  >
                    <Typography textAlign="center" color="darkgreen">
                      {page.nombre}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
              {!authorization && (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <MenuItem key={7} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="green">
                      Login / Register
                    </Typography>
                  </MenuItem>
                </Link>
              )}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page, index) => (
              <Link
                key={index}
                to={page.ruta}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "darkgreen",
                    display: "block",
                    ":hover": { bgcolor: "darkgreen", color: "white" },
                  }}
                >
                  <Typography fontWeight="bold">{page.nombre}</Typography>
                </Button>
              </Link>
            ))}
          </Box>

          {authorization ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Abrir Opciones">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={dataToken.email.toUpperCase()}
                    src={"/"}
                    sx={{ bgcolor: "#d3b72a" }}
                  />
                </IconButton>
              </Tooltip>
              {dataToken.role == 1 ? (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  sx={{ mt: "45px" }}
                >
                  {settingsAdmin.map((page, index) => (
                    <Link
                      key={index}
                      to={page.ruta}
                      style={{ textDecoration: "none" }}
                    >
                      <MenuItem key={index} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" color="text.primary">
                          {page.nombre}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))}
                  <MenuItem key="Logout" onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              ) : (
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((page, index) => (
                    <Link
                      key={index}
                      to={page.ruta}
                      style={{ textDecoration: "none" }}
                    >
                      <MenuItem key={index} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" color="text.primary">
                          {page.nombre}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))}
                  <MenuItem key="Logout" onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              )}
            </Box>
          ) : (
            <Grid sx={{ display: { xs: "none", md: "inline" } }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  key={7}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: "block",
                    border: 1,
                    color: "darkgreen",
                    fontWeight: "bold",
                  }}
                >
                  Login / Register
                </Button>
              </Link>
            </Grid>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
