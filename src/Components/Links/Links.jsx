import React from 'react'
import logo from '/logo.png'
import './Links.css'
import { Link } from 'react-router-dom'

function Links() {
  return (
    <div>
      <Link to='/contact' className='containerLink'>
        <img src={logo} alt="Contacto" className='logoLink' />
        <p>Contacto</p>
      </Link>
    </div>
  )
}

export default Links