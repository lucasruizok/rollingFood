import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = ({ children }) => {
    const user = 'null' ;
  return (
    
        user ? children : <Navigate to={'login'} replace/>
    
  )
}
