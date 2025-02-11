import React, { useEffect, useRef, useState } from 'react';
import './Freelance.css';
import open from '../../assets/webs/open.png';
import yacht from '../../assets/webs/yacht.png';
import centerdetailmallorca from '../../assets/webs/centerdetailmallorca.png';
import centerdetail from '../../assets/webs/centerdetail.png';
import polo from '../../assets/webs/polo.png';
import looney from '../../assets/webs/looney.png';
import medicalcity from '../../assets/webs/medicalcity.png';
import elevenprocars from '../../assets/webs/elevenprocars.png';
import parma from '../../assets/webs/parma.png';
import cmbroker from '../../assets/webs/cmbroker.png';
import eskamaq from '../../assets/webs/eskamaq.png';
import jorgelina from '../../assets/webs/jorgelina.png';
import regia from '../../assets/webs/regia.png';

function Freelance() {
  const [iframeUrl, setIframeUrl] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef([]);

  const projects = [
    { name: 'Open Club Paraná', image: open, web: 'https://www.openclubparana.com.ar' },
    { name: 'E2 Yacht Services', image: yacht, web: 'https://www.e2yachtservices.com' },
    { name: 'Center Detail Mallorca', image: centerdetailmallorca, web: 'https://www.centerdetailmallorca.com' },
    { name: 'Center Detail Franquicias', image: centerdetail, web: 'https://www.centerdetail.com' },
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

  const openIframe = (url) => {
    setIframeUrl(url);
    setIsVisible(true);
  };

  const closeIframe = () => {
    setIsVisible(false);
    setTimeout(() => setIframeUrl(""), 500);
  };
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight; // Posición del scroll
    projectsRef.current.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Posición del elemento
      if (scrollPosition > elementPosition + 100) { // Ajusta el 100 según necesites
        element.classList.add('mockupVisible');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Aplicar la clase visible a los primeros dos elementos al cargar
    projectsRef.current.forEach((element, index) => {
      if (index < 4 && element) {
        element.classList.add('visible');
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div className="carouselContainer">
      <div className="carousel">
        {projects.map((e, i) => (
          <div className="mockupWrapper" key={i} onClick={() => openIframe(e.web)} ref={(el) => (projectsRef.current[i] = el)}>
            <img
              src={e.image}
              alt={`Proyecto ${e.name}`}
              className="mockupImage"
              loading='lazy'
            />
          </div>
        ))}
      </div>

      {isVisible && (
        <div className={`iframeContainer ${isVisible ? "visible" : ""}`}>
          <div className="mockupFrame">
            {iframeUrl && (
              <iframe id="projectIframe" src={iframeUrl} frameBorder="0" loading="lazy"></iframe>
            )}
            <button id="closeIframe" onClick={closeIframe}>              X            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Freelance;
