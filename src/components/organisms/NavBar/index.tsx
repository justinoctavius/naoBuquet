import { Box, Button, Typography } from '@mui/material';
import { colors } from '../../../constants/theme/colors';
import styles from './styles.module.css';

export const NavBar = () => {
  return (
    <Box
      display={'flex'}
      zIndex={1}
      top={16}
      p={2}
      width={'80%'}
      maxWidth={750}
      className={styles['navbar']}
      borderRadius={3}
      justifyContent={'space-between'}
      alignItems={'center'}
      boxShadow={1}
      bgcolor={colors.white + 'dd'}
    >
      <Typography variant="body2" fontWeight={700}>
        NaoBuquet
      </Typography>

      <Button variant="contained" color="primary" size="small">
        ¡Reserva ahora!
      </Button>
    </Box>
  );
};
