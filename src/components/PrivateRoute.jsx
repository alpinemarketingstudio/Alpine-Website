import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const isAuthenticated = Boolean(localStorage.getItem('adminToken'));
  return isAuthenticated ? children : <Navigate to="/dashboard/login" replace />;
}
