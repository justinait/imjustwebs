import React from 'react'
import video from '../../assets/hero.mp4'
import './Hero.css'
import 'animate.css';
import { Link } from 'react-router-dom';

function Hero() {
  
  const handleRedirect = () => {
    window.location.href = '/home';
  };

  return (
    <div className='heroVideoContainer'>
      <video 
        muted loop autoPlay playsInline
        onClick={handleRedirect}
      >
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      
      <div>      </div>
      
      <h1 className='animate__animated animate__fadeInDown' onClick={handleRedirect}>I'm Just Webs</h1>
      
      <div className='navbarHero animate__animated animate__fadeInDown'>
        <Link to='/contact'>CONTACTO</Link>
        <Link to='/home'>PROYECTOS</Link>
      </div>
    </div>
  )
}

export default Hero