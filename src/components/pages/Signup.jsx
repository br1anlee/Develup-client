import {useState} from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {Navigate} from 'react-router-dom'
import FileUploadForm from './FileUploadForm';



export default function Signup() {
    const [form, setForm] = useState({
        email: '',
        name: '',
        password: '',
        passwordConfirmation: ''
    })

    const [msg, setMsg] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (form.password === form.passwordConfirmation) {
                // delete the the data because it is un-needed data in the form pre-request
                delete form.passwordConfirmation
                // trigget axios since the passwords match
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, form)
                // get the token from the response
                const {token} = response.data
                // set the token in the localstorage
                localStorage.setItem('jwt', token)
                // decode the token
                const decoded = jwt_decode(token)
                // log the user in
                setCurrentUser(decoded)
            } else {
                setMsg('The passwords do not match! Please check your passwords again!')
            }
        } catch (err) {
            if (err.response.status === 409){
                setMsg(err.response.data.msg)
            } else {
                console.log(err)
            }
        }
    }

    // navigate the user to category when logged in
    if (currentUser) return <Navigate to="/category" />
    return (
        <div>
            <h3>Become a User for DevelUp!</h3>
            <p>{msg}</p>
            
            <form onSubmit={handleSubmit}>
                {/* Name input */}
                <label htmlFor="Name">Name:</label>
                <input 
                    type="text" 
                    id="name"
                    value={form.name}
                    onChange={e => setForm({... form, name: e.target.value})}
                    placeholder="Please enter your name"
                />

                {/* Email input */}
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="Please enter your email"
                />

                {/* Password */}
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password"
                    value={form.password}
                    onChange={e => setForm({... form, password: e.target.value})}
                />

                {/* Password Confirmation */}
                <label htmlFor="passwordConfirmation">Password Confirmation:</label>
                <input 
                    type="password"  
                    id="passwordConfirmation" 
                    value={form.passwordConfirmation}
                    onChange={e => setForm({... form, passwordConfirmation: e.target.value})}
                />

                <input type="submit"/>
            </form>
            <FileUploadForm/>
        </div>

    )
}