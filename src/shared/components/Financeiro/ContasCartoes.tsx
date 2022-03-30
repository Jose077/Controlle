import { ArrowDropDownTwoTone } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ContasCoartoes() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Link style={{ textDecoration: 'none' }} to="/#">
        <Typography
          sx={{ fontSize: '14px', color: '#5076ff', padding: '10px' }}
        >
          Contas
        </Typography>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/#">
        <Typography
          sx={{ fontSize: '14px', color: '#5076ff', padding: '10px' }}
        >
          Cartões
        </Typography>
      </Link>
      <IconButton sx={{ height: '40px' }} aria-label="ArrowDown">
        <ArrowDropDownTwoTone sx={{ fontSize: '23px' }} />
      </IconButton>
    </Box>
  );
}
