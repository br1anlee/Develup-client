import { useState } from "react"
import axios from "axios"

function EditDeck({ decksId, categoryId, setShowForm, showForm, deckData }) {
  const [editForm, setEditForm] = useState(deckData)
  const [editCard, setEditCard] = useState(deckData.cards)

  const handleOnClick = (e) => {
    const finalForm = { deckName: editForm.deckName }
    finalForm.cards = editCard
    console.log(finalForm)

    e.preventDefault()
    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/api-v1/category/${categoryId}/deck/${decksId}`,
        finalForm
      )
      .then((response) => {
        setShowForm(!showForm)
        return axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api-v1/category/${categoryId}/deck/${decksId}`
        )
      })
      .catch(console.log)
  }

  let deckEdit = deckData.cards.map((card, idx) => {
    const handleCardQuestion = (e) => {
      const newDeck = [...editCard]
      newDeck[idx].question = e.target.value
      setEditCard(newDeck)
    }
    const handleCardAnswer = (e) => {
      const newDeck = [...editCard]
      newDeck[idx].answer = e.target.value
      setEditCard(newDeck)
    }
    return (
      <div key={`decks-${idx}`}>
        {/* <form onSubmit={handleOnClick}> */}
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          placeholder="Question"
          value={editCard[idx].question}
          id="question"
          onChange={handleCardQuestion}
        />

        <label htmlFor="answer">Answer</label>
        <input
          type="text"
          placeholder="Answer"
          value={editCard[idx].answer}
          id="answer"
          onChange={handleCardAnswer}
        />
        {/* </form> */}
      </div>
    )
  })

  return (
    <>
      <br></br>
      <h3>Edit the Deck</h3>
      <form onSubmit={handleOnClick}>
        <label htmlFor="deckName">Deck's Name</label>
        <input
          type="text"
          value={editForm.deckName}
          onChange={(e) => setEditForm({ ...editForm, deckName: e.target.value })}
          id="deckName"
        />

        {deckEdit}
        <input type="submit" />
      </form>
    </>
  )
}

export default EditDeck
