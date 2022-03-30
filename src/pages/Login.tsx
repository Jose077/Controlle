import { Box, Grid } from '@mui/material';
import React from 'react';
import BoxLogin from '../shared/components/Login/BoxLogin';
import Imagem from '../shared/components/Login/Imagem';
// import Login from '../shared/components/Login/Login';

export default function TelaLogin() {
  return (
    <Grid direction="column" justifyContent="center" alignItems="center">
      <Box
        sx={{
          margin: -1,
          bgcolor: 'background.default',
          height: '100vh',
          display: 'flex',
        }}
      >
        {/* <Login /> */}
        <Box
          sx={{
            width: '50vw',
            bgcolor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <BoxLogin />
        </Box>
        <Box
          sx={{
            width: '50vw',
            bgcolor: '#2754FF',
            display: 'flex',
            alignItems: ' center',
            justifyContent: 'center',
          }}
        >
          <Imagem />
        </Box>
      </Box>
    </Grid>
  );
}
