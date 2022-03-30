import { useState } from "react"
import { useParams } from "react-router-dom"

export default function Cards({ category }) {
  const { id } = useParams()
  const { deckId } = useParams()

  let categoryIdx = category.findIndex((object) => {
    return object._id === id
  })

  const currentDeck = category[categoryIdx]

  let deckIdx = currentDeck.decks.findIndex((object) => {
    return object._id === deckId
  })

  let deckName = currentDeck.decks[deckIdx].deckName

  let showAllCards
  if (deckIdx != -1) {
    showAllCards = currentDeck.decks[deckIdx].cards.map((card, i) => {
      return (
        <div key={`card-${i}`}>
          <p>Question: {card.question}</p>
          <p>Answer: {card.answer}</p>
        </div>
      )
    })
  }

  return (
    <div className="center">
        <h1>Deck Name: {deckName}</h1>
        {showAllCards}

    </div>
  )
}