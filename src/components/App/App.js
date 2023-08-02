import './App.css';
import {useState, useEffect} from 'react'
import { getJokes, getCat } from '../../apiCalls';
import JokeContainer from '../JokeContainer/JokeContainer';
import NavBar from '../NavBar/NavBar';
import {Routes, Route} from 'react-router-dom'
import SavedJokes from '../SavedJokes/SavedJokes';

function App() {
  const [saved, setSaved] = useState(false)
  const [savedList, setSavedList] = useState([])


  function addSaved(newJoke) {
    setSavedList([...savedList, newJoke])
  }
  
  return (
    <div className="App">
    <NavBar saved={saved} setSaved={setSaved} />
  <Routes>
    <Route path = "/" element = {
      <JokeContainer saved={saved} setSaved={setSaved} savedList={savedList} setSavedList={setSavedList} addSaved={addSaved} />
      } />
      <Route path= "/saved" element= {
        <SavedJokes saved={savedList} setSaved={setSavedList} savedList={savedList} setSavedList={setSavedList}/>
      }
      />
    </Routes>
    </div>
  );
};

export default App;
