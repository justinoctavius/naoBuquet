import { Box, TextField, Typography } from '@mui/material';
import { colors } from '../../constants/theme/colors';
import { useServices } from './hook';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { FormScreenTemplate } from '../../components/templates/FormScreenTemplate';

export const ServicesPage = () => {
  const { onSearch, services, name, error, loading } = useServices();

  const navigate = useNavigate();

  const onServiceClick = (id: string) => {
    navigate(`/servicios/${id}/reservar`, {
      state: { params: { service: services.find((item) => item.id === id) } },
    });
  };

  return (
    <FormScreenTemplate>
      <Typography variant="h1" fontWeight={'bold'} textAlign="center">
        📅
      </Typography>
      <Typography
        variant="h6"
        color={colors.gray900}
        textAlign="center"
        mt={2}
        mb={4}
      >
        Busca el servicio que necesitas
      </Typography>
      <TextField
        id="filled-search"
        label="Nombre del servicio"
        type="search"
        variant="outlined"
        fullWidth
        onChange={onSearch}
        helperText={
          loading ? 'Cargando... 🔎' : 'Escribe al menos 3 caracteres'
        }
        value={name}
      />
      <Box>
        {services.map((item) => (
          <Box
            key={item.id}
            mt={1}
            borderBottom={2}
            sx={{ borderColor: colors.gray700 }}
            p={1}
            className={styles['service']}
            onClick={() => onServiceClick(item.id)}
          >
            <Typography variant="subtitle1" fontWeight={700}>
              {item?.emoji} {item.name}
            </Typography>
            <Typography variant="caption" color={colors.gray900}>
              {item.description}
            </Typography>
          </Box>
        ))}
        {!!error && !loading && (
          <Box mt={2} textAlign={'center'}>
            <Typography
              textAlign={'center'}
              variant="caption"
              color={colors.danger}
            >
              Ha ocurrido un error, por favor intenta de nuevo mas tarde 😥
            </Typography>
          </Box>
        )}
      </Box>
    </FormScreenTemplate>
  );
};
