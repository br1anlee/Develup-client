import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditDeck({decksId, categoryId, setShowForm, showForm, deckData}) {
const [editForm, setEditForm] = useState(deckData)

    const handleOnClick=(e)=>{
        e.preventDefault()
        axios
        .put(`${process.env.REACT_APP_SERVER_URL}/api-v1/category/${categoryId}/deck/${decksId}`, editForm)
        .then((response) => {
            setShowForm(!showForm)
            return axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/category/${categoryId}/deck/${decksId}`)
        })
        .catch(console.log)
    }

    
    let showAllCards = deckData.cards.map((card, idx) => {
        console.log(card)
        return (
            <div key={`decks-${idx}`} >
              <p>Question: {card.question}</p>
              <p>Answer: {card.answer}</p>
            </div>
          )
        })
      
    // console.log(deckData.cards)
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
                        setEditForm({ ...editForm, uestion: e.target.value })
                    }
                /> */}

                <input type='submit' />
            </form>

        </>
     );
}

export default EditDeck;
