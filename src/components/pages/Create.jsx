import { useState, useEffect} from 'react';
import axios from 'axios';
import VisibleCards from './VisibleCards';
import { useNavigate } from 'react-router-dom';

function Create({ currentUser, setCategory, category }) {
  const [msg, setMsg] = useState("")
  const [cards, setCards] = useState([{question: '', answer:''}]);

  const [form, setForm] = useState({
    name: '',
    deckName: '',
    author: currentUser.id,
    cards: []
  });

  
    const refreshCategory = () => {axios.get(process.env.REACT_APP_SERVER_URL + "/api-v1/category")
      .then((response) => {
        setCategory(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  

  const [currentCards, setCurrentCards] = useState([]);

  const handleNewCards = (e) => {

    setForm({...form,  cards: [...form.cards, {question: currentCards.question, answer: currentCards.answer}]})
    setCurrentCards([]);
    
  };


const navigate = useNavigate()

  const submitDeck = async (e)=>{
      e.preventDefault()
      try{

        console.log("hello world")
        console.log(form)

        const response = await axios.post(`http://localhost:2996/api-v1/category`, form)

        console.log(response);

        setCategory(category);

        refreshCategory()

        navigate("/category");


      } catch(err){
          setMsg(err.response.data.msg)
          console.log(err)
      }
  }


  
  return (
    <>
    {msg ? <h1 className="selectDifferentName">Select a different deck name</h1> : <></>}
      <h2>
        <div>
          <form onSubmit={submitDeck}>
            <input type="submit" value="submit deck" />
            <br></br>
            <label htmlFor="category-name">Category: </label>
            <input
              required
              type="text"
              placeholder="category name.."
              id="category-name"
              value={form.categoryName}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            <br></br>
            <label htmlFor="deck-name">Deck name: </label>
            <input
              required
              type="text"
              placeholder="deck name.."
              id="deck-name"
              value={form.deckName}
              onChange={(e) => setForm({ ...form, deckName: e.target.value })}
            />
            <br></br>

            <label htmlFor="card-question">Card 1 - Question</label>
            <input
              required
              type="text"
              placeholder="Question.."
              id="card-question"
              name="question"
              value={currentCards.question}
              onChange={(e) =>
                setCurrentCards({ ...currentCards, question: e.target.value })
              }
            />
            <br></br>
              <label htmlFor="card-answer">Card 1 - Answer</label>
              <input
                required
                type="text"
                placeholder="Answer.."
                id="card-answer"
                name="answer"
                value={currentCards.answer}
                onChange={(e) =>
                  setCurrentCards({ ...currentCards, answer: e.target.value })
                }
              />
              <br></br>
              <input type="button" value="add a card" onClick={handleNewCards}/>
          </form>
        </div>
        <VisibleCards cards={cards} />
      </h2>
    </>
  );
}

export default Create;
