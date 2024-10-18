import React from 'react'
import video from '../../assets/hero2.mp4'
import './Hero.css'
import 'animate.css';


function Hero() {
  return (
    <div className='heroVideoContainer'>
      <video src={video}         muted loop autoPlay playsInline>        </video>
      <h1 className='animate__animated animate__fadeInDownBig'>I'm Just Webs</h1>
    </div>
  )
}

export default Hero