import { useState } from "react"
import { useParams } from "react-router-dom"

export default function Cards({ category }) {
  const { id } = useParams()
  const { deckId } = useParams()

  let categoryIdx = category.findIndex((object) => {
    return object._id === id
  })
  const currentDeck = category[categoryIdx]
  const [showForm, setShowForm] = useState(false)

  const [flip,setFlip] = useState(false)

//   const refreshCards = () => {axios.get(process.env.REACT_APP_SERVER_URL + "/api-v1/category")
//       .then((response) => {
//         setCategory(response.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//     }

  let deckIdx = currentDeck.decks.findIndex((object) => {
    return object._id === deckId
  })

  let deckName = currentDeck.decks[deckIdx].deckName

  let showAllCards
  if (deckIdx != -1) {
    showAllCards = currentDeck.decks[deckIdx].cards.map((card, i) => {
      return (
        <div key={`card-${i}`} >
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