import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = ({ children }) => {
    const user = 'lucas';
  return (
    
        user ? children : <Navigate to={'login'} replace/>
    
  )
}
