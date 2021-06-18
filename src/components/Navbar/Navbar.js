import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {Link} from 'react-router-dom'

import './navbar.css'

const Navbar = () => {

  const toTheTop = () => {
    window.scrollTo({top:0, left:0, behavior: 'smooth'})
  }

  return (
    <nav className='navbar'>
      <div className="button-nav-container">
        <Link to={'/home'} className="homebutton" ><HomeIcon  style={{ fontSize: 40 }} /></Link>
        <Link to={'/home'} className="addbutton" ><AddBoxIcon  style={{ fontSize: 40 }} /></Link>
      </div>
      <div className='navbar-logo' onClick={toTheTop}> 
        <p>BLOG</p> 
      </div>
      
    </nav>
  )
  
}

export default Navbar
