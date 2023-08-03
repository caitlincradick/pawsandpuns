import React from 'react'
import { useState, useEffect} from 'react'
import "../../heart.png"
import "../../empty-heart.png"
import './Joke.css'


const Joke = ({joke, addSaved, savedList, setSavedList, saved, setSaved, id}) => {
  // const [saved, setSaved] = useState(false)

useEffect(() => {
 if(savedList.includes(joke.joke)){
  setSaved(true)
 }
},[])

function handleSaved(event){
  event.preventDefault()
  const newJoke= joke
  if(!savedList.includes(joke)){
    setSaved(true)
  addSaved(newJoke)
}
}

function handleUnsave(event){
  event.preventDefault()
  if(event.target.id === id){
  const updatedSavedList = savedList.filter(savedJoke => savedJoke !== joke)
  setSavedList(updatedSavedList)
  setSaved(false)
}
}

  return (
    <div className='joke-card' >
      <p>{joke.joke}</p>
      <div className='heart' >
      {!saved ? (<img  onClick={handleSaved} className='empty-heart' src={require('../../empty-heart.png')} />) : (<img onClick={event=>handleUnsave(event)} className='full-heart' src={require('../../heart.png')} id={id} />)}
      </div>
      </div>
  )
}
   
export default Joke