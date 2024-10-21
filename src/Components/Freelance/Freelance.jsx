import React, { useEffect, useRef, useState } from 'react';
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
import './Freelance.css';

function Freelance() {

    const [iframeUrl, setIframeUrl] = useState("");
    const [isVisible, setIsVisible] = useState(false);
  
    const projects = [
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
        setTimeout(() => setIframeUrl(""), 500); // Limpiar el iframe después de la animación
    };
  
    return (
      <div className="mockup-container">
        {projects.map((e, i) => (
        <img
          key={i}
          src={e.image}
          alt={`Proyecto ${e.name}`}
          className="mockup"
          onClick={() => openIframe(e.web)}
        />
      ))}

      {isVisible && (
        <div id="iframe-container" className={`iframe-container ${isVisible ? "visible" : ""}`}>
          <iframe id="project-iframe" src={iframeUrl} frameBorder="0"></iframe>
          <button id="close-iframe" onClick={closeIframe}>
            Cerrar
          </button>
        </div>
      )}
      </div>
    );
}

export default Freelance