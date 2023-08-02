import React from 'react'
import {useState} from 'react'

const SavedJokes = ({saved, setSaved, savedList, setSavedList}) => {
 const [unsave, setUnsave] = useState(true)

  const savedJokes = savedList.map(savedJoke => {
  return (
    <div>
      <p>{savedJoke}</p>
    </div>
  )
})

  return (
  <div> 
    <h1> My Saved Jokes</h1>
    {savedJokes}
    </div>
    )
}


export default SavedJokes