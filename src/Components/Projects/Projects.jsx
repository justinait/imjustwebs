import React from 'react'
import yacht from '../../assets/webs/yacht.png'
import centerdetailmallorca from '../../assets/webs/centerdetailmallorca.png'
import polo from '../../assets/webs/polo.png'
import looney from '../../assets/webs/looney.png'
import medicalcity from '../../assets/webs/medicalcity.png'
import elevenprocars from '../../assets/webs/elevenprocars.png'
import parma from '../../assets/webs/parma.png'
import cmbroker from '../../assets/webs/cmbroker.png'
import eskamaq from '../../assets/webs/eskamaq.png'
import jorgelina from '../../assets/webs/jorgelina.png'
import regia from '../../assets/webs/regia.png'
import './Projects.css'

function Projects() {
    const projects = [
        { name: 'E2 Yacht Services', image: yacht, web: 'https://www.e2yachtservices.com'},
        { name: 'Center Detail Mallorca', image: centerdetailmallorca, web: 'https://www.centerdetailmallorca.com'},
        { name: 'Autos Polo', image: polo, web: 'https://www.autospolo.com'},
        { name: 'The Looney Studio', image: looney, web: 'https://www.thelooneystudio.com'},
        { name: 'Medical City', image: medicalcity, web: 'https://medicalcitypv.com'},
        { name: 'Eleven Pro Cars', image: elevenprocars, web: 'https://elevenprocar.com'},
        { name: 'ParmaShop', image: parma, web: 'https://parmashop.com.ar'},
        { name: 'CM Broker', image: cmbroker, web: 'https://cmbroker.com.ar/'},
        { name: 'Eskamaq', image: eskamaq, web: 'https://www.eskamaq.com'},
        { name: 'Jorgelina Parkinson', image: jorgelina, web: 'https://www.jorgelinaparkinson.com/'},
        { name: 'Regia', image: regia, web: 'https://www.regia.ar/'},
    ]
  return (
    <div className='projectBoxContainer'>
        
        {
            projects.map((e, i)=> {
                return (
                    <a href={e.web} target="_blank" key={i} className='projectContainer'>
                        <img src={e.image} alt={e.name} className='projectMockup' border="0" />
                        <p className='projectText'>{e.name}</p>                        
                    </a>
                )
            })
        }


    </div>
  )
}

export default Projects