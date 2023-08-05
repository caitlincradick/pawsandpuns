import React from 'react'
import './NavBar.css'
import "../../images/paws-puns-logo.png"
import {Link} from 'react-router-dom'

const NavBar = () => {

  return (
    <nav>
      <Link to="/">
        <div className='logo'>
          <img className='kitty' alt='paws and puns logo with cute cat' src={require('../../images/paws-puns-logo.png')}></img>
        </div>
      </Link>
      <div className='button-container'>
        <Link to="/saved">
          <button className='purrfect-btn'>View Purrfect Puns</button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar