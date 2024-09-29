import React from 'react';
import './intro.css';
import bg from '../../assets/profile-pic.jpeg';
import fish from '../../assets/yellow-fish.png'
import { Link } from 'react-scroll';
import suitCase from '../../assets/suitcase.png'
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



const Intro = () => {
  return (
    <section id="intro" >

        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introtext'>I'm <span className='introName'>Tom Martin</span> <br />A Full Stack Developer.</span>
            <p className='introPara'>A passionate junior full-stack developer and designer dedicated to crafting <b><i>beautiful, dynamic, <br/>and intuitive </i></b>applications that elevate user experiences.</p>
            
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

            </div>
            {/* <Link><button className='btn'><img src={suitCase} alt='suitcase' className='suitcase'/>Hire Me</button></Link> */}
        </div>

       

    </section>
  )
}

export default Intro;