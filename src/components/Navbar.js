import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li><a href="/">HOME</a></li>
        <li><a href="/about">ABOUT US GCEC</a></li>
        <li><a href="/course">COURSE</a></li>
        <li><a href="/registration">STUDENT REGISTRATION</a></li>
        <li><a href="/contact">CONTACT US</a></li>
        
        {/* <button className="btn">Log In</button>
        <button className="btn">Sign Up</button> */}
      </ul>
    </nav>
  )
}

export default Navbar;