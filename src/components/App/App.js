import './App.css';
import {useState, useEffect} from 'react'
import { getJokes, getCat } from '../../apiCalls';
import JokeContainer from '../JokeContainer/JokeContainer';
import NavBar from '../NavBar/NavBar';

function App() {
 


  return (
    <div className="App">
      <NavBar />
      <JokeContainer />
    </div>
  );
};

export default App;
