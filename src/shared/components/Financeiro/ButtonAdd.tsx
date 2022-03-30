/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { Add, Check } from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';

import React from 'react';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { postLancamento } from '../../redux/reducers/accountReducer';
import DespesaModal from './DespesaModal';
import ReceitaModal from './ReceitaModal';
import TransferenciasModal from './TransferenciasModal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'primary.main',
  boxShadow: 24,
  p: 4,
};

export default function ButtonAdd() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();
  const longText = (
    <Box
      sx={{
        color: '#fff',
        width: '190px',
        height: '124px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <DespesaModal />
      <ReceitaModal />
      <TransferenciasModal />
    </Box>
  );
  const formik = useFormik({
    initialValues: {
      descricao: '',
      valor: 0,
      emissao: '',
      vencimento: '',
      idConta: 0,
      tipo: 0,
      pago: '',
    },
    onSubmit: values => {
      try {
        dispatch(postLancamento(values));
        formik.resetForm();
      } catch (error) {
        console.log(error);
        alert('deu erro');
      }
    },
  });
  return (
    <Box sx={{ padding: '0 15px' }}>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            width: '35px',
            height: '35px',
            bgcolor: '#D95151',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
          }}
        >
          <Tooltip title={longText}>
            <IconButton
              onClick={handleOpen}
              color="primary"
              aria-label="delete"
            >
              <Add sx={{ fontSize: '20px' }} />
            </IconButton>
          </Tooltip>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              sx={{
                fontSize: '17px',
                fontWeight: 'bold',
                fontFamily: 'Helvetica',
              }}
            >
              Nova Despesa
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                fontSize: '14px',
                color: '#9797ad',
                marginTop: '24px',
              }}
            >
              Descrição
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: '8px',
              }}
            >
              <TextField
                sx={{
                  width: '100%',
                  height: '4vh',
                  padding: '7px 8px',
                  borderRadius: '3px',
                  '& MuiOutlinedInput-input:focus': {
                    outline: 1,
                  },
                }}
                color="success"
                focused
                id="descricao"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.descricao}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#9797ad',
                    marginTop: '24px',
                  }}
                >
                  Valor
                </Typography>

                <TextField
                  style={{
                    width: '100px',
                    borderRadius: '3px',
                  }}
                  name="numberformat"
                  color="success"
                  focused
                  id="valor"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.valor}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#9797ad',
                    marginTop: '24px',
                  }}
                >
                  Emissão
                </Typography>

                <TextField
                  style={{
                    width: '180px',
                    borderRadius: '3px',
                  }}
                  name="numberformat"
                  id="emissao"
                  type="Date"
                  onChange={formik.handleChange}
                  value={String(formik.values.emissao)}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#9797ad',
                    marginTop: '24px',
                  }}
                >
                  Vencimento
                </Typography>

                <TextField
                  style={{
                    width: '180px',
                    borderRadius: '3px',
                  }}
                  name="numberformat"
                  id="vencimento"
                  type="Date"
                  onChange={formik.handleChange}
                  value={String(formik.values.vencimento)}
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#9797ad',
                    marginTop: '24px',
                  }}
                >
                  Conta/Cartão
                </Typography>

                <Autocomplete
                  disablePortal
                  options={['Nubank', 'PicPay']}
                  sx={{ width: 230 }}
                  renderInput={params => <TextField {...params} />}
                  id="idConta"
                  onChange={formik.handleChange}
                  value={String(formik.values.idConta)}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#9797ad',
                    marginTop: '24px',
                  }}
                >
                  Categoria
                </Typography>

                <Autocomplete
                  disablePortal
                  options={['Outros', 'Gastos em Casa']}
                  sx={{ width: 230 }}
                  renderInput={params => <TextField {...params} />}
                  id="idConta"
                  onChange={formik.handleChange}
                  value={String(formik.values.vencimento)}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  bgcolor: '#D95151',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                }}
              >
                <IconButton type="submit" color="primary" aria-label="delete">
                  <Check sx={{ fontSize: '30px' }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Modal>
      </form>
    </Box>
  );
}
