import React from 'react';
import './intro.css';
import html from '../../assets/html.png';
import JS from '../../assets/js.png';
import css from '../../assets/css.png'
import react from '../../assets/react.png'
import python from '../../assets/python.png'
import nodejs from '../../assets/nodejs.png'
import express from '../../assets/expressjs.png'
import postgres from '../../assets/postgres.png'
import nextjs from '../../assets/nextjs.png'
import adobe from '../../assets/adobe.png'
import figma from '../../assets/figma.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import download from '../../assets/download.png'
import mail from '../../assets/mail.png'



const Intro = () => {
  return (
    <section id="intro" >

        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm <span className='introName'>Tom Martin</span> <br />A Full Stack Developer.</span>
            <p className='introPara'>A passionate junior full-stack developer and designer dedicated to crafting <b><i>beautiful, dynamic, and intuitive </i></b>applications that solve user problems and elevate experiences.</p>
            
            <div className='techLogoWrapper'>
              <img src={html} alt='HTML' className='techLogos' />
              <img src={css} alt='CSS' className='techLogos' />
              <img src={JS} alt='JavaScript' className='techLogos' />
              <img src={python} alt='HTML5' className='techLogos' />
              <img src={adobe} alt='Express' className='techLogos' />
              <img src={figma} alt='Express' className='techLogos' />
              <img src={postgres} alt='postgreSQL' className='techLogos' />
              <img src={react} alt='React' className='techLogos' />
              <img src={nextjs} alt='NextJS' className='techLogos' />
              <img src={nodejs} alt='NodeJS' className='techLogos' />
              <img src={express} alt='Express' className='techLogos' />
              <br/>
              <div className='logoLinks'>
              <a href="https://github.com/TommyMart" target="_blank" rel="noopener noreferrer">
              <img src={github} alt='Express' className='techLinks' />
              </a>
              <a href="https://www.linkedin.com/in/tom-martin-9b24a4103" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt='Express' className='techLinks' />
              </a>
              </div>
              <div className='introButtons'>
              <a href='./resume26:9.pdf' download><button className='btn'><img src={download} alt='suitcase' className='suitcase'/>Resume</button></a>
              <a href='mailto:thomas.h.martin89@gmail.com' ><button className='btn'><img src={mail} alt='suitcase' className='suitcase'/>Contact Me</button></a>
              </div>
            </div>
            
        </div>

       

    </section>
  )
}

export default Intro;