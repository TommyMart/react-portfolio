import React from 'react';
import './intro.css';
import bg from '../../assets/profile-pic.jpeg';
import { Link } from 'react-scroll';
import suitCase from '../../assets/suitcase.png'

const Intro = () => {
  return (
    <section id="intro" >

        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introtext'>I'm <span className='introName'>Tom</span> <br />A Full Stack Developer</span>
            <p className='introPara'>A passionate full-stack developer and designer dedicated to crafting <b><i>beautiful, dynamic, <br/>and intuitive </i></b>applications that elevate user experiences.</p>
            <Link><button className='btn'><img src={suitCase} alt='suitcase' className='suitcase'/>Hire Me</button></Link>
        </div>

        <img src={bg} alt='Profile' className='bg' />

    </section>
  )
}

export default Intro;