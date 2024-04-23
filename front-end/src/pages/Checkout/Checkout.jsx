import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { Country, State, City } from 'country-state-city'
import CheckoutSteps from '../../components/CheckoutSteps'
import { shippingReducer } from '../../redux/slices/cartSlice'

const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userId = JSON.parse(localStorage.getItem('user'))
  const { shippingInfo } = useSelector((state) => state.cart)

  const [firstname, setFirstname] = useState(shippingInfo.firstname)
  const [lastname, setLastname] = useState(shippingInfo.lastname)
  const [phone, setPhone] = useState(shippingInfo.phone)
  const [country, setCountry] = useState(shippingInfo.country)
  const [state, setState] = useState(shippingInfo.state)
  const [city, setCity] = useState(shippingInfo.city)
  const [address, setAddress] = useState(shippingInfo.address)
  const [zipcode, setZipcode] = useState(shippingInfo.zipcode)

  const shippingHandler = (e) => {
    e.preventDefault()
    if (phone.length < 10) {
      alert('Phone number must be 10 digit long')
    }
    dispatch(
      shippingReducer({
        firstname,
        lastname,
        phone,
        country,
        state,
        city,
        address,
        zipcode,
      }),
    )

    navigate('/confirm-order')
  }

  console.log(
    firstname,
    lastname,
    phone,
    country,
    state,
    city,
    address,
    zipcode,
  )

  return (
    <section className=" py-24">
      <div className="py-8">
        <CheckoutSteps activeStep={0} />
      </div>
      <section className="w-[100%] flex lg:justify-between flex-wrap ">
        <div className="lg:w-[50%] w-[80%] mx-auto">
          <h1 className="text-gray-600 font-semibold text-2xl pb-5">
            Shipping Address
          </h1>
          {/* first name & last name  */}
          <div className="mb-5 lg:flex w-[100%] lg:justify-between  md:flex md:justify-between gap-5">
            <div className="lg:w-[50%]  md:w-[50%] mb-4">
              <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                First Name
              </label>
              <input
                type="text"
                className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="John"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="lg:w-[50%]  md:w-[50%]">
              <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                Last Name
              </label>
              <input
                type="text"
                className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="Cena"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>

          {/* phone   */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
              Phone
            </label>
            <input
              type="phone"
              className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              placeholder="+91 8978676745"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {/* country & state */}

          <div className=" mb-5">
            <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
              Country
            </label>
            <select
              name=""
              id=""
              className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option>Select your country</option>

              {Country &&
                Country.getAllCountries().map((c) => (
                  <option key={c.name} value={c.isoCode}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
          {country && (
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                State
              </label>
              <select
                name=""
                id=""
                className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option>Select your state</option>
                {State &&
                  State.getStatesOfCountry(country).map((c) => (
                    <option key={c.name} value={c.isoCode}>
                      {c.name}
                    </option>
                  ))}
              </select>
            </div>
          )}

          {/* city & street  */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
              City
            </label>
            <input
              type="text"
              className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              placeholder="Delhi"
              name="city"
              // value={shippingAdderess.address}
              // onChange={onchangeHandler}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          {/* Address */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
              Address
            </label>
            <input
              type="text"
              className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              placeholder="103, lajpat nagar, 3rd floor "
              name="house"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {/* pincode  */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
              Zipcode / Pincode
            </label>
            <input
              type="text"
              className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              placeholder="1202002"
              name="pincode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>

          <div className="bg-black hover:bg-[red] flex justify-center items-center">
            <button
              className="py-2 text-white"
              type="button"
              onClick={shippingHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Checkout
