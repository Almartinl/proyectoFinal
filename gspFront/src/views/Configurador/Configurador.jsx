import {
  Container,
  Grid,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useState } from "react";

export default function Configurador() {
  const [disposicion, setDisposicion] = useState("");

  const handleChange = (event) => {
    setDisposicion(event.target.value);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "24px",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          md={12}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            color="green"
            sx={{ my: "48px", fontWeight: "bold" }}
          >
            Crea tu Bungalow en un Click
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            color="green"
            sx={{ my: "48px", fontWeight: "bold" }}
          >
            Crea tu Bungalow en un Click
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Disposicion</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={disposicion}
                label="Disposicion"
                onChange={handleChange}
              >
                <MenuItem value={"../../box1.png"}>1 Bungalow</MenuItem>
                <MenuItem value={""}>2 Bungalows</MenuItem>
                <MenuItem value={"../../box3.png"}>3 Bungalows</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={disposicion}
            alt="foto"
            style={{ maxWidth: "100%", maxHeight: "50%", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
