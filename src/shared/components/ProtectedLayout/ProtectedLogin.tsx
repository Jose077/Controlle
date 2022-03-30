import React from 'react';
import { Navigate } from 'react-router-dom';
import TelaLogin from '../../../pages/Login';

function ProtectedLogin() {
  const token = !localStorage.getItem('user');

  return token ? <TelaLogin /> : <Navigate to="/visaogeral" />;
}

export default ProtectedLogin;
