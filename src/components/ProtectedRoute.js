// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext'; // Adjust path as needed

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext is not provided');
  }

  const { user } = context;

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
