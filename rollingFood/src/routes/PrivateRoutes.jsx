import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext';

export const PrivateRoutes = ({ children }) => {
    // const auth = useAuth();
    const data = useContext(DataContext);
    const user = data.user
  return (
        user ? children : <Navigate to='/login' replace/>
  )
}
