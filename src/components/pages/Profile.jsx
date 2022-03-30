import {useState, useEffect} from 'react'
import FileUploadForm from '../FileUploadForm'
import axios from 'axios'

export default function Profile({currentUser, users, category}) {
    // const [msg, setMsg] = useState('')
    const [displayImg, setDisplayImg] = useState('')

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${currentUser.id}`)
          .then((response) => {
            //   console.log(response.data)
            setDisplayImg(`https://res.cloudinary.com/solful/image/upload/c_thumb,g_face,h_300,w_300/${response.data.avatar}.png`)
          })
          .catch((err) => {
            console.log(err)
          })
      }, [])



      // let deckIdx = category.findIndex((object) => {
      //   return object._id === id;
      // });

    
      // let showAllDecks
      // if (deckIdx != -1) {
      //   showAllDecks = category[deckIdx].decks.map((deck, i) => {
      //     let userIdx = users.findIndex((object) => {
      //       return object._id === deck.author
      //     })

  
    return (
        <div className="center">
          <h1>DevelUp Profile</h1>
            {
              displayImg
              &&
              <img 
              src={displayImg}
              alt="Profile picture"
              />
            }
            <h3>{currentUser.name} | {currentUser.email}</h3>
            <FileUploadForm currentUser={currentUser} setDisplayImg={setDisplayImg} users={users}/>
            
        </div>
    )
}