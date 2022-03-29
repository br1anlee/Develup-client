import axios from 'axios'
import {useState} from 'react'

export default function FileUploadForm ({ currentUser, users, setDisplayImg}) {
    const [formImg, setFormImg] = useState('')
    const [msg, setMsg] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('jwt')
            const options = {
                headers: {
                    "Authorization" : token
                }
            }
            const fd = new FormData();
            fd.append('image', formImg)
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/images`, fd, options)

            const foundUser = users.find(user => {
                return user._id === currentUser.id
            })

            setDisplayImg(`https://res.cloudinary.com/solful/image/upload/c_thumb,g_face,h_200,w_200/${foundUser.avatar}.png`)

        } catch (err) {
            console.log(err)
            setMsg('Something went wrong.')
        }
    }
    return (
        <>
            <br></br>
            <h5>Upload an Avatar</h5>
            <form onSubmit={handleSubmit} encType='multipart/form'>
                <label htmlFor="image"></label>
                <input type="file" name="image" id="image" onChange={e => setFormImg(e.target.files[0])}/>
                <br></br>
                <input type="submit"/>
            </form>
        </>
    )
}

