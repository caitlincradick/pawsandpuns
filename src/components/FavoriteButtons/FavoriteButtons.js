import "../../heart.png"
import "../../empty-heart.png"
import React from 'react'
import { useEffect } from "react"

const FavoriteButtons = ({saved, setSaved, savedList, setSavedList, joke, addSaved}) => {
 console.log('saved list in favories', savedList)

  // useEffect(() => {
  //   if(savedList.includes(joke.joke)){
  //    setSaved(true)
  //   }
  //  })
  
  // function handleSaved(event){
  //   event.preventDefault()
  //   const newJoke= joke
  //   // if (!saved) {
  //   //   addSaved(joke.joke);
  //   //   setSavedList((prevList) => [...prevList, joke.joke]);
  //   setSaved(true)
  //   if(!savedList.includes(joke.joke)){
  //   addSaved(newJoke)
  // }
  // }
  
  // function handleUnsave(){
  // const updatedSavedList = savedList.filter(savedJoke => savedJoke !== joke.joke)
  //   setSavedList(updatedSavedList)
  //   setSaved(false)
  //   }
 
  
  // return (
  //   <div>
  //     {!saved ? (<img onClick={handleSaved} className='empty-heart' src={require('../../empty-heart.png')} />) : (<img onClick={handleUnsave} className='full-heart' src={require('../../heart.png')}/>)}
  //     {/* <FavoriteButtons /> */}
  //   </div>
  // )
}

export default FavoriteButtons