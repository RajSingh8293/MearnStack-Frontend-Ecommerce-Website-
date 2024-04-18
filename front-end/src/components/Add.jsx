import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  const [name, setName] = useState('')
  const [modal, setModal] = useState('')
  const [price, setPrice] = useState('')
  const [company, setCompany] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const getData = async () => {
    console.log(name, price, modal, company)

    // simple validation starts
    if (!name || !modal || !price || !company) {
      setError(true)
      return false
    }
    // simple validation ends
    // send user id with add products data as well
    const userId = JSON.parse(localStorage.getItem('user'))._id
    // console.log(userId);
    let result = await fetch('http://localhost:3000/add-product', {
      method: 'POST',
      body: JSON.stringify({ name, price, modal, company, userId }),
      headers: {
        'Content-Type': 'application/json',
        // jwt token and verify token starts
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
        // jwt token and verify token ends
      },
    })

    // inside there data is readstream so, have to resolve using json() method
    let saveData = await result.json()
    //  console.log(saveData);
    if (saveData) {
      alert('Data has been sent ')
      navigate('/products')
    }
  }

  return (
    <>
      <div className="signup-form height">
        <div className="signup">
          <h1>Add Peroducts</h1>
          <input
            type="text"
            className="input-field"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          {error && !name && <span>Enter product name</span>}
          <input
            type="text"
            className="input-field"
            placeholder="Modal"
            value={modal}
            onChange={(e) => {
              setModal(e.target.value)
            }}
          />
          {error && !modal && <span>Enter product modal</span>}
          <input
            type="text"
            className="input-field"
            placeholder="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value)
            }}
          />
          {error && !price && <span>Enter product price</span>}
          <input
            type="text"
            className="input-field"
            placeholder="Company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value)
            }}
          />
          {error && !company && <span>Enter product company name</span>}
          <span>{error}</span>
          <button onClick={getData} type="button">
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default Add
