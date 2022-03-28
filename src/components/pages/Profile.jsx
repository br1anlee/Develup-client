import {useState, useEffect} from 'react'
import axios from 'axios'
import FileUploadForm from '../FileUploadForm'

export default function Profile({currentUser}) {
    const [msg, setMsg] = useState('')

    // useEffect is used to receive data from the backend
    useEffect(() => {
        (async () => {
            try {
                // get the token from the local storage
                const token = localStorage.getItem('jwt')
                // make the auth headers
                const options = {
                    headers: {
                        'Authorization': token
                    }
                }
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, options)
                // set the data from the server in state
                setMsg(response.data.msg)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    return (
        <div>
            <h3>Welcome to DevelUp+ {currentUser.name}</h3>
            <FileUploadForm/>
        </div>
    )
}