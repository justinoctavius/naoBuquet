import { BrowserRouter } from 'react-router-dom';
import MainRoute from './Routes/main.route';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AuthProvider } from './context/auth';
import { QueryClient, QueryClientProvider } from 'react-query';

const theme = createTheme({});

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainRoute />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
