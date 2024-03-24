import { Box, TextField, Typography } from '@mui/material';
import { colors } from '../../constants/theme/colors';
import { useServices } from './hook';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { FormScreenTemplate } from '../../components/templates/FormScreenTemplate';

export const ServicesPage = () => {
  const { onSearch, services, name } = useServices();

  const navigate = useNavigate();

  const onServiceClick = (id: string) => {
    navigate(`/servicios/${id}/reservar`);
  };

  return (
    <FormScreenTemplate>
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
              {item.name}
            </Typography>
            <Typography variant="caption" color={colors.gray900}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </FormScreenTemplate>
  );
};
