import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div style={{textAlign:'center'}}>
      <Link to='/' className='imjustwebsNavbar'>I'm Just Webs</Link>
      <p>contacto</p>
    </div>
  )
}

export default Navbar