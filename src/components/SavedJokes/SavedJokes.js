import React from 'react'

const SavedJokes = ({saved, setSaved, savedList, setSavedList}) => {
  console.log('saved list', savedList)

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
    <p>{savedJokes}</p>
    </div>
    )
}


export default SavedJokes