import React from 'react';
import './navbar.css';
import contactImg from '../../assets/speech-bubble.png'
import { Link } from 'react-scroll';
import mail from '../../assets/mail.png'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <section className='navbar-content'>
        <h1 className='TM-logo'>TM.</h1>
        {/* <img src={logo} alt='TM logo' className='logo' ></img> */}
        <div className='desktopMenu'>
      <Link 
        activeClass='active' 
        to='intro' 
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500} 
        className='desktopMenuListItem'>
        Home
      </Link>

      <Link 
        activeClass='active' 
        to='skills' 
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500} 
        className='desktopMenuListItem'>
        About
      </Link>

      <Link 
        activeClass='active' 
        to='projects' 
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500} 
        className='desktopMenuListItem'>
        Projects
      </Link>

      <Link 
        activeClass='active' 
        to='contact' 
        spy={true} 
        smooth={true} 
        offset={-100} 
        duration={500} 
        className='desktopMenuListItem'>
        Contact
      </Link>
    </div>
  

        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt='' className='desktopMenuImg' />
            Message
        </button>
      </section>
    </nav>
  )
}

export default Navbar;