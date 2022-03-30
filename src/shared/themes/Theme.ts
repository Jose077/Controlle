import { createTheme } from '@mui/material';

export const Theme = createTheme({
  palette: {
    background: {
      default: '#EEF1F5',
      paper: '#5076FF',
    },
    primary: {
      main: '#FFFFFF',
      dark: '#545454',
      light: '#DDDDDD',
      contrastText: '#999999',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
    },
  },
  components: {
    MuiTextField: {},
  },
});
