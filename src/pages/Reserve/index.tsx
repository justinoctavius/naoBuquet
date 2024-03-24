import { useParams } from 'react-router-dom';
import { FormScreenTemplate } from '../../components/templates/FormScreenTemplate';
import { useReserve } from './hook';
import { Calendar } from '../../components/molecules/Calendar';
import { Box, Button, TextField, Typography } from '@mui/material';

export const ReservePage = () => {
  const { id } = useParams();
  const { service } = useReserve({ id: id || '' });

  console.log('service', service);

  return (
    <FormScreenTemplate>
      <Box display={'flex'} gap={4}>
        <Box>
          <Calendar
            schedule={service?.schedules || []}
            onSelectReserve={(id) => console.log(id)}
          />
        </Box>
        <Box
          gap={2}
          display={'flex'}
          flexDirection={'column'}
          maxWidth={'350px'}
          justifyContent={'center'}
        >
          <Typography variant="h6">Ingresa tus datos: </Typography>
          <Box display={'flex'} flexDirection={'column'} gap={1}>
            <Box display={'flex'} gap={1}>
              <TextField
                id="filled-name"
                label="Nombres"
                type="email"
                variant="outlined"
                fullWidth
                onChange={() => {}}
                value={name}
              />
              <TextField
                id="filled-lastname"
                label="Apellidos"
                type="email"
                variant="outlined"
                fullWidth
                onChange={() => {}}
                value={name}
              />
            </Box>
            <TextField
              id="filled-email"
              label="Correo electronico"
              type="email"
              variant="outlined"
              fullWidth
              onChange={() => {}}
              value={name}
            />
          </Box>
          <Button variant="contained" fullWidth>
            Reservar
          </Button>
        </Box>
      </Box>
    </FormScreenTemplate>
  );
};
