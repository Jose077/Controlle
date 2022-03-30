import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/routes';
import { AuthProvider } from './shared/context/AuthProvider';
import { Theme } from './shared/themes/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
