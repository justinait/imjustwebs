import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function About() {
  return (
    <div className='homeContainer'>
      <Navbar/>
      <div className='socialMedia'>
        <a href='https://github.com/justinait' target="_blank">
          <GitHubIcon className='socialMediaIcon' fontSize='large' />
        </a>

        <a href='https://www.linkedin.com/in/justinaiturraspe/' target="_blank">
          <LinkedInIcon className='socialMediaIcon' fontSize='large' />
        </a>
      
        <EmailIcon 
          onClick={() => {          navigator.clipboard.writeText('justiiturraspe@gmail.com')        }}
          className='socialMediaIcon'
          fontSize='large'
        />
      
        
    </div>
      <p className='aboutText'>
        Desde Argentina, me dedico a desarrollar portfolios personalizados, páginas corporativas y 
        landing pages que combinan diseño visual y funcionalidad. Trabajo junto a expertos en diseño 
        para crear soluciones web modernas que ayudan a negocios y profesionales de todo el mundo a destacarse.
        <br /><br />
        Con un enfoque en el frontend, uso tecnologías como React JS para desarrollar sitios web 
        interactivos y adaptables, asegurando una experiencia de usuario fluida y atractiva.
      </p>
      
    </div>
  )
}

export default About