import React from 'react';
import { Navigate } from 'react-router-dom';
import VisaoGeral from '../../../pages/VisãoGeral';

function ProtectedVisaoGeral() {
  const token = localStorage.getItem('user');

  return token ? <VisaoGeral /> : <Navigate to="/" />;
}

export default ProtectedVisaoGeral;
