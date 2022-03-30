/* eslint-disable react/destructuring-assignment */

import { Box, Typography } from '@mui/material';
import React from 'react';

interface InputProps {
  // eslint-disable-next-line react/no-unused-prop-types
  onClick: () => void;
  // eslint-disable-next-line react/no-unused-prop-types
  active: string;
}

export default function MenuVisaoGeral(props: InputProps) {
  return (
    <Box
      className={`activemenuheader${props.active ? 'active' : ''}`}
      onClick={props.onClick}
      sx={{
        display: 'flex',
        cursor: 'pointer',
        width: '111px',
        height: '53px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography color="primary" variant="body2">
        Visão Geral
      </Typography>
    </Box>
  );
}
