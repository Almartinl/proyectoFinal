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
import { IconButton } from "@mui/material";
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

export default function DashboardPresupuestos() {
  const [presupuestos, setPresupuestos] = useState([]);
  const [stateChange, setStateChange] = useState(false);

  useEffect(() => {
    async function fetchPresupuesto() {
      const response = await fetch(
        "http://localhost:3000/bungalows/getallpresupuesto"
      );
      const data = await response.json();
      setPresupuestos(data);
      console.log(data);
    }
    fetchPresupuesto();
  }, [stateChange]);

  //   function handleDeleteUser(e, id) {
  //     e.preventDefault();
  //     setStateChange(!stateChange);
  //     fetch(`http://localhost:3000/user/delete/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((response) => {
  //       if (response.status == 400) {
  //         alert("error al recibir el body");
  //       } else if (response.status == 200) {
  //         Swal.fire({
  //           position: "center",
  //           icon: "success",
  //           title: "Usuario Borrado Correctamente",
  //         });
  //       } else if (response.status == 409) {
  //         alert("modelo ya registrado");
  //       }
  //     });
  //   }

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Modelo</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {presupuestos.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.nombre}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">
                  <ul>
                    {JSON.parse(row.descripcion).map((modelo, index) => (
                      <li key={index}>{modelo}</li>
                    ))}
                  </ul>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton>
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
