import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/')
    }
  }, [])

  const getData = async () => {
    // console.log(name, email, password);
    let result = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })

    let saveData = await result.json()
    //  console.log(saveData);
    // localStorage.setItem('user', JSON.stringify(saveData))
    // use jwt starts
    localStorage.setItem('user', JSON.stringify(saveData.result))
    localStorage.setItem('token', JSON.stringify(saveData.auth))
    // use jwt ends
    navigate('/')
  }

  return (
    <>
      <div className="signup-form height">
        <div className="signup">
          <h1>Signup</h1>
          <input
            type="text"
            className="input-field"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />

          <input
            type="text"
            className="input-field"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <input
            type="password"
            className="input-field"
            placeholder="Your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />

          <button onClick={getData} type="button">
            Submit
          </button>
        </div>
      </div>
    </>
  )
}
export default Register
