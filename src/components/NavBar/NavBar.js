import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = ({saved, setSaved}) => {
  return (
  <nav>
    <Link to="/">
      <div>
    <h1 onClick={() => setSaved(false) }>Paws & Puns</h1>
    </div>
    </Link>
    <Link to= "/saved">
    <button>Purrfect Jokes</button>
    </Link>
  </nav>
  )
}

export default NavBar