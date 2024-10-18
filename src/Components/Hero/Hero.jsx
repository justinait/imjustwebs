import React from 'react'
import video from '../../assets/hero.mp4'
import './Hero.css'
import 'animate.css';

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
      <h1 className='animate__animated animate__fadeInDownBig'>I'm Just Webs</h1>
    </div>
  )
}

export default Hero