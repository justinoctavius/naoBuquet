import { Box, Typography } from '@mui/material';

export const NotFoundPage = () => {
  return (
    <Box
      height={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      mt={2}
      p={2}
    >
      <Typography variant="h2">404 - Pagina no encontrada 😢</Typography>
    </Box>
  );
};
