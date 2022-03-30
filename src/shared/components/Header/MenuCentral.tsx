/* eslint-disable no-self-compare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ActiveMenu.css';
import MenuFinanceiro from './MenuFinanceiro';
import MenuVisaoGeral from './MenuVisaoGeral';

type activeTypeChat = {
  menuId: number;
  title: string;
};

export default function MenuCentral() {
  const [chatlist] = useState([
    {
      menuId: 1,
      title: 'Visão Geral',
    },
    {
      menuId: 2,
      title: 'Financeiro',
    },
  ]);
  const navigate = useNavigate();
  const [active, setActive] = useState<activeTypeChat>();

  function handleNavigateFinanceiro() {
    navigate('/financeiro');
  }
  function handleNavigateVg() {
    navigate('/visaogeral');
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <MenuVisaoGeral
          onClick={handleNavigateVg}
          active={chatlist.length !== active?.menuId ? 'active' : ''}
        />
      </Box>

      <Box sx={{ marginLeft: '16px' }}>
        <MenuFinanceiro
          onClick={handleNavigateFinanceiro}
          active={chatlist.length !== active?.menuId ? 'active' : ''}
        />
      </Box>
    </Box>
  );
}
