import { Box, Container } from '@mui/material';
import { colors } from '../../../constants/theme/colors';
import { Header } from '../../molecules/Header';

export const FormScreenTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Box sx={{ height: '64px' }}>
        <Header />
      </Box>
      <Box sx={{ backgroundColor: colors.gray, pt: 2 }}>
        <Container>
          <Box
            p={2}
            height={'100vh'}
            display={'flex'}
            justifyContent={'center'}
          >
            <Box
              bgcolor={colors.white + 'aa'}
              p={4}
              minWidth={'50%'}
              width="fit-content"
              borderRadius={3}
              boxShadow={2}
            >
              {children}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
