import {useState} from 'react'
import {useParams} from 'react-router-dom'

export default function Cards ({category}) {
    const {id} = useParams()
    const {deckId} = useParams()

    let categoryIdx = category.findIndex(object => {
        return object._id === id
    })

    const currentDeck = category[categoryIdx]

    let deckIdx = currentDeck.decks.findIndex(object => {
        return object._id === deckId
    })


    let showAllCards;

    if (deckIdx != -1){
         showAllCards = currentDeck.decks[deckIdx].cards.map((card, i) => {
            return (
                <>
                    <p>{card.question}</p>
                    <p>{card.answer}</p>
                </>
            )
        })
    }
    
 
    return (
        <>
            <h1>This is the cards</h1>
            {showAllCards}
        </>
    )
}