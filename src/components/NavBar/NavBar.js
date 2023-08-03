import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
  <nav>
    <Link to="/">
      <div>
    <h1 >Paws & Puns</h1>
    {/* onClick={() => setSaved(false) } */}
    </div>
    </Link>
    <Link to= "/saved">
    <button>Purrfect Jokes</button>
    </Link>
  </nav>
  )
}

export default NavBar