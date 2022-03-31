import { useState, useEffect } from "react"
import { useParams, useNavigate, Navigate } from "react-router-dom"
import EditDeck from "./EditDeck"
import axios from "axios"

export default function Cards({ category, setCategory, currentUser }) {
  const { id, deckId } = useParams()
  const [deckData, setDeckData] = useState({
    cards: [],
  })
  const [showForm, setShowForm] = useState(false)
  const [num, setNum] = useState(0)

  let navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api-v1/category/${id}/deck/${deckId}`)
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
      .delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/category/${id}/deck/${deckId}`, category)
      .then((response) => {
        // console.log(response.data)
        return axios.get(process.env.REACT_APP_SERVER_URL + "/api-v1/category")
      })
      .then((response) => {
        setCategory(response.data)
        navigate("/category")
      })
      .catch(console.log)
  }

  if (!deckData) {
    return <Navigate to="/category" />
  }
  let showAllCards = deckData.cards.map((card, i) => {
    return (
      <div key={`card-${i}`}>
        <p>Question: {card.question}</p>
        <p>Answer: {card.answer}</p>
      </div>
    )
  })
  return (
    <>
      <div className="center">
        <h1>Deck Name: {deckData.deckName}</h1>
        <button onClick={()=>(setNum(num+1))}>Add</button>
     
      
         
        {showForm ? (
          <EditDeck
            categoryId={id}
            decksId={deckId}
            category={category}
            setShowForm={setShowForm}
            showForm={showForm}
            deckData={deckData}
          />
        ) : (
          showAllCards
        )}

        {currentUser.id === deckData.author ? (
          <>
            <button onClick={() => setShowForm(!showForm)}>{showForm ? "Return" : "Edit"}</button>
            <br></br>
            <button onClick={handleSubmit}>Delete Deck</button>{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
