import { BrowserRouter } from 'react-router-dom';
import MainRoute from './Routes/main.route';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AuthProvider } from './context/auth';

const theme = createTheme({});

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainRoute />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
