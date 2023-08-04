import React from 'react'
import {useState} from 'react'
import Joke from '../Joke/Joke'
import '../../saved-puns.png'
import './SavedJokes.css'

const SavedJokes = ({joke, saved, setSaved, savedList, setSavedList}) => {



console.log('saved list', savedList)
  const savedJokes = savedList.map(savedJoke => (
// console.log('SAVED JOKE',savedJoke)
  <Joke key={savedJoke.id} joke={savedJoke} saved={saved} setSaved={setSaved} savedList={savedList} setSavedList={setSavedList} id={joke.id}/>  
  ))

 if(savedList.length === 0){
  return (<h1 className="no-puns">No Saved Puns  </h1>)
 } else {
  return (
  <div className ='saved-container' key={Date.now()}> 
   <img className='saved-logo' src={require('../../saved-puns.png')}/>
    <div className ='saved'>
    {savedJokes}
    </div>
    </div>
    )
  }
}


export default SavedJokes