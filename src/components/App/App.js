import './App.css';
import {useState, useEffect} from 'react'
import { getJokes, getCat } from '../../apiCalls';
import JokeContainer from '../JokeContainer/JokeContainer';
import NavBar from '../NavBar/NavBar';
import {Routes, Route} from 'react-router-dom'
import SavedJokes from '../SavedJokes/SavedJokes';

function App() {
 
  const [savedList, setSavedList] = useState([])


  function addSaved(newJoke) {
    setSavedList([...savedList, newJoke])
  }
  
  return (
    <div className="App">
    <NavBar />
  <Routes>
    <Route path = "/" element = {
      <JokeContainer  savedList={savedList} setSavedList={setSavedList} addSaved={addSaved} />
      } />
      <Route path= "/saved" element= {
        <SavedJokes savedList={savedList} setSavedList={setSavedList}/>
      }
      />
    </Routes>
    </div>
  );
};

export default App;
