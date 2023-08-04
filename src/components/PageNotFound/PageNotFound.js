import React from 'react'
import "../../sad-kitty.png"

const PageNotFound = () => {
  return (
    <div className = 'page not found'>
      <h1>Sorry.. 404 error, page not found.</h1>
      <img src={require('../../sad-kitty.png')}></img>
    </div>
  )
}

export default PageNotFound