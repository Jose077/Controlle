import { ArrowBackIosTwoTone, ArrowForwardIos } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';

export default function Paginacao() {
  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton aria-label="ArrowLeft">
            <ArrowBackIosTwoTone sx={{ fontSize: '18px' }} />
          </IconButton>
          <Typography
            sx={{
              fontSize: '18px',
              fontFamily: 'Arial',
              color: '#4A5275',
              fontWeight: 500,
              padding: '0 10px',
            }}
          >
            março de 2022
          </Typography>
          <IconButton aria-label="ArrowLeft">
            <ArrowForwardIos sx={{ fontSize: '18px' }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
