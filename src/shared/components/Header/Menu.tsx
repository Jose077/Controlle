import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Backdrop, IconButton } from '@mui/material';
import { MenuTwoTone } from '@mui/icons-material';

const style = {
  position: 'absolute' as 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '50%',
  left: '12%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '100%',
  bgcolor: 'primary.main',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen} color="primary" aria-label="delete">
        <MenuTwoTone />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Menú Lateral
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
