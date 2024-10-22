import React, { useEffect, useRef, useState } from 'react';
import './About.css'
import Navbar from '../Navbar/Navbar'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

function About() {

  const {
    VITE_API_SERVICEID: service_id,
    VITE_API_TEMPLATEID: template_id,
    VITE_API_PUBLICID: public_id,
  } = import.meta.env;

  const form = useRef();
  const [btnsubmit, setBtnsubmit] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [input, setInput] = useState({
    user_name: { value: '', error: '' },
    user_email: { value: '', error: '' },
    user_phone: { value: '', error: '' },
    message: { value: '', error: '' },
  });

  const handleInputChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: {
        value: e.target.value,
        error: null,
      },
    }));
  };

  const clearInputValue = () => {
    setInput({
      user_name: { value: '', error: '' },
      user_email: { value: '', error: '' },
      user_phone: { value: '', error: '' },
      message: { value: '', error: '' },
    });
  };

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [show]);

  const sendEmailForm = (e) => {
    e.preventDefault();
    let stop = false;
    Object.keys(input).forEach((key) => {
      if (input[key].value.trim().length === 0) {
        stop = true;
        setInput((prev) => ({
          ...prev,
          [key]: {
            ...prev[key],
            error: '*Este campo es obligatorio',
          },
        }));
      }
    });
    if (stop) return;

    setBtnsubmit(true);
    handleShow();

    emailjs.sendForm(service_id, template_id, form.current, public_id).then(
      (result) => {
        console.log(result.text);
        clearInputValue();
        setBtnsubmit(false);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className='aboutContainer'>
      <Navbar/>
      <p className='aboutText'>
        Desde Argentina, me dedico a desarrollar portfolios personalizados, páginas corporativas y 
        landing pages que combinan diseño visual y funcionalidad. Trabajo junto a expertos en diseño 
        para crear soluciones web modernas que ayudan a negocios y profesionales de todo el mundo a destacarse.
        <br /><br />
        Con un enfoque en el frontend, uso tecnologías como React JS para desarrollar sitios web 
        interactivos y adaptables, asegurando una experiencia de usuario fluida y atractiva.
      </p>

      <div className='socialMedia'>
        <p>Encontrame en:</p>
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
      
      <div className='formContainerDiv'>
        <h4>¿Tenés un proyecto en mente? <strong> Hablemos</strong></h4>

        <form ref={form} onSubmit={sendEmailForm} className='formContainer'>
        
        <input type="text" name="user_name" placeholder='Nombre y apellido'  value={input['user_name'] ? input['user_name'].value : ''}  className='inputForm' onChange={handleInputChange} />
        
        <input type="email" name="user_email" placeholder='Email' value={input['user_email'] ? input['user_email'].value : ''} className='inputForm' onChange={handleInputChange} />

        <input type="number" name="user_phone" placeholder='Teléfono / Celular' value={input['user_phone'] ? input['user_phone'].value : ''} className='inputForm' onChange={handleInputChange} />
        
        <textarea name="message" placeholder='Mensaje' value={input['message'] ? input['message'].value : ''} className='inputForm messageForm'  onChange={handleInputChange}/>
        
        <input type="submit" value="Enviar" className='formSendButton'/>
        
      </form>
      </div>
      <p style={{textAlign: 'center'}}>Developed by <strong>I'm Just Webs</strong> </p>

    </div>
  )
}

export default About