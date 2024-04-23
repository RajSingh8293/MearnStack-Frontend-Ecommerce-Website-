import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Add from './components/Add'
import Update from './components/Update'
// import Logout from './components/Logout'
import Footer from './components/Footer'
import Profile from './pages/Profile/Profile'
// import PrivateComponent from './components/PrivateComponet'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Dashboard from './pages/Admin/Dashboard'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import ConfirmOrder from './pages/ConfirmOrder/ConfirmOrder'
import Payment from './pages/Payment/Payment'
import AdminRoute from './protectedroutes/AdminRoute'
import NoPage from './pages/NoPage/NoPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          {/* <Route element={<PrivateComponent />}> */}
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirm-order" element={<ConfirmOrder />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NoPage />} />
          {/* </Route> */}

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            element={
              <AdminRoute>
                <Route path="/dashboard" element={<Dashboard />} />
              </AdminRoute>
            }
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
