import React from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import img from '../assets/logo.png'

const Nav = () => {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate()
  const cartItems = JSON.parse(localStorage.getItem('cartItems'))
  console.log(cartItems)
  const logout = () => {
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <div className="z-20 bg-gray-800 h-[70px] flex justify-between items-center px-8">
      <div className="logo rounded-full overflow-hidden">
        <img className="h-[50px]" src={img} alt="" />
      </div>
      <div className="nav-menu">
        <ul className="flex items-center gap-5">
          <li className="text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white">
            <Link to="/shop">Shop</Link>
          </li>

          <li className="text-white">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="text-white">
            <Link to="/cart">Cart {cartItems.length}</Link>
          </li>

          {auth ? (
            <ul className="flex items-center gap-5">
              <li className="links text-white">
                <Link onClick={logout} to="/signup">
                  Logout
                  <span className="ml-2 uppercase bg-purple-800  p-2 rounded-full">
                    {JSON.parse(auth).name.slice(0, 1)}
                  </span>
                </Link>
              </li>
              <li className="text-white">
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          ) : (
            <li className="links text-white">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Nav
