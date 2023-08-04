import React from 'react'
import { useEffect} from 'react'
import "../../images/heart.png"
import "../../images/empty-heart.png"
import './Joke.css'

const Joke = ({joke, addSaved, savedList, setSavedList, saved, setSaved, id, jokeLoading, jokeErr}) => {

  useEffect(() => {
    if (savedList.includes(joke.joke)) {
      setSaved(true)
    }
  }, [])

  function handleSaved(event) {
    event.preventDefault()
    const newJoke = joke
    if (!savedList.includes(joke)) {
      setSaved(true)
      addSaved(newJoke)
    }
  }

  function handleUnsave(event) {
    event.preventDefault()
    if (event.target.id === id) {
      const updatedSavedList = savedList.filter(savedJoke => savedJoke !== joke)
      setSavedList(updatedSavedList)
      setSaved(false)
    }
  }


if(jokeErr){
  return <h1 className='joke-err-message'>An error has occured: {jokeErr}</h1>
}

  return (
    <div className='joke-card' key={id} >
      {jokeLoading ? <h1 className='err-message'>Loading Jokes....</h1> : <p>{joke.joke}</p>}
      <div className='heart' id={id} >
        {!saved ? (<img id={id} onClick={handleSaved} className='empty-heart' src={require('../../images/empty-heart.png')} />) : (<img onClick={event => handleUnsave(event)} className='full-heart' src={require('../../images/heart.png')} id={id} />)}
      </div>
    </div>
  )
}
   
export default Joke