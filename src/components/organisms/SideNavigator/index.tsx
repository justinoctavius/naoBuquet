import React, { cloneElement } from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink, useLocation } from 'react-router-dom';
import { colors } from '../../../constants/theme/colors';
import { routes } from '../../../constants/routes';
import { useAuth } from '../../../context/auth';
import LogoutIcon from '@mui/icons-material/Logout';

const options = [
  {
    label: 'Mis reservas',
    path: routes.myReserves,
    icon: <InboxIcon />,
  },
  {
    label: 'Mis servicios',
    path: '/mis-servicios',
    icon: <MailIcon />,
  },
];

const SideNavigator: React.FC = () => {
  const location = useLocation();

  const { logout } = useAuth();

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
                bgcolor: location.pathname.includes(path)
                  ? colors.gray
                  : 'transparent',
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
