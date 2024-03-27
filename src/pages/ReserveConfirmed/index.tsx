import { FormScreenTemplate } from '../../components/templates/FormScreenTemplate';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../constants/routes';

export const ReserveConfirmed = () => {
  const navigate = useNavigate();

  const handleOnContinue = () => {
    navigate(routes.myReserves);
  };

  return (
    <FormScreenTemplate>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={2}
        alignItems={'center'}
      >
        <Typography variant="h1" fontWeight={'bold'}>
          🎉
        </Typography>
        <Typography variant="subtitle1" fontWeight={'bold'}>
          ¡Su reserva se ha creado correctamente!
        </Typography>
        <Button variant="contained" onClick={handleOnContinue}>
          Ver mis reservas
        </Button>
      </Box>
    </FormScreenTemplate>
  );
};
