import { useState, useEffect } from "react"
import { useParams, Navigate } from "react-router-dom"
import EditDeck from "./EditDeck"
import axios from "axios"

export default function Cards({ category, setCategory }) {
  const { id } = useParams()
  const { deckId } = useParams()
  const [deckData, setDeckData] = useState([])
  const [showForm, setShowForm] = useState(false)


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api-v1/category/${categoryId}/deck/${decksId}`)
      .then((response) => {
          // console.log(response.data)
          setDeckData(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [showForm])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_URL}/api-v1/category/${categoryId}/deck/${decksId}`,
        category
      )
      .then((response) => {
        // console.log(response.data)
        setDeckData({})
        return axios.get(process.env.REACT_APP_SERVER_URL + "/api-v1/category")
      })
      .then((response) => {
        setCategory(response.data)
      })
      .catch(console.log)
  }

  //Getting the cars to be mapped out
  let categoryIdx = category.findIndex((object) => {
    return object._id === id
  })
  const currentDeck = category[categoryIdx]

  
  if (!currentDeck) {
    return <Navigate to='/category' />
  }

  let deckIdx = currentDeck.decks.findIndex((object) => {
    return object._id === deckId
  })
  
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

  // const [num, setNum] = useState(0)

  
  return (
    <>
      <div className="center">
        <h1>Deck Name: {deckData.deckName}</h1>

      {showForm ? 
        <EditDeck
        categoryId={categoryId}
        decksId={decksId}
        category={category}
        setShowForm={setShowForm}
        showForm={showForm}
        deckData={deckData}
        />
        : 
        showAllCards
      }
      <button
      onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'exit' : 'edit'}
      </button>
        <br></br>
        <button onClick={handleSubmit}>Delete Deck</button>
        {/* <button onClick={()=>(setNum(num+1))}>Add</button> */}
        </div>
    </>
  )
}
