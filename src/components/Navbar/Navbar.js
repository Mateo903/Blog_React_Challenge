import React from 'react'
import './navbar.css'

const Navbar = () => {

  const toTheTop = () => {
    window.scrollTo({top:0, left:0, behavior: 'smooth'})
  }

  return (
    <nav className='navbar'>
      <div className='navbar-logo' onClick={toTheTop}> 
        <p>CHALLENGE BLOG</p> 
      </div>
      
    </nav>
  )
  
}

export default Navbar
