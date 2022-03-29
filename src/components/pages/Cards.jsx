import {useState} from 'react'
import {useParams} from 'react-router-dom'

export default function Cards ({category}) {
    const {id} = useParams()
    const [currentCards, setCurrentCards] = useState({})


    let cardIdx = category.findIndex(object => {
        return object._id === id
    })


    let showAllCards;

    if (cardIdx != -1){
         showAllCards = category[cardIdx].decks[cardIdx].cards.map((card, i) => {
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