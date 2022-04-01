export default function ShowCards({ deckData, num, flip }) {
  return (
    <div>
      <p>{deckData.cards[num] === undefined ? "This is empty" : deckData.cards[num].question}</p>
      {flip ? (
        <p>{deckData.cards[num] === undefined ? "This is empty" : deckData.cards[num].answer}</p>
      ) : (
        <p></p>
      )}
    </div>
  )
}
