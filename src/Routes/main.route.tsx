import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { LoginPage } from '../pages/Login';
import { RegisterPage } from '../pages/Register';
import { NotFoundPage } from '../pages/NotFound';
import { Box, Button } from '@mui/material';
import { colors } from '../constants/theme/colors';
import LoginIcon from '@mui/icons-material/AccountCircle';

function MainRoute() {
  return (
    <>
      <Box
        bgcolor={colors.gray900}
        p={1}
        display={'flex'}
        justifyContent={'right'}
      >
        <Box display={'flex'} alignItems={'center'}>
          <LoginIcon sx={{ color: colors.white }} fontSize={'small'} />
          <Button
            variant="text"
            color="info"
            size="small"
            sx={{ color: colors.white }}
          >
            Mis reservas
          </Button>
        </Box>
      </Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default MainRoute;
