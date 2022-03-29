import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaDrumstickBite } from 'react-icons/fa';
import EditDeck from './EditDeck';
import Category from './Category';
// import {useState} from 'react'


export default function Deck({ category, currentUser, users }) {
  const { id } = useParams();

  let deckIdx = category.findIndex((object) => {
    return object._id === id;
  });

  const [currentCategory, setCurrentCategory] = useState(category[deckIdx]);

  let showAllDecks;
  if (deckIdx != -1) {
    showAllDecks = category[deckIdx].decks.map((deck, i) => {


        let userIdx = users.findIndex((object) => {
          return object._id === deck.author;
        });

        console.log(deck._id, userIdx)
      return (
          <Link key={`link-link${i}`} to={`/category/${id}/deck/${deck._id}`} >
        <div className="deck-div" key={`category-link${i}`}>
        <p key={`deckName-link${i}`} className="category-text">{deck.deckName}</p>
        
         <p  className="category-text-small">{deck.cards.length} Cards</p>
         <p  className="category-text-small">Author: {users[userIdx].name}</p>
          
        </div>
        {/* {currentUser.id === deck.author ? <EditDeck deck={deck} currentCategory={currentCategory}></EditDeck> : <></>} */}
          </Link>
      );
    });
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>{category[deckIdx].name} Decks</h1>
      <div className="category-container">
      {showAllDecks}
      </div>
    </div>
  );
}

