import React from 'react'
// import { useAuth } from './AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

  // const { isAuthenticated } = useAuth();
  const isAuthenticated = localStorage.getItem('token') === 'STATIC_AUTH_TOKEN';

  return isAuthenticated ? children : <Navigate to='/login'  replace />
};

export default PrivateRoute;
