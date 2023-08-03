import React from 'react'
import {useState} from 'react'
import Joke from '../Joke/Joke'

const SavedJokes = ({joke, saved, setSaved, savedList, setSavedList}) => {



console.log('saved list', savedList)
  const savedJokes = savedList.map(savedJoke => (
// console.log('SAVED JOKE',savedJoke)
  <Joke joke={savedJoke} saved={saved} setSaved={setSaved} savedList={savedList} setSavedList={setSavedList} id={joke.id}/>  
  ))

  console.log('saved JOKES', savedJokes)
  return (
  <div className ='saved-container'> 
    <h1> My Saved Jokes</h1>
    <div className ='saved'>
    {savedJokes}
    </div>
    </div>
    )
}


export default SavedJokes