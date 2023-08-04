import React from 'react'
import "../../images/sad-kitty.png"
import "./PageNotFound.css"

const PageNotFound = () => {

  return (
    <div className='page-not-found'>
      <h1>Sorry.. 404 error, page not found.</h1>
      <img alt='page not found logo' src={require('../../images/sad-kitty.png')}></img>
    </div>
  )
}

export default PageNotFound