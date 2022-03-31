import { useState } from 'react'
import axios from 'axios'

export default function Create_deck (deck, setDeck){
  const [form, setForm ] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .post(`$process.env.REACT_APP_SERVER_URL)/deck`, Form)
    .then((response) => {
      setForm({})
      return axios.get(process.env.REACT_APP_SERVER_URL + "/deck")
    })
    .then(( response ) => setDeck(response.data))
    .catch(console.log)
  }

  
  return (
    <>
      <h2>  
        <div> 
          <input
            type='text'
            id="name"
            onChange={e => setForm({ ...form, name: e.target.value})}
          />
        </div>
      </h2>
    </>
  )
}