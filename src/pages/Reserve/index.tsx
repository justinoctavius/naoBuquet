import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FormScreenTemplate } from '../../components/templates/FormScreenTemplate';
import { Calendar } from '../../components/molecules/Calendar';
import { Box, Button, TextField, Typography, capitalize } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { EMAIL_REGEX } from '../../constants/regex';
import { Service } from '../Services/types';
import { useFindSchedulesByServiceId } from '../../hooks/queries/services/findSchedulesByServiceId';
import { useLogin } from '../../hooks/auth/useLogin';
import { useReserveSchedule } from '../../hooks/mutations/services/useReserveSchedule';
import { colors } from '../../constants/theme/colors';
import { routes } from '../../constants/routes';

interface Fields {
  firstName: string;
  lastName: string;
  email: string;
  reserveId: string;
}

export const ReservePage = () => {
  const { id } = useParams();

  const { isAuthenticated } = useLogin();

  const location = useLocation();
  const { params } = (location.state || {}) as {
    params?: { fields?: Fields; service: Service };
  };

  const { reserveSchedule } = useReserveSchedule();

  const { data } = useFindSchedulesByServiceId(id || '', {
    refetchInterval: 10000,
  });

  const navigate = useNavigate();

  const [fields, setFields] = useState<Fields>({
    firstName: params?.fields?.firstName || '',
    lastName: params?.fields?.lastName || '',
    email: params?.fields?.email || '',
    reserveId: params?.fields?.reserveId || '',
  });
  const [helperText, setHelperText] = useState<Fields>({
    firstName: '',
    lastName: '',
    email: '',
    reserveId: '',
  });

  const isFormValid = useMemo(
    () =>
      fields.firstName &&
      fields.lastName &&
      fields.email &&
      fields.reserveId &&
      fields.email.match(EMAIL_REGEX),
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

  const handleReserve = async (field: Fields) => {
    if (!id) {
      return;
    }

    await reserveSchedule({
      serviceId: id,
      scheduleId: field.reserveId,
      ...field,
    });

    navigate('/reserva-confirmada');
  };

  const handleOnReserve = () => {
    if (!isAuthenticated) {
      navigate(routes.verifyEmail, {
        state: {
          navigateTo: `/servicios/${id}/reservar`,
          params: { fields, service: params?.service },
          email: fields.email,
        },
      });
      return;
    }

    handleReserve(fields);
  };

  useEffect(() => {
    if (params?.fields) {
      handleReserve(params.fields);
    }
  }, [params]);

  return (
    <FormScreenTemplate>
      <Box display={'flex'} mb={2} alignItems={'center'} gap={2}>
        <Typography variant="h4">
          {params?.service?.emoji || ''}{' '}
          {capitalize(params?.service?.name || '')}
        </Typography>
        {data?.length === 0 && (
          <Box
            display={'flex'}
            alignItems={'center'}
            padding={2}
            pt={1}
            pb={1}
            borderRadius={4}
            bgcolor={colors.danger}
          >
            <Typography color={colors.white} variant="body2">
              No hay horarios disponibles
            </Typography>
          </Box>
        )}
      </Box>
      <Box display={'flex'} gap={4}>
        <Box>
          <Calendar
            schedule={data || []}
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
