import { Box, Grid } from '@mui/material';
import React from 'react';

import Filtrar from './Filtrar';
import MenuAddReceita from './MenuAddReceita';

export default function FinanceiroComponent() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          width: '890px',
          height: '416px',
          bgcolor: 'primary.main',
          boxShadow: '0px 4px 4px #DDE1E6',
          borderRadius: '2px',
        }}
      >
        <MenuAddReceita />
        <Filtrar />
      </Box>
    </Grid>
  );
}
