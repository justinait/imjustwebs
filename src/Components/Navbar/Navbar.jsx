import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbarContainer'>
      <Link to='/' className='imjustwebsNavbar'>I'm Just Webs</Link>
      
      <div className='navbarLinks'>
        <Link to='/contact'>CONTACTO</Link>
        <Link to='/home'>PROYECTOS</Link>
      </div>
    </div>
  )
}

export default Navbar