// import React from 'react'
// import {useState, useEffect} from 'react'
// import { getJokes, getCat } from '../../apiCalls'
// import Joke from '../Joke/Joke'
// import './Homepage.css'

// const Homepage = ({saved, setSaved, savedList, setSavedList, joke, addSaved}) => {
//   const [cat, setCat] = useState("")
//   // useEffect(() => {
//   //   getCat()
//   //     .then(data => {
//   //       setCat(data.url)
//   //     })
//   // }, [])

//   return (
//     <div className ='joke-container'>
//       <img src={cat} alt="cat-gif"></img>
//       <div className= 'joke'>
//      <Joke joke={joke} saved={saved} setSaved={setSaved} savedList={savedList} setSavedList={setSavedList} addSaved={addSaved} />
//      </div>
//     </div>
//   )
// }

// export default Homepage