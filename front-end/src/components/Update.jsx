import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Update = () => {
  const [name, setName] = useState('')
  const [modal, setModal] = useState('')
  const [price, setPrice] = useState('')
  const [company, setCompany] = useState('')
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    getUpdateDetails()
  }, [])

  const getUpdateDetails = async () => {
    // console.log(params);
    let data = await fetch(
      `http://localhost:3000/update/${params.id}`,
      // jwt toke and verify token starts
      {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
      },
      // jwt toke and verify token ends
    )
    let result = await data.json()
    // console.log(result);
    setName(result.name)
    setModal(result.modal)
    setPrice(result.price)
    setCompany(result.company)
  }

  const updateData = async () => {
    // console.log(name, price, modal, company );
    let data = await fetch(`http://localhost:3000/update/${params.id}`, {
      method: 'put',
      body: JSON.stringify({ name, modal, price, company }),
      headers: {
        'Content-Type': 'application/json',
        // jwt toke and verify token starts
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
        // jwt toke and verify token ends
      },
    })
    let result = await data.json()
    // console.log(result);
    navigate('/products')
  }

  return (
    <>
      <div className="signup-form height">
        <div className="signup">
          <h1>Update Peroducts</h1>
          <input
            type="text"
            className="input-field"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <input
            type="text"
            className="input-field"
            placeholder="Modal"
            value={modal}
            onChange={(e) => {
              setModal(e.target.value)
            }}
          />
          <input
            type="text"
            className="input-field"
            placeholder="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value)
            }}
          />
          <input
            type="text"
            className="input-field"
            placeholder="Company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value)
            }}
          />
          <button onClick={updateData} type="button">
            Upddate
          </button>
        </div>
      </div>
    </>
  )
}

export default Update
