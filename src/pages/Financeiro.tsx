import { Box, Grid } from '@mui/material';
import React from 'react';
import FinanceiroComponent from '../shared/components/Financeiro/Financeiro';
import Header from '../shared/components/Header/Header';

export default function Financeiro() {
  return (
    <Grid direction="column" justifyContent="center" alignItems="center">
      <Box
        sx={{
          margin: -1,
          bgcolor: 'background.default',
          height: '100vh',
        }}
      >
        <Header />
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '34px' }}>
          <FinanceiroComponent />
        </Box>
      </Box>
    </Grid>
  );
}
