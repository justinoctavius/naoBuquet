import { useParams } from 'react-router-dom';
import { FormScreenTemplate } from '../../components/templates/FormScreenTemplate';
import { useReserve } from './hook';
import { Calendar } from '../../components/molecules/Calendar';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

export const ReservePage = () => {
  const { id } = useParams();
  const { service } = useReserve({ id: id || '' });

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [reserveId, setReserveId] = useState<string | null>('');

  const isFormValid = useMemo(
    () => firstName && lastName && email && reserveId,
    [firstName, lastName, email, reserveId]
  );

  return (
    <FormScreenTemplate>
      <Box display={'flex'} gap={4}>
        <Box>
          <Calendar
            schedule={service?.schedules || []}
            onSelectReserve={(id) => setReserveId(id)}
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
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <TextField
                id="filled-lastname"
                label="Apellidos"
                type="email"
                variant="outlined"
                fullWidth
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </Box>
            <TextField
              id="filled-email"
              label="Correo electronico"
              type="email"
              variant="outlined"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Box>
          <Button variant="contained" fullWidth disabled={!isFormValid}>
            Reservar
          </Button>
        </Box>
      </Box>
    </FormScreenTemplate>
  );
};
