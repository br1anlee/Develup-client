import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Deck ({category}) {
    const [deck, setDeck] = useState({})
    const {id} = useParams()

    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_SERVER_URL}/category/${id}/decks`)
    // })

    const showAllDecks = category.map((category, i) => {
        console.log(category)
        return (
            category.decks.map((decks, i) =>{
                console.log(decks)
                return (
                    <p>{decks.deckName}</p>
                )
            })
        )
    })

  
    return (
        <>
            <h1>Decks</h1>
            {showAllDecks}
        </>

    )
}