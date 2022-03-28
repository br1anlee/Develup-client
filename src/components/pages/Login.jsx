import {useState} from 'react'
import axios from 'axios'
import jwt_decode from 'jwt_decode'
import {Navigate} from 'react-router-dom'


export default function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    
    const [msg, setMessage] = useState('')

    const handleFormSubmit = async e => {
        e.preventDefault()

        try {
            // post to the backend with the form data to login
            const response = axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, form)

            // decode the token that is sent to use
            const {token} = response.data
            const decoded = jwt_decode(token)

            // save the token in the localStorage
            localStorage.setItem('jwt', token)

            // set the state to the logged in user
            setCurrentUser(decoded)
        } catch (err) {
            // handle errors such as wrong credentials
            if (err.response.status === 400) {
                console.log(err.response.data)
                setMessage(err.response.data.msg)
            }
            console.log(err)
        }
    }

    // navigate to the user's profile if currentUser is NOT null
    if (currentUser) return <Navigate to="/category"/>


    return (
        <div>
            <h1>Sign In</h1>

            <h5>{msg ? `${msg}` : ''}</h5>
            <form onSubmit={handleFormSubmit}>
                {/* Email Input */}
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email"
                    onChange={e => setForm({... form, email: e.target.value})}
                    value={form.email}
                    placeholder="Email"
                />

                {/* Password Input */}
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password"
                    onChange={e => setForm({... form.email, password: e.target.value})}
                    value={form.password}
                    placeholder="Password"
                />

                <input type="submit"/>
            </form>
        </div>

    )
}