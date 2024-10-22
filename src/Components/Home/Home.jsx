import React from 'react'
import Navbar from '../Navbar/Navbar'
import Freelance from '../Freelance/Freelance'
import './Home.css'

function Home() {
  return (
    <div className='homeContainer'>
      <Navbar/>
      <div className='homeBoxText'>
        <p className='homeText'> <strong>Explorá algunos de mis proyectos destacados</strong></p>
        <p className='homeText'>Hacé clic y navega por la página.</p>
      </div>
      <Freelance />
    </div>
  )
}

export default Home