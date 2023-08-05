import React from 'react'
import PropTypes from 'prop-types'
import {useState, useEffect} from 'react'
import { getJokes, getCat } from '../../apiCalls'
import {Link} from 'react-router-dom'
import Joke from '../Joke/Joke'
import './Homepage.css'


const Homepage = ({ showMoreJokes,savedList, setSavedList, addSaved, joke, setJoke, saved, setSaved}) => {
  
const [cat, setCat] = useState("")
const [catLoading, setCatLoading] = useState(false)
const [catErr, setCatErr] = useState("")
const [jokeLoading, setJokeLoading] = useState("")
const [jokeErr, setJokeErr] = useState("")

  useEffect(() => {
    setCatLoading(true)
    getCat()
      .then(data => setCat(data.url))
      .catch(catErr => {
        if (catErr) {
          setCatErr(catErr)
        }
      })
      .finally(() => {
        setCatLoading(false)
      })
  }, [])

  useEffect(() => {
    getJokes()
      .then(data => {
        setJoke(data)
        setSaved(false)
      })
      .catch(jokeErr => {
        console.log('JOKE ERR', jokeErr)
        if (jokeErr) {
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

  return (
    <div className ='joke-container'>
      <Link to="/saved">
          <button className='purrfect-btn-home'>View Purrfect Puns</button>
        </Link>
      {catLoading ? <h1 className='cat-loading-message'>Loading Cats....</h1> : <img className='gif' src={cat} alt="cat-gif"></img>}
      <div className= 'joke'>
     <Joke jokeErr={jokeErr} jokeLoading={jokeLoading}id={joke.id} joke={joke} saved={saved} setSaved={setSaved} savedList={savedList} setSavedList={setSavedList} addSaved={addSaved} />
     <button className='random-btn' onClick={showMoreJokes}>Show More Jokes</button>
     </div>
    </div>
  )
}

Homepage.propTypes = {
  showMoreJokes: PropTypes.func,
  savedList: PropTypes.array,
  setSavedList: PropTypes.func,
  addSaved: PropTypes.func,
  joke: PropTypes.object,
  setJoke: PropTypes.func,
  saved: PropTypes.bool,
  setSaved: PropTypes.func
};

export default Homepage