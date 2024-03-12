import { Box, Button, Container, Typography } from '@mui/material';
import { Props } from './types';
import styles from './styles.module.css';
import { colors } from '../../../constants/theme/colors';

export const ScreenTemplate = ({ children }: Props) => {
  return (
    <Container maxWidth="xl">
      <Box className={styles['header']}>
        <Box
          width={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          flexDirection={'column'}
        >
          <Box
            display={'flex'}
            position={'sticky'}
            top={2}
            p={2}
            width={'80%'}
            className={styles['navbar']}
            borderRadius={3}
            justifyContent={'space-between'}
            alignItems={'center'}
            boxShadow={2}
            bgcolor={colors.white + 'dd'}
          >
            <Typography variant="body2" fontWeight={700}>
              NaoBuquet
            </Typography>

            <Button variant="contained" color="primary" size="small">
              ¡Reserva ahora!
            </Button>
          </Box>
          <Box textAlign={'center'} p={4}>
            <Typography variant="h4" fontWeight={600} color={colors.white}>
              ¡Gestiona tu tiempo <br /> con elegancia!
            </Typography>
            <Typography mt={2} variant="body2" color={colors.gray}>
              Descubre la manera más sencilla y eficiente de reservar tus citas.
              <br />
              permitiéndote organizar tus compromisos con solo unos clics.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        m={2}
        p={2}
        bgcolor={colors.white}
        mt={-8}
        borderRadius={3}
        boxShadow={2}
        className={styles['content']}
        minHeight={'50vh'}
      >
        {children}
      </Box>
    </Container>
  );
};
