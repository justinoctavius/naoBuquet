import React, { ReactNode } from 'react';
import { CssBaseline, Box, Toolbar, Drawer } from '@mui/material';
import SideNavigator from '../../organisms/SideNavigator';
import { Header } from '../../molecules/Header';

interface LayoutProps {
  children: ReactNode;
}

const drawerWidth = 240;

const DashboardScreenTemplate: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
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
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2, pt: 4 }}
      >
        <Toolbar />{' '}
        {/* Añade espacio para el contenido debajo del encabezado */}
        {children}
      </Box>
    </Box>
  );
};

export default DashboardScreenTemplate;
