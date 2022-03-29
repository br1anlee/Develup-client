function VisibleCards ({cards, currentCards, setCurrentCards}) {

    const visibleCards = cards.map((element, idx)=>{

        return(
            <>
            <p>Card {idx+1}</p>
            <input type="text"
             value={element.question}

              />
            {/* <p key={`visible-question-${idx}`}>{element.question}</p> */}
            <input type="text"
             value={element.answer}

              />
            {/* <p key={`visible-answer-${idx}`}>{element.answer}</p> */}
            </>
        )

    })


    return ( 
            <>
                {visibleCards}
            </>
     );
}

export default VisibleCards;