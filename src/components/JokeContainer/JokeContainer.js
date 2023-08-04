import React from 'react'
import {useState, useEffect} from 'react'
import { getJokes, getCat } from '../../apiCalls'
import Joke from '../Joke/Joke'
import './JokeContainer.css'


const JokeContainer = ({ showMoreJokes,savedList, setSavedList, addSaved, joke, setJoke, saved, setSaved}) => {
  // const [saved, setSaved] = useState(false)
// const [joke, setJoke] = useState("")
const [cat, setCat] = useState("")
const [catLoading, setCatLoading] = useState(false)
const [catErr, setCatErr] = useState("")
const [jokeLoading, setJokeLoading] = useState("")
const [jokeErr, setJokeErr] = useState("")

console.log('ID', joke.id)


useEffect(() => {
  setCatLoading(true)
  getCat()
    .then(data => setCat(data.url))
      .catch(catErr => {
        if(catErr) {
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
    .catch(jokeErr => {
      console.log('JOKE ERR', jokeErr)
      if(jokeErr) {
        setJokeErr(jokeErr.message)
      }
    })
    .finally(() => {
      setJokeLoading(false)
    })
}, [])


if(catErr){
  return <h1 className='cat-err-message'>An error has occured.</h1>
}

// console.log('cat',catErr)

  return (
    <div className ='joke-container'>
      {catLoading ? <h1 className='cat-loading-message'>Loading Cats....</h1> : <img className='gif' src={cat} alt="cat-gif"></img>}
      <div className= 'joke'>
     <Joke jokeErr={jokeErr} jokeLoading={jokeLoading}id={joke.id} joke={joke} saved={saved} setSaved={setSaved} savedList={savedList} setSavedList={setSavedList} addSaved={addSaved} />
     <button className='random-btn' onClick={showMoreJokes}>Show More Jokes</button>
     </div>
    </div>
  )
}

export default JokeContainer