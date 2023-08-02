import React from 'react'
import { useState, useEffect} from 'react'
import "../../heart.png"
import "../../empty-heart.png"
import './Joke.css'


const Joke = ({joke, addSaved, savedList, setSavedList}) => {
  const [saved, setSaved] = useState(false)

useEffect(() => {
 if(savedList.includes(joke.joke)){
  setSaved(true)
 }
},[])

function handleSaved(event){
  event.preventDefault()
  const newJoke= joke.joke 
  setSaved(true)
  if(!savedList.includes(joke.joke)){
  addSaved(newJoke)
}
}

function handleUnsave(){
  const updatedSavedList = savedList.filter(savedJoke => savedJoke !== joke.joke)
  setSavedList(updatedSavedList)
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