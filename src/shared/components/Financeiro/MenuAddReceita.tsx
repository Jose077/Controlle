import { Box, Typography } from '@mui/material';
import React from 'react';
import ButtonAdd from './ButtonAdd';
import ContasCoartoes from './ContasCartoes';
import Paginacao from './Paginacao';

export default function MenuAddReceita() {
  return (
    <Box
      sx={{
        height: '73px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginLeft: '-95px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '0px 30px' }}>
        <Typography sx={{ fontSize: '17px', fontFamily: 'Arial' }}>
          Lançamentos
        </Typography>
        <ButtonAdd />
      </Box>

      <Paginacao />
      <ContasCoartoes />
    </Box>
  );
}
