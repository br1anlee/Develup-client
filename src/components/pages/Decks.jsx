import { useParams, Link } from "react-router-dom"
import { useState } from "react"
// import {useState} from 'react'

export default function Deck({ category }) {
  const { id } = useParams()

  const [currentCategory, setCurrentCategory] = useState({})

  let deckIdx = category.findIndex((object) => {
    return object._id === id
  })

  let showAllDecks

  if (deckIdx != -1) {
    showAllDecks = category[deckIdx].decks.map((deck, i) => {
      return (
        <li>
          <Link to={`/category/${id}/deck/${deck._id}`}>{deck.deckName}</Link>
        </li>
      )
    })
  }

  // setCurrentCategory(category[deckIdx])

  return (
    <>
      <h1>Decks</h1>
      <ul>{showAllDecks}</ul>
    </>
  )
}
