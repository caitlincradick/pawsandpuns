import React from 'react'
import {useState, useEffect} from 'react'
import { getJokes, getCat } from '../../apiCalls'
import Joke from '../Joke/Joke'
import './JokeContainer.css'

const JokeContainer = ({ savedList, setSavedList, addSaved, joke, setJoke, saved, setSaved}) => {
  // const [saved, setSaved] = useState(false)
// const [joke, setJoke] = useState("")
const [cat, setCat] = useState("")

console.log('ID', joke.id)


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
      setSaved(false)
    })
    //add .catch for error
}, [])

  return (
    <div className ='joke-container'>
      <img src={cat} alt="cat-gif"></img>
      <div className= 'joke'>
     <Joke id={joke.id} joke={joke} saved={saved} setSaved={setSaved} savedList={savedList} setSavedList={setSavedList} addSaved={addSaved} />
     </div>
    </div>
  )
}

export default JokeContainer