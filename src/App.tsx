import { BrowserRouter } from 'react-router-dom';
import MainRoute from './Routes/main.route';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainRoute />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
