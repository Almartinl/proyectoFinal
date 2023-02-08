import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AppBarMenu from "./AppBarMenu/AppBarMenu";

export default function Header() {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          sx={{
            display: { xs: "none", md: "flex" },
            position: { xs: "absolute", md: "relative" },
          }}
        >
          <img src="../../logo.png" alt="foto" />
        </Grid>
        <Grid
          sx={{
            display: { md: "none" },
            position: { xs: "absolute", md: "relative" },
          }}
        >
          <img src="../../logo.png" width="200px" alt="foto" />
        </Grid>
      </Grid>
      <AppBarMenu />
    </>
  );
}
