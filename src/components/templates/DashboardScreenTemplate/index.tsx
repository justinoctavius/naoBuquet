import React, { ReactNode } from 'react';
import {
  CssBaseline,
  Box,
  Toolbar,
  AppBar,
  Drawer,
  Typography,
} from '@mui/material';
// import Header from './Header';
import SideNavigator from '../../organisms/SideNavigator';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const drawerWidth = 240;

const DashboardScreenTemplate: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" fontWeight={'bold'}>
              NaoBuquet
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <SideNavigator />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />{' '}
        {/* Añade espacio para el contenido debajo del encabezado */}
        {children}
      </Box>
    </Box>
  );
};

export default DashboardScreenTemplate;
