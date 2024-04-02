import React, { cloneElement } from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink, useLocation } from 'react-router-dom';
import { colors } from '../../../constants/theme/colors';
import { routes } from '../../../constants/routes';
import { useAuth } from '../../../context/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import NotificationActiveIcon from '@mui/icons-material/NotificationsActive';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EqualizerIcon from '@mui/icons-material/Equalizer';

const options = [
  {
    label: 'Mis reservas',
    path: routes.myReserves,
    icon: <CalendarTodayIcon />,
  },
  {
    label: 'Mis servicios',
    path: `${routes.dashboard}/mis-servicios`,
    icon: <MailIcon />,
  },
  {
    label: 'Notificaciones',
    path: `${routes.dashboard}/notificaciones`,
    icon: <NotificationActiveIcon />,
  },
  {
    label: 'Metricas y analitica',
    path: `${routes.dashboard}/metricas-y-analitica`,
    icon: <EqualizerIcon />,
  },
  {
    label: 'Configuración',
    path: `${routes.dashboard}/configuracion`,
    icon: <MiscellaneousServicesIcon />,
  },
];

const SideNavigator: React.FC = () => {
  const location = useLocation();

  const { logout } = useAuth();

  console.log(location.pathname);

  return (
    <Box>
      <List>
        {options.map(({ label, icon, path }, index) => (
          <NavLink
            to={path}
            style={{ textDecoration: 'none', color: 'inherit' }}
            key={index}
          >
            <ListItem
              sx={{
                bgcolor:
                  location.pathname === path ? colors.gray : 'transparent',
              }}
            >
              <ListItemIcon>{cloneElement(icon)}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Box
        position={'absolute'}
        bottom={2}
        display={'flex'}
        padding={1}
        width={'100%'}
        justifyContent={'center'}
      >
        <Button variant="text" color="error" onClick={logout}>
          <LogoutIcon fontSize={'small'} sx={{ mr: 1 }} /> Cerrar sesión
        </Button>
      </Box>
    </Box>
  );
};

export default SideNavigator;
