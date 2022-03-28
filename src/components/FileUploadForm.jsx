import axios from 'axios'

export default function FileUploadForm () {
    const [formImg, setFormImg] = useState('')
    const [msg, setMsg] = useState('')
    const [displayImg, setDisplayImg] = useState('')
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const fd = new FormData();
            fd.append('image', formImg)
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/images`, fd)
            setDisplayImg(response.data.cloudImage)
        } catch (err) {
            console.log(error)
            setMsg('Something went wrong.')
        }
    }
    return (
        <>
            <h4>Upload a Picture</h4>
            {
                displayImg
                &&
                <img 
                    src={displayImg}
                    alt="Profile picture"
                />
            }
            <form>
                <label htmlFor="image">Upload your profile picture</label>
                <input type="file" name="image" id="image" onChange={e => setFormImg(e.target.files[0])}/>

                <input type="submit"/>
            </form>
        </>
    )
}

