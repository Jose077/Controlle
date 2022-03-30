import { Box, Button, Input, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import LogoControlle from '../../assets/controlle.svg';
import { useAuth } from '../../context/AuthProvider/useAuth';

export default function BoxLogin() {
  const auth = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(2, 'Senha muito curta...')
        .max(50, 'Muito Longo...')
        .required('Por favor, crie sua senha.'),
      email: Yup.string()
        .email('Email Invalido...')
        .required('Email obrigatório.'),
    }),
    onSubmit: async values => {
      try {
        await auth.authenticate(values.email, values.password);

        navigate('/visaogeral');
      } catch (error) {
        alert('erro');
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <img src={LogoControlle} alt="" />
        <Typography
          sx={{
            fontSize: '25px',
            color: '#1a2859',
            fontWeight: 'bold',
            padding: '40px',
          }}
        >
          Acesse sua conta
        </Typography>

        <Box>
          <Typography sx={{ color: '#5b708a', padding: '8px' }}>
            Email
          </Typography>
          <Input
            sx={{
              width: '400px',
              height: '32px',
              padding: '8px 18px',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '3px',
            }}
            placeholder="Informe seu email"
            id="email"
            type="email"
            multiline
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Box>{formik.errors.email}</Box>
          ) : null}
        </Box>
        <Box sx={{ padding: '16px' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={{ color: '#5b708a', padding: '8px' }}>
              Senha
            </Typography>
            <Link style={{ textDecoration: 'none', color: '#0054ff' }} to="/">
              <Typography sx={{ fontSize: '14px' }}>
                Esqueceu sua senha?
              </Typography>
            </Link>
          </Box>
          <Input
            sx={{
              width: '400px',
              height: '24',
              padding: '8px 18px',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '3px',
            }}
            placeholder="Senha"
            name="password"
            id="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Box>{formik.errors.password}</Box>
          ) : null}
        </Box>
        <Box sx={{ padding: '16px' }}>
          <Button
            type="submit"
            sx={{
              width: '400px',
              bgcolor: '#0054FF',
              padding: '8px 18px',
            }}
            variant="contained"
          >
            <Typography sx={{ color: '#fff' }}>Login</Typography>
          </Button>
        </Box>

        <Box sx={{ display: 'flex', padding: '16px' }}>
          <Typography>Não tem conta?</Typography>
          <Link style={{ textDecoration: 'none', color: '#0054ff' }} to="/">
            <Typography sx={{ marginLeft: '8px' }}>
              Teste Grátis por 7 dias.
            </Typography>
          </Link>
        </Box>
      </Box>
    </form>
  );
}
