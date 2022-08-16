import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const PrivateRoutes = ({ children }) => {
    const auth = useAuth();
    console.log(auth)
  return (
    
        auth.user ? children : <Navigate to='/login' replace/>
    
  )
}
