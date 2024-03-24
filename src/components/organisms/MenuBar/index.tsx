import { colors } from '../../../constants/theme/colors';
import { Box, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/AccountCircle';

export const MenuBar = () => {
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
          sx={{ color: colors.white }}
        >
          Mis reservas
        </Button>
      </Box>
    </Box>
  );
};
