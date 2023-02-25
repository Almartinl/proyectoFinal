import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import { useEffect } from "react";
import { Grid, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
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

export default function DashboardUsuarios() {
  document.title = "Dashboard Usuario";
  const [users, setUsers] = useState([]);
  const [stateChange, setStateChange] = useState(false);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch("http://localhost:3000/user/users");
      const data = await response.json();
      setUsers(data.slice(1));
      console.log(data);
    }
    fetchCount();
  }, [stateChange]);

  function handleDeleteUser(e, id) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`http://localhost:3000/user/delete/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Usuario Borrado Correctamente",
        });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }

  function activeUser(e, idUser) {
    e.preventDefault();
    setStateChange(!stateChange);
    fetch(`http://localhost:3000/user/${idUser}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activo: "1",
      }),
    }).then((response) => {
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Usuario Activado Correctamente",
        });
      } else if (response.status == 409) {
        alert("usuario ya registrado");
      }
    });
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre de Usuario</StyledTableCell>
              <StyledTableCell align="center">Apellidos</StyledTableCell>
              <StyledTableCell align="center">Direccion</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Telefono</StyledTableCell>
              <StyledTableCell align="center">Activo</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.nombre}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.apellidos}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.direccion}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.telefono}</StyledTableCell>
                <StyledTableCell align="center">{row.activo}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.activo == 0 ? (
                    <Grid container wrap="nowrap">
                      <IconButton color="error" disabled>
                        <DeleteIcon />
                      </IconButton>
                      <Tooltip title="Activar Cuenta">
                        <IconButton
                          onClick={(e) => activeUser(e, row.id)}
                          color="success"
                        >
                          <CheckCircleIcon />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  ) : row.id == 1 ? (
                    <Grid container wrap="nowrap">
                      <IconButton color="error" disabled>
                        <DeleteIcon />
                      </IconButton>
                      <IconButton disabled>
                        <CheckCircleIcon />
                      </IconButton>
                    </Grid>
                  ) : (
                    <Grid container wrap="nowrap">
                      <Tooltip title="Borrar Cuenta">
                        <IconButton
                          onClick={(e) => handleDeleteUser(e, row.id)}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      <IconButton disabled>
                        <CheckCircleIcon />
                      </IconButton>
                    </Grid>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
