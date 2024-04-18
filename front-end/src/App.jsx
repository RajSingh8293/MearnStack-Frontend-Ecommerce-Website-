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

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <ToastContainer />
        <Routes>
          {/* we use private component because we want to keep private beacuse we don't want to show these pages without signup or login */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/" element={<Home />} />
          {/* <Route element={<PrivateComponent />}> */}
          <Route path="/add" element={<Add />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/profile" element={<Profile />} />
          {/* </Route> */}

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
