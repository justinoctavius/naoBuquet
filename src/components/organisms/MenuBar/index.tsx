import { colors } from '../../../constants/theme/colors';
import { Box, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export const MenuBar = () => {
  const navigate = useNavigate();

  const handleReserves = () => {
    navigate('/mis-reservas');
  };

  return (
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
          onClick={handleReserves}
          sx={{ color: colors.white }}
        >
          Mis reservas
        </Button>
      </Box>
    </Box>
  );
};
