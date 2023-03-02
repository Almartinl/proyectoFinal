import * as React from "react";
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
          <img src="../../logonuevo.png" alt="foto" />
        </Grid>
        <Grid
          sx={{
            display: { md: "none" },
            position: { xs: "absolute", md: "relative" },
          }}
        >
          <img src="../../logonuevo.png" width="200px" alt="foto" />
        </Grid>
      </Grid>
      <AppBarMenu />
    </>
  );
}
