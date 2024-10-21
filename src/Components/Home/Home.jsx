import React from 'react'
import Navbar from '../Navbar/Navbar'
import Freelance from '../Freelance/Freelance'

function Home() {
  return (
    <>
      <Navbar/>
      <p>
        Desde Argentina, me dedico a desarrollar portfolios personalizados, páginas corporativas y 
        landing pages que combinan diseño visual y funcionalidad. Trabajo junto a expertos en diseño 
        para crear soluciones web modernas que ayudan a negocios y profesionales de todo el mundo a destacarse.
        <br /><br />
        Con un enfoque en el frontend, uso tecnologías como React JS para desarrollar sitios web 
        interactivos y adaptables, asegurando una experiencia de usuario fluida y atractiva.
      </p>
      <Freelance />
    </>
  )
}

export default Home