import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import EditDeck from "./EditDeck"
import axios from "axios"

export default function Cards({ category, setCategory }) {
  const { id } = useParams()
  const { deckId } = useParams()

  const [deck, setDeck] = useState([])
  const [showForm, setShowForm] = useState(false)

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_URL}/api-v1/category/${categoryId}/deck/${decksId}`,
        category
      )
      .then((response) => {
        console.log(response.data)
        setDeck({})
        return axios.get(process.env.REACT_APP_SERVER_URL + "/category")
      })
      .then((response) => {
        setCategory(response.data)
        navigate("/category")
      })
      .catch(console.log)
  }

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

  // let categoryId = currentDeck._id
  // console.log(categoryId)

  let deckIdx = currentDeck.decks.findIndex((object) => {
    return object._id === deckId
  })

  let deckName = currentDeck.decks[deckIdx].deckName

  //   let decksId = currentDeck.decks[deckIdx]._id

  let categoryId = id
  let decksId = deckId

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
    <>
      <div className="center">
        <h1>Deck Name: {deckName}</h1>
        {showAllCards} 
        <EditDeck categoryId={categoryId} decksId={decksId} category={category} />
        <button onClick={handleSubmit}>Delete Deck</button>
      </div>
      {/* {showForm ? (
        <EditDeck
          categoryId={categoryId}
          decksId={decksId}
          category={category}
          setShowForm={setShowForm}
          showForm={showForm}
        />
      ) : (
        { showAllCards }
      )} */}
    </>

  )
}
