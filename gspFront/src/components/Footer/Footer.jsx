import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, IconButton, SvgIcon } from "@mui/material";

export default function Footer() {
  function Copyright(props) {
    return (
      <Typography variant="body2" color="white" align="center" {...props}>
        {"Copyright © "}
        <Link color="inherit" href="#">
          Global Solutions Prefabriquee
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <Grid bgcolor="darkgreen">
      <Container
        maxWidth="xl"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 10,
          py: 5,
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Copyright />
          <Grid>
            <IconButton href="https://www.facebook.com/Global-Solutions-Pr%C3%A9fabriqu%C3%A9es-115355516956606">
              <FacebookOutlinedIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/company/global-solutions-pr%C3%A9fabriqu%C3%A9es/">
              <LinkedInIcon sx={{ color: "white" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
