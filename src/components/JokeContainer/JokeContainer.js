import React from 'react'
import {useState, useEffect} from 'react'
import { getJokes, getCat } from '../../apiCalls'
import Joke from '../Joke/Joke'
import './JokeContainer.css'

const JokeContainer = () => {
 const [joke, setJoke] = useState("")
const [cat, setCat] = useState("")

console.log(cat)

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
      <img src={cat}></img>
      <div className= 'joke'>
     <Joke joke={joke} />
     </div>
    </div>
  )
}

export default JokeContainer