import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <header>
      <div className="h-container">
        {/* <Logo /> */}
        <a href="/">
        <div className="logo-wrap">
          <div 
            id="logo" 
            className='logo' 
            alt="Brand logo"
            >
            Brand
          </div>
        </div>
      </a> 

        <Navbar />
      </div>
    </header>
  )
}

export default Header