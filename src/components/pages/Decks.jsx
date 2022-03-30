import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { FaDrumstickBite } from "react-icons/fa"
import EditDeck from "./EditDeck"
import Category from "./Category"
// import {useState} from 'react'

export default function Deck({ category, currentUser, users }) {
  const { id } = useParams()

  let deckIdx = category.findIndex((object) => {
    return object._id === id;
  });

  const [editCategory, setEditCategory] = useState()



  const handleEditState = ()=>{
  
   

  }


  let showAllDecks
  if (deckIdx != -1) {
    showAllDecks = category[deckIdx].decks.map((deck, i) => {
      let userIdx = users.findIndex((object) => {
        return object._id === deck.author
      })

      return (
        <>
          <div className="deck-div" key={`category-link${i}`} style={{textDecoration: 'none'}}>
        <Link key={`link-link${i}`} to={`/category/${id}/deck/${deck._id}`}>
            <div key={`deckName-Div-link${i}`}>
            <p key={`deckName-link${i}`} className="category-text">
              {deck.deckName}
            </p>

            <p className="category-text-small">{deck.cards.length} Cards</p>
            <p className="category-text-small">Author: {users[userIdx].name}</p>

            </div>
        </Link>
            <div>
              <form action="">
              <label hidden htmlFor="edit"></label>
              <button onClick={handleEditState}>Edit</button>
              <label hidden htmlFor="delete"></label>
              <button>Delete</button>
              </form>
            </div>
          </div>
          {/* {currentUser.id === deck.author ? <EditDeck deck={deck} currentCategory={currentCategory}></EditDeck> : <></>} */}
        </>
      )
    })
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{category[deckIdx].name} Decks</h1>
      <div className="category-container">{showAllDecks}</div>
      <form action="">
        
      </form>
    </div>
  )
}