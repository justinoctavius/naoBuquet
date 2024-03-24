import React, { cloneElement } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink, useLocation } from 'react-router-dom';
import { colors } from '../../../constants/theme/colors';
import { routes } from '../../../constants/routes';

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

  return (
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
  );
};

export default SideNavigator;
