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
import { useState } from "react";
import { useEffect } from "react";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
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

export default function DashboardContacto() {
  document.title = "Dashboard de Contactos";

  const [formularios, setFormularios] = useState([]);
  const [stateChange, setStateChange] = useState(false);

  useEffect(() => {
    async function fetchPresupuesto() {
      const response = await fetch("http://localhost:3000/user/contact/all");
      const data = await response.json();
      setFormularios(data);
      console.log(data);
    }
    fetchPresupuesto();
  }, [stateChange]);

  function deleteFormulario(e, idFormulario) {
    e.preventDefault();
    const newList = formularios.filter(
      (item, index) => item.id !== idFormulario
    );
    setFormularios(newList);
    fetch("http://localhost:3000/user/delete/contact", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idFormulario,
      }),
    }).then((response) => {
      if (response.status == 400) {
        alert("error al recibir el body");
      } else if (response.status == 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Formulario Borrado Correctamente",
        });
        setStateChange(!stateChange);
      }
    });
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="center">Apellidos</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Telefono</StyledTableCell>
              <StyledTableCell align="center">Direccion</StyledTableCell>
              <StyledTableCell align="center">Pais</StyledTableCell>
              <StyledTableCell align="center">Ciudad</StyledTableCell>
              <StyledTableCell align="center">Descripcion</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formularios.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.nombre}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.apellidos}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.telefono}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.direccion}
                </StyledTableCell>
                <StyledTableCell align="center">{row.pais}</StyledTableCell>
                <StyledTableCell align="center">{row.ciudad}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.descripcion}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    color="error"
                    onClick={(e) => deleteFormulario(e, row.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
