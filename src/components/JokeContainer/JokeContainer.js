import React from 'react'
import {useState, useEffect} from 'react'
import { getJokes, getCat } from '../../apiCalls'
import Joke from '../Joke/Joke'
import './JokeContainer.css'

const JokeContainer = ({ savedList, setSavedList, addSaved, joke, setJoke, saved, setSaved}) => {
const [cat, setCat] = useState("")
const [catLoading, setCatLoading] = useState(false)
const [catErr, setCatErr] = useState("")
const [jokeLoading, setJokeLoading] = useState("")

console.log('ID', joke.id)


useEffect(() => {
  setCatLoading(true)
  getCat()
    .then(data => setCat(data.url))
    
      .catch(catErr => {
        if(catErr === 500) {
          setCatErr('Oh no, looks there is a server error!')
      } else {
        setCatErr(catErr)
      }
      })
      .finally(() => {
        setCatLoading(false)
      })
    // })
}, [])

useEffect(() => {
  getJokes()
    .then(data => {
      setJoke(data)
      setSaved(false)
    })
    //add .catch for error
}, [])

if(catErr){
  return <h1 className='err-message'>An error has occured: {catErr}</h1>
}

  return (
    <div className ='joke-container'>
      {catLoading ? <h1 className='err-message'>Loading Cats....</h1> : <img className='gif' src={cat} alt="cat-gif"></img>}
      <div className= 'joke'>
     <Joke id={joke.id} joke={joke} saved={saved} setSaved={setSaved} savedList={savedList} setSavedList={setSavedList} addSaved={addSaved} />
     </div>
    </div>
  )
}

export default JokeContainer