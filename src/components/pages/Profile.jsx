import { useState, useEffect } from "react"
import FileUploadForm from "../FileUploadForm"
import axios from "axios"

export default function Profile({ currentUser, users,}) {
  // const [msg, setMsg] = useState('')
  const [displayImg, setDisplayImg] = useState("")

    // let foundUser = users.find((user) => {
    //   return  user._id === currentUser.id
    // })
    // console.log(users)
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${currentUser.id}`)
      .then((response) => {
        setDisplayImg(
          `https://res.cloudinary.com/solful/image/upload/c_thumb,g_face,h_300,w_300/${response.data.avatar}.png`
        )
      })
      .catch((err) => {
        console.log(err)
      }) 
  }, [])

  return (
    <div className="center">
      <h1>DevelUp Profile</h1>
      {displayImg ===
      `https://res.cloudinary.com/solful/image/upload/c_thumb,g_face,h_300,w_300/undefined.png`
        ? "No Profile Picture"
        : <img src={displayImg} alt="Profile picture" />}
         
      <h3>
        {currentUser.name} | {currentUser.email}
      </h3>
      
      <FileUploadForm currentUser={currentUser} setDisplayImg={setDisplayImg}/>
    </div>
  )
}

