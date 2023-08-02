import React from 'react'
import { useState} from 'react'
import "../../heart.png"
import "../../empty-heart.png"
import './Joke.css'


const Joke = ({joke, addSaved, saved, setSaved, savedList, setSavedList}) => {


function handleSaved(event){
  event.preventDefault()
  const newJoke= joke.joke 
  addSaved(newJoke)
  setSaved(true)
}

function handleUnsave(){
  setSaved(false)
}


  return (
    <div className='joke-card'>
      {joke.joke}
      {!saved ? (<img onClick={handleSaved} className='empty-heart' src={require('../../empty-heart.png')} />) : (<img onClick={handleUnsave} className='full-heart' src={require('../../heart.png')}/>)}
      </div>
  )
}
   



export default Joke