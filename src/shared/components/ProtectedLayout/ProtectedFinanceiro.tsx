import React from 'react';
import { Navigate } from 'react-router-dom';
import Financeiro from '../../../pages/Financeiro';

function ProtectedFinanceiro() {
  const token = localStorage.getItem('user');

  return token ? <Financeiro /> : <Navigate to="/" />;
}

export default ProtectedFinanceiro;
