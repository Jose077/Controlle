import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedFinanceiro from '../shared/components/ProtectedLayout/ProtectedFinanceiro';
import ProtectedLogin from '../shared/components/ProtectedLayout/ProtectedLogin';
import ProtectedVisaoGeral from '../shared/components/ProtectedLayout/ProtectedVisaoGeral';

// COMPONENTS DEVEM SEMPRE TER A PRIMEIRA LETRA MAIUSCULA
function routes() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLogin />} />
      <Route path="/visaogeral" element={<ProtectedVisaoGeral />} />
      <Route path="/financeiro" element={<ProtectedFinanceiro />} />
    </Routes>
  );
}

export default routes;
