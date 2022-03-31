import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toIdentifier } from "@babel/types";

function EditDeck({decksId, categoryId, setShowForm, showForm, deckData}) {
const [editForm, setEditForm] = useState(deckData)

const [editCard, setEditCard] = useState(deckData.cards)

console.log(editCard)
    const handleOnClick=(e)=>{

        const finalForm = {deckName: editForm.deckName}
        finalForm.cards = editCard
        console.log(finalForm)

        e.preventDefault()
        axios
        .put(`${process.env.REACT_APP_SERVER_URL}/api-v1/category/${categoryId}/deck/${decksId}`, finalForm)
        .then((response) => {
            setShowForm(!showForm)
            return axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/category/${categoryId}/deck/${decksId}`)
        })
        .catch(console.log)
    }


    let showAllCards = deckData.cards.map((card, idx) => {
        


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
            <div key={`decks-${idx}`} >
                <form onSubmit={handleOnClick}>
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
                        onChange = {handleCardAnswer}
                    />
                </form>
            </div>
          )
        })
      
    console.log(deckData.cards)
    // console.log(deckData.cards[0].question)
    // console.log(deckData.cards[0].answer)
    
    // let cardQuestion = (deckData.cards[0].question)
    // let cardAnswer = deckData.cards[0].answer

    // console.log(deckData)
    // console.log(cardAnswer)

    return ( 
        <>
            <br></br>
            <h3>Edit the Deck</h3>
            <form onSubmit={handleOnClick}>
                <label htmlFor="deckName">Deck's Name</label>
                <input
                    type='text'
                    value={editForm.deckName}
                    onChange={e => setEditForm({...editForm, deckName:e.target.value})}
                    id='deckName'
                />

                {/* <label htmlFor="card-question">Question:</label>
                    <input
                    required
                    type="text"
                    placeholder="Question.."
                    id="card-question"
                    name="question"
                    value={editForm.Question}
                    onChange={(e) =>
                        setEditForm({ ...editForm, question: e.target.value })
                    }
                /> */}

                <input type='submit' />
            </form>
            {showAllCards}

        </>
     );
}

export default EditDeck;
