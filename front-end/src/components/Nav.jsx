import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import img from '../assets/logo.png'
import { RiShoppingBagLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import { CgMenuRightAlt } from 'react-icons/cg'

const Nav = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()
  const [showmenu, setShowmenu] = useState(false)

  const showBtn = () => {
    setShowmenu(!showmenu)
  }

  // const cartItems = JSON.parse(localStorage.getItem('cartItems'))
  const { cartItems } = useSelector((state) => state.cart)
  console.log(cartItems)
  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div className="relative z-10 bg-navbar ">
      <div className="header w-[100%] lg:mt-3 fixed">
        <div className="row inset-y-0 m-auto px-10 md:mx-0 md:rounded-none  py-3 lg:mx-10 navbar w-100 flex items-center justify-between text-white gap-10 bg-slate-600 transparent lg:rounded-xl ">
          <div className="logo rounded-full overflow-hidden">
            <NavLink to="/" className="text-3xl font-bold">
              <img className="h-[50px]" src={img} alt="" />
            </NavLink>
          </div>

          <div className="lg:hidden">
            <span>
              <CgMenuRightAlt onClick={showBtn} className="text-2xl" />
            </span>
          </div>

          <div className="nav hidden sm:hidden lg:block">
            <ul className="nav-links navLinks items-center flex gap-10">
              <li className="">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="">
                <NavLink to="/shop">Shop</NavLink>
              </li>

              {user.email === 'admin@test.com' && (
                <li className="">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              )}
              <li className="text-white">
                <NavLink to="/cart" className="relative">
                  <RiShoppingBagLine className="text-2xl" />{' '}
                  <span className=" rounded-full bg-[red] w-[15px] flex justify-center items-center absolute -top-2 -right-1">
                    {cartItems && cartItems.length}
                  </span>
                </NavLink>
              </li>

              <li>
                {user ? (
                  <button
                    onClick={logout}
                    className=" bg-green-400 hover:bg-green-500 px-4 py-1 rounded"
                  >
                    logout
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    className=" bg-gray-400 px-4 py-1 rounded hover:bg-slate-500"
                  >
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {showmenu && (
        <div className={`toggleNav z-20 ${showmenu && 'active'}`}>
          {/* <div className="toggleNav "> */}
          <ul
            className="nav-links w-[100%] navLinks flex flex-col gap-10 absoluet fixed  lg:p-8 md:p-8 p-5 bg-white h-[100vh] top-0 right-0 nav "
            // className="nav-links navLinks "
          >
            <li className="links">
              <RxCross2 onClick={showBtn} className="text-2xl" />
            </li>
            <li className="links active" onClick={showBtn}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="links" onClick={showBtn}>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            {user.email === 'admin@test.com' && (
              <li className="links" onClick={showBtn}>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            )}

            <li className="links" onClick={showBtn}>
              {user ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Nav
