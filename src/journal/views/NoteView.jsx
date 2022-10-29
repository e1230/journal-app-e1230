import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate"
      container
      direction={"row"}
      sx={{ mb: 1 }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          3 de Octubre de 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontsize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type={"text"}
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="titulo"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type={"text"}
          variant="filled"
          fullWidth
          multiline
          placeholder="Resumen hoy"
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
