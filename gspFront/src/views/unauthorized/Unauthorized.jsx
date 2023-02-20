import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  document.title = "Unauthorized";

  const navigate = useNavigate();

  const goBack = () => navigate("/");

  return (
    <Grid container spacing={2} flexDirection="column" alignItems="center">
      <Grid item xs={12}>
        <img src="../../public/401.webp" alt="" />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={goBack} variant="contained" size="large" color="error">
          Volver al Inicio
        </Button>
      </Grid>
    </Grid>
  );
}
