/* eslint-disable react/destructuring-assignment */
import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

interface InputProps {
  // eslint-disable-next-line react/no-unused-prop-types
  onClick: () => void;
  // eslint-disable-next-line react/no-unused-prop-types
  active: string;
}

export default function MenuFinanceiro(props: InputProps) {
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
      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        color="primary"
        variant="body2"
      >
        Financeiro
        <KeyboardArrowDown color="primary" />
      </Typography>
    </Box>
  );
}
