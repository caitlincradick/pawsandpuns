import './App.css';
import {useState, useEffect} from 'react'
import { getJokes, getCat } from '../../apiCalls';
import JokeContainer from '../JokeContainer/JokeContainer';
import NavBar from '../NavBar/NavBar';
import {Routes, Route} from 'react-router-dom'
import SavedJokes from '../SavedJokes/SavedJokes';

function App() {
const [savedList, setSavedList] = useState([])
const [joke, setJoke] = useState({id:"", joke:""})
const [saved, setSaved] = useState(false)

  function addSaved(newJoke) {
    setSavedList([...savedList, newJoke])
  }
  
  useEffect(() => {
  getJokes()
    .then(data => {
      setJoke(data)
    })
    //add .catch for error
}, [])

  
  return (
    <div className="App">
    <NavBar />
  <Routes>
    <Route path = "/" element = {
      <JokeContainer  savedList={savedList} setSavedList={setSavedList} addSaved={addSaved} joke={joke} setJoke={setJoke} saved={saved} setSaved={setSaved}/>
      } />
      <Route path= "/saved" element= {
        <SavedJokes savedList={savedList} setSavedList={setSavedList} joke={joke} setJoke={setJoke} saved={true} setSaved={setSaved}/>
      }
      />
    </Routes>
    </div>
  );
};

export default App;
