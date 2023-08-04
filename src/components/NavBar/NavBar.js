import React from 'react'
import './NavBar.css'
import "../../images/paws-puns-logo.png"
import {Link} from 'react-router-dom'

const NavBar = () => {
  
  return (
    <nav>
      <Link to="/">
        <div className='logo'>
          <img className='kitty' src={require('../../images/paws-puns-logo.png')}></img>
        </div>
      </Link>
      <Link to="/saved">
        <button className='purrfect-btn'>View Purrfect Puns</button>
      </Link>
    </nav>
  )
}

export default NavBar