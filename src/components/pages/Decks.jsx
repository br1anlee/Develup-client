import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaDrumstickBite } from "react-icons/fa"
import EditDeck from "./EditDeck"
import Category from "./Category"
// import {useState} from 'react'

export default function Deck({ category, currentUser, users, setCategory }) {
  const { id } = useParams()


  // check if category exists  (optional chaining)
  let deckIdx = category && category.findIndex((object) => {
    return object._id === id;
  });

  const [currentCategory, setCurrentCategory] = useState(category[deckIdx])



  // const refreshDecks = () => {axios.get(process.env.REACT_APP_SERVER_URL + "/api-v1/category/:id")
  //     .then((response) => {
  //       setCategory(response.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //   }

  // This is for Delete
//   const editCard = () => {

//     let editedDeck = {
//   ...currentCategory,
//   decks: [],
// }
// setCurrentCategory(editedDeck)
// };

  const handleEditClick = (e) => {
    e.preventDefault()
    setCategory(prevState => {
      prevState[deckIdx].decks[deckIdx].deckName = "Hello"
      return prevState[deckIdx]
    })
  }

  const handleDeleteClick = (e) => {
    e.preventDefault()
    console.log('delete button click!')

  }
  useEffect(() => {
    console.log(category)
  },[category])

  let showAllDecks
  if (deckIdx != -1) {
    showAllDecks = category[deckIdx].decks.map((deck, i) => {
      let userIdx = users && users.findIndex((object) => {
        return object._id === deck.author
      })

      return (
        <Link key={`link-link${i}`} to={`/category/${id}/deck/${deck._id}`} style={{textDecoration: 'none'}}>
          <div className="deck-div" key={`category-link${i}`}>
            <p key={`deckName-link${i}`} className="category-text">
              {deck.deckName}
            </p>

            <p className="category-text-small">{deck.cards.length} Cards</p>
            <p className="category-text-small">Author: {users[userIdx]?.name}</p>
          </div>
        </Link>
      )
    })
  }
  if (category.length) {
      return (
        <>
          {currentUser ? (
            <div style={{ textAlign: "center" }}>
              <h1>{category[deckIdx].name} Decks</h1>
              <div className="category-container">{showAllDecks}</div>
            </div>
          ): null}
        </>
      )
  } return (
    <div>
      Nothing to Load
    </div>
  )
}
