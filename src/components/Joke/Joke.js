import React from 'react'
import { useEffect} from 'react'
import PropTypes from 'prop-types'
import "../../images/heart.png"
import "../../images/empty-heart.png"
import './Joke.css'

const Joke = ({joke, addSaved, savedList, setSavedList, saved, setSaved, id, jokeLoading, jokeErr}) => {

  useEffect(() => {
    if (savedList.includes(joke.joke)) {
      setSaved(true)
    }
  }, [joke.joke, savedList, setSaved])

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
      {jokeLoading ? <h1 className='err-message'>Loading Jokes....</h1> : <p className ='homepage-joke'>{joke.joke}</p>}
      <div className='heart' id={id} >
        {!saved ? (<img id={id} onClick={handleSaved} className='empty-heart'alt='empty heart logo' src={require('../../images/empty-heart.png')} />) : (<img onClick={event => handleUnsave(event)} className='full-heart' alt='full heart logo' src={require('../../images/heart.png')} id={id} />)}
      </div>
    </div>
  )
}

Joke.propTypes = {
  joke: PropTypes.object,
  addSaved: PropTypes.func,
  savedList: PropTypes.array,
  setSavedList: PropTypes.func,
  saved: PropTypes.bool,
  setSaved: PropTypes.func,
  id: PropTypes.string,
  jokeLoading: PropTypes.any,
  jokeErr: PropTypes.string
};

export default Joke