import { useNavigate, useParams } from 'react-router-dom';
import { FormScreenTemplate } from '../../components/templates/FormScreenTemplate';
import { useReserve } from './hook';
import { Calendar } from '../../components/molecules/Calendar';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { EMAIL_REGEX } from '../../constants/regex';

export const ReservePage = () => {
  const { id } = useParams();
  const { service } = useReserve({ id: id || '' });

  const navigate = useNavigate();

  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reserveId: '',
  });
  const [helperText, setHelperText] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reserveId: '',
  });

  const isFormValid = useMemo(
    () =>
      fields.firstName && fields.lastName && fields.email && fields.reserveId,
    [fields]
  );

  const validateEmail = () => {
    if (!fields.email.match(EMAIL_REGEX)) {
      setHelperText({ ...helperText, email: 'Correo inválido' });
    } else {
      setHelperText({ ...helperText, email: '' });
    }
  };

  const validateFields = (fieldName: string) => {
    const field = fields[fieldName];

    if (!field) {
      setHelperText({ ...helperText, [fieldName]: 'Campo requerido' });
    }

    if (fieldName === 'email') {
      validateEmail();
    }
  };

  const handleOnFieldChange = (field: string, value: string | null) => {
    setFields({ ...fields, [field]: value });
    setHelperText({ ...helperText, [field]: '' });
  };

  const handleOnReserve = () => {
    navigate('/validar-email', {
      state: { navigateTo: '/reserva-confirmada', fields, email: fields.email },
    });
  };

  return (
    <FormScreenTemplate>
      <Typography variant="h4" mb={2}>
        {service?.emoji} {service?.name}
      </Typography>
      <Box display={'flex'} gap={4}>
        <Box>
          <Calendar
            schedule={service?.schedules || []}
            onSelectReserve={(id) => handleOnFieldChange('reserveId', id)}
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
          <Box display={'flex'} flexDirection={'column'} gap={2}>
            <Box display={'flex'} gap={2}>
              <TextField
                id="filled-name"
                label="Nombres"
                type="email"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  handleOnFieldChange('firstName', e.target.value)
                }
                value={fields.firstName}
                onBlur={() => validateFields('firstName')}
                helperText={helperText.firstName}
                error={!!helperText.firstName}
                required
              />
              <TextField
                id="filled-lastname"
                label="Apellidos"
                type="email"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                  handleOnFieldChange('lastName', e.target.value)
                }
                value={fields.lastName}
                onBlur={() => validateFields('lastName')}
                helperText={helperText.lastName}
                error={!!helperText.lastName}
                required
              />
            </Box>
            <TextField
              id="filled-email"
              label="Correo electronico"
              type="email"
              variant="outlined"
              fullWidth
              onChange={(e) => handleOnFieldChange('email', e.target.value)}
              value={fields.email}
              required
              helperText={helperText.email}
              error={!!helperText.email}
              onBlur={() => validateFields('email')}
            />
          </Box>
          <Button
            variant="contained"
            fullWidth
            disabled={!isFormValid}
            onClick={handleOnReserve}
          >
            Reservar
          </Button>
        </Box>
      </Box>
    </FormScreenTemplate>
  );
};
