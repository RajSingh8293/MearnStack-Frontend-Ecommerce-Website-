import React from 'react'
import Sidebar from './Sidebar'
import Products from '../../components/Products'

const Dashboard = () => {
  return (
    <div className="px-8 w-[100%] flex lg:pt-[80px] pt-[100px] bg-white overflow-x-auto">
      <Sidebar />
      <Products />
    </div>
  )
}

export default Dashboard
