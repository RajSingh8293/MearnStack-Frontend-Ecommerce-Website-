import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  // can't go access login page manually on browser without Logout that's we use useEffect
  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navigate('/')
    }
  }, [])

  const getData = async () => {
    // console.log(email, password);
    let result = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    result = await result.json()
    console.log(result)
    // if  data is correct then take in and store data in localstorage as well otherwise show an error data not found
    // if(result.name){
    // localStorage.setItem('user', JSON.stringify(result));
    if (result.auth) {
      // (use a json web token) starts
      localStorage.setItem('user', JSON.stringify(result.user))
      // token is a key name
      localStorage.setItem('token', JSON.stringify(result.auth))
      // (use a json web token) ends

      navigate('/')
    } else {
      alert('Data not found !')
    }
  }

  return (
    <>
      <div className="signup-form height">
        <div className="signup">
          <h1>Login</h1>
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
            placeholder="Your Paswword"
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

export default Login
