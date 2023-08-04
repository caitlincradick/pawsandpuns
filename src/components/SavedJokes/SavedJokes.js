import React from 'react'
import Joke from '../Joke/Joke'
import '../../images/saved-puns.png'
import './SavedJokes.css'

const SavedJokes = ({joke, saved, setSaved, savedList, setSavedList}) => {

  const savedJokes = savedList.map(savedJoke => (
  <Joke key={savedJoke.id} joke={savedJoke} saved={saved} setSaved={setSaved} savedList={savedList} setSavedList={setSavedList} id={joke.id}/>  
  ))

  if (savedList.length === 0) {
    return (<h1 className="no-puns">No Saved Puns  </h1>)
  } else {
    return (
      <div className='saved-container' key={Date.now()}>
        <img className='saved-logo' alt='saved puns logo' src={require('../../images/saved-puns.png')} />
        <div className='saved'>
          {savedJokes}
        </div>
      </div>
    )
  }
}


export default SavedJokes