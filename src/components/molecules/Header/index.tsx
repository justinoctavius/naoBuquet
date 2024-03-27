import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/auth';
import PerfilIcon from '@mui/icons-material/AccountCircle';
import { routes } from '../../../constants/routes';

export const Header = () => {
  const { user } = useAuth();

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Box
          display={'flex'}
          alignItems={'center'}
          width="100%"
          justifyContent={'space-between'}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" fontWeight={'bold'}>
              NaoBuquet
            </Typography>
          </Link>
          <Link
            to={routes.myReserves}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Typography
              variant="caption"
              ml={2}
              display="flex"
              justifyContent={'center'}
              gap={1}
            >
              <PerfilIcon fontSize={'small'} /> {user?.email}
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
