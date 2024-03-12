import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Container maxWidth="md">
      <Box component="footer" width={'100%'} p={2} mt={8}>
        <Box display="flex" gap={4}>
          <Box>
            <Typography variant="subtitle2" fontWeight={700}>
              Contacto
            </Typography>
            <Box display="flex">
              <Typography variant="caption" textAlign={'center'}>
                <a href="tel:+18094567890">+1 809 456 7890</a>
              </Typography>
            </Box>
            <Box display="flex">
              <Typography variant="caption" textAlign={'center'}>
                <a href="mailto:info@nowbooklt.com">info@nowbooklt.com</a>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2" fontWeight={700}>
              Sobre nosotros
            </Typography>
            <Box display="flex">
              <Typography variant="caption" textAlign={'center'}>
                <Link to="/about">Acerca de NaoBuquet</Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography variant="h6" textAlign={'center'} mt={8}>
          NaoBuquet
        </Typography>
        <Box display="flex" justifyContent={'center'}>
          <Typography variant="caption" textAlign={'center'}>
            All rights reserved. Copyright © 2024
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
