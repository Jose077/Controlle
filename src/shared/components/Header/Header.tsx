import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { getUser } from '../../redux/reducers/accountReducer';
import Account from './Account';
import Menu from './Menu';
import MenuCentral from './MenuCentral';

export default function Header() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.account);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <Box>
      <Box
        sx={{
          bgcolor: 'background.paper',
          height: '53px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ padding: '16px', display: 'flex', alignItems: 'center' }}>
          <Menu />
          <Typography
            sx={{
              fontSize: '17px',
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'Helvetica',
            }}
          >
            {user.nome}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <MenuCentral />
        </Box>
        <Box sx={{ padding: '16px' }}>
          <Account />
        </Box>
      </Box>
    </Box>
  );
}
