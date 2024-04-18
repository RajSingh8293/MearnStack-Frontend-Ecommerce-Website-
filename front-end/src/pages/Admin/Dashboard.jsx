import React from 'react'
import Sidebar from './Sidebar'
import Products from '../../components/Products'

const Dashboard = () => {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <Products />
    </div>
  )
}

export default Dashboard
