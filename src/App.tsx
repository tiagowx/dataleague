import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Pages from './pages';
import darkTheme from './themes';

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100%',
        }}>
          <Header />
          <Pages />
          <Footer />
        </Box>
      </ThemeProvider>

  );
}

export default App;
