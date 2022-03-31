import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'
import "../layout/Login.css"


export default function Register({ currentUser, setCurrentUser }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    passwordConfirmation: ''
  })
  const [msg, setMsg] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if (form.password === form.passwordConfirmation) {
        // remove unneeded data in the form pre-request
        delete form.passwordConfirmation
        // do the axios since the passwords match
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, form)
        // get the token from the response
        const { token } = response.data
        // set the token in local storage
        localStorage.setItem('jwt', token)
        // decode the token
        const decoded = jwt_decode(token)
        // log the user in 
        setCurrentUser(decoded)
      } else {
        setMsg('the two passwords you entered do not match 🥴')
      }
    } catch (err) {
      if (err.response.status === 409) {
        setMsg(err.response.data.msg)
      }  console.log(err)
    }
  }

  // navigate away if the user logs in
  if (currentUser) return <Navigate to="/category" />

  return (
    <div className="container">
          <div className="title-Main">
                <div className="image-Container">
                    <img src="/logo.png"/>
                </div>
                <div className="title-Name">
                    <h1>DevelUp +</h1>
                </div>
          </div>
    <div className="formContainer">
      <div className="subMain">
      <h3 className="sign-in">Register</h3>      
      <p>{msg}</p>
    </div>

      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          id="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          placeholder='  enter your email...'
          className="emailInput"
          />
        </div>

        <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text"
          id="name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          placeholder='  enter your name...'
          className="name"
          />
        </div>

        <div>
        <label htmlFor="password">Password:</label>
        <input 
          type="password"
          id="password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          placeholder='  enter your password...'
          className="passwordInput"
          />
        </div>
        
        <div>
        <label htmlFor="passwordConfirmation">Confirmation:</label>
        <input 
          type="password"
          id="passwordConfirmation"
          value={form.passwordConfirmation}
          onChange={e => setForm({ ...form, passwordConfirmation: e.target.value })}
          placeholder='  re-enter your password...'
          className="confirmation"
          />
        </div>
          <button className="enterButton" type="submit">Submit</button>
          <p>Already have an account? <a href="/" className="a-tag">Click here</a></p>
  
      </form>
    </div>
  </div>
  )
}