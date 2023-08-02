import React from 'react'
import {useState, useEffect} from 'react'
import { getJokes, getCat } from '../../apiCalls'
import Joke from '../Joke/Joke'
import './JokeContainer.css'

const JokeContainer = ({saved, setSaved, savedList, setSavedList, addSaved}) => {
  
const [joke, setJoke] = useState("")
const [cat, setCat] = useState("")

console.log('mockjoeks',joke)


useEffect(() => {
  getCat()
    .then(data => {
      setCat(data.url)
    })
}, [])

useEffect(() => {
  getJokes()
    .then(data => {
      setJoke(data)
    })
    //add .catch for error
}, [])

  return (
    <div className ='joke-container'>
      <img src={cat} alt="cat-gif"></img>
      <div className= 'joke'>
     <Joke joke={joke} saved={saved} setSaved={setSaved} savedList={savedList} setSavedList={setSavedList} addSaved={addSaved} />
     </div>
    </div>
  )
}

export default JokeContainer