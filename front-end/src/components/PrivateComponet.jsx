import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponet = () => {
  const auth = JSON.parse(localStorage.getItem('user'))
  return auth ? <Outlet /> : <Navigate to="/signup" />
}

export default PrivateComponet
