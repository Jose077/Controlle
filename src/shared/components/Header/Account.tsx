import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';
import AvatarButton from '../../assets/avatar.png';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { getUser } from '../../redux/reducers/accountReducer';

export default function Account() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.account);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar
              alt="Remy Sharp"
              src={AvatarButton}
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: '243px',
            bgcolor: 'primary.main',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 50,
              height: 50,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'primary.main',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{ marginLeft: '16px' }}>
          <Avatar alt="Remy Sharp" src={user.imagemUrl} />
        </MenuItem>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 'bold',
            marginLeft: '24px',
          }}
        >
          My account
        </Typography>
        <Typography
          sx={{
            fontSize: '9px',
            marginLeft: '24px',
          }}
        >
          Versão 1.7.42
        </Typography>

        <Divider />
        <Box sx={{ padding: '16px' }}>
          <MenuItem>
            <Typography sx={{ fontSize: '14px', color: '#5076ff' }}>
              Meus Dados
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography sx={{ fontSize: '14px', color: '#5076ff' }}>
              Empresas que participo
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography sx={{ fontSize: '14px', color: '#5076ff' }}>
              Sair
            </Typography>
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
}
