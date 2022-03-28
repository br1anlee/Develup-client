import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Deck ({category}) {
    const [showDeck, setShowDeck] = useState(false)
    const [deck, setDeck] = useState({})
    const {id} = useParams()

    useEffect(() => {
        console.log('hello this is the deck console')
        axios.get(`${process.env.REACT_APP_SERVER_URL}/category/${id}`)
        .then(response => {
            console.log(response)
        })
    },[])
    return (
        <h1>This is the Decks</h1>
    )
}