import { Box, Container, Typography } from '@mui/material';
import { Props } from './types';
import styles from './styles.module.css';
import { colors } from '../../../constants/theme/colors';
import { NavBar } from '../../organisms/NavBar';

export const ScreenTemplate = ({
  children,
  footer,
  title,
  description,
}: Props) => {
  return (
    <Box bgcolor={'#eee'}>
      <Box className={styles['background']} />
      <Box className={styles['navbar']}>
        <NavBar />
      </Box>
      <Box className={styles['header']}>
        <Box
          position={'relative'}
          width={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
          flexDirection={'column'}
        >
          <Box textAlign={'center'} p={4}>
            <Typography variant="h4" fontWeight={600} color={colors.white}>
              {title}
            </Typography>
            <Typography mt={2} variant="body2" color={colors.gray}>
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Container maxWidth="md">
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
      <Container maxWidth="md">{footer}</Container>
    </Box>
  );
};
