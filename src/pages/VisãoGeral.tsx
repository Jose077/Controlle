import { Box } from '@mui/material';
import React from 'react';
import Header from '../shared/components/Header/Header';

export default function VisaoGeral() {
  return (
    <Box>
      <Box sx={{ margin: -1, bgcolor: 'background.default', height: '100vh' }}>
        <Header />
        Visão Geral
      </Box>
    </Box>
  );
}
