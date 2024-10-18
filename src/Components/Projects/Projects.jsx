import React, { useEffect, useRef, useState } from 'react';
import yacht from '../../assets/webs/yacht.png';
import centerdetailmallorca from '../../assets/webs/centerdetailmallorca.png';
import polo from '../../assets/webs/polo.png';
import looney from '../../assets/webs/looney.png';
import medicalcity from '../../assets/webs/medicalcity.png';
import elevenprocars from '../../assets/webs/elevenprocars.png';
import parma from '../../assets/webs/parma.png';
import cmbroker from '../../assets/webs/cmbroker.png';
import eskamaq from '../../assets/webs/eskamaq.png';
import jorgelina from '../../assets/webs/jorgelina.png';
import regia from '../../assets/webs/regia.png';
import './Projects.css';

function Projects() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  let scrollValue = 0; // Mantener el estado del desplazamiento

  const projects = [
    { name: 'E2 Yacht Services', image: yacht, web: 'https://www.e2yachtservices.com' },
    { name: 'Center Detail Mallorca', image: centerdetailmallorca, web: 'https://www.centerdetailmallorca.com' },
    { name: 'Autos Polo', image: polo, web: 'https://www.autospolo.com' },
    { name: 'The Looney Studio', image: looney, web: 'https://www.thelooneystudio.com' },
    { name: 'Medical City', image: medicalcity, web: 'https://medicalcitypv.com' },
    { name: 'Eleven Pro Cars', image: elevenprocars, web: 'https://elevenprocar.com' },
    { name: 'ParmaShop', image: parma, web: 'https://parmashop.com.ar' },
    { name: 'CM Broker', image: cmbroker, web: 'https://cmbroker.com.ar/' },
    { name: 'Eskamaq', image: eskamaq, web: 'https://www.eskamaq.com' },
    { name: 'Jorgelina Parkinson', image: jorgelina, web: 'https://www.jorgelinaparkinson.com/' },
    { name: 'Regia', image: regia, web: 'https://www.regia.ar/' }
  ];

  const firstHalf = projects.slice(0, Math.ceil(projects.length / 2));
  const secondHalf = projects.slice(Math.ceil(projects.length / 2)).reverse();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        scrollValue += 2; // Incrementa el valor de desplazamiento

        if (row1Ref.current && row2Ref.current) {
          const row1MaxScroll = row1Ref.current.scrollWidth - row1Ref.current.clientWidth;
          const row2MaxScroll = row2Ref.current.scrollWidth - row2Ref.current.clientWidth;

          // Desplaza la fila 1 hacia la derecha
          row1Ref.current.scrollLeft = scrollValue;

          // Desplaza la fila 2 hacia la izquierda
          row2Ref.current.scrollLeft = row2MaxScroll - scrollValue;

          // Reinicia el desplazamiento si se alcanza el final
          if (scrollValue >= row1MaxScroll) {
            scrollValue = 0;
          }
        }
      }
    }, 50); // Ajusta la velocidad del desplazamiento cambiando el intervalo

    const pauseScrolling = () => setIsPaused(true);
    const resumeScrolling = () => setIsPaused(false);

    window.addEventListener('touchstart', pauseScrolling);
    window.addEventListener('touchend', resumeScrolling);
    window.addEventListener('wheel', pauseScrolling);
    window.addEventListener('scroll', pauseScrolling);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('touchstart', pauseScrolling);
      window.removeEventListener('touchend', resumeScrolling);
      window.removeEventListener('wheel', pauseScrolling);
      window.removeEventListener('scroll', pauseScrolling);
    };
  }, [isPaused]);

  return (
    <div className="projectScrollContainer">
      <div className="projectRow" ref={row1Ref}>
        {firstHalf.map((e, i) => (
          <div target="_blank" rel="noreferrer" key={i} className="projectContainer">
            <img src={e.image} alt={e.name} className="projectMockup" />
            <a href={e.web} className="projectText">{e.name}</a>
          </div>
        ))}
      </div>
      <div className="projectRow reverse" ref={row2Ref}>
        {secondHalf.map((e, i) => (
          <div target="_blank" rel="noreferrer" key={i} className="projectContainer">
            <img src={e.image} alt={e.name} className="projectMockup" />
            <a href={e.web} className="projectText">{e.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
