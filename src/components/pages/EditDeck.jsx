import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function EditDeck({decksId, categoryId, category, setShowForm, showForm}) {
const [editForm, setEditForm] = useState(category)

    const handleOnClick=(e)=>{
        e.preventDefault()
        axios
        .put(`${process.env.REACT_APP_SERVER_URL}/api-v1/category/${categoryId}/deck/${decksId}`, editForm)
        .then((response) => {
            console.log(response.data)
            setShowForm(!showForm)
        })
        .catch(console.log)
    }

    return ( 
        <>
            <h1>Edit the Deck</h1>
            <form onSubmit={handleOnClick}>
                <label htmlFor="deckName">Deck's Name</label>
                <input
                    type='text'
                    value={editForm.name}
                    onChange={(e) => setEditForm({...editForm, deckName:e.target.value})}
                    id='deckName'
                />
                <input type='submit' />
            </form>

        </>
     );
}

export default EditDeck;