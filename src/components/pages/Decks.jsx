import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
// import {useState} from 'react'

<<<<<<< HEAD
<<<<<<< HEAD
export default function Deck ({category}) {
    const {id} = useParams()

    const [currentCategory, setCurrentCategory] = useState({})

    let deckIdx = category.findIndex(object => {
        return object._id === id
    })

    let showAllDecks;

    if (deckIdx != -1) {
        showAllDecks = category[deckIdx].decks.map((deck,i) => {
            return <li><Link to={`/category/${id}/deck/${deck._id}`}>{deck.deckName}</Link></li>
        })
    }

    // setCurrentCategory(category[deckIdx])


    return (
        <>
            <h1>Decks</h1>
           <ul>{showAllDecks}</ul>
        </>
=======
export default function Deck({ category }) {
  const { id } = useParams();
=======
export default function Deck ({category}) {
    const {id} = useParams()
>>>>>>> bb8fc1f (working on cards)

    const [currentCategory, setCurrentCategory] = useState({})

    let deckIdx = category.findIndex(object => {
        return object._id === id
    })

<<<<<<< HEAD
  let showAllDecks;
>>>>>>> de4e1b8 (getting decks show and logout fixed)
=======
    let showAllDecks;
>>>>>>> bb8fc1f (working on cards)

    if (deckIdx != -1) {
        showAllDecks = category[deckIdx].decks.map((deck,i) => {
            return <li><Link to={`/category/${id}/deck/${deck._id}`}>{deck.deckName}</Link></li>
        })
    }

    setCurrentCategory(category[deckIdx])


    return (
        <>
            <h1>Decks</h1>
           <ul>{showAllDecks}</ul>
        </>
    )

}
