import { Button, Container, Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

export const UnderConstruction = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', my: 5 }}>
      <ConstructionIcon sx={{ fontSize: 60, color: 'orange' }} />
      <Typography variant="h4" sx={{ mt: 2 }}>
        ¡Estamos trabajando en ello!
      </Typography>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Esta funcionalidad aún está en construcción. ¡Vuelve pronto para
        explorar todas las novedades que estamos preparando para ti!
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Volver al inicio
      </Button>
    </Container>
  );
};
