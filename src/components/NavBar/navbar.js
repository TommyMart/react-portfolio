import React from 'react';
import './navbar.css';
import logo from '../../assets/TM.png';
import contactImg from '../../assets/speech-bubble.png'
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className='TM-logo'>TM.</h1>
        {/* <img src={logo} alt='TM logo' className='logo' ></img> */}
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Projects</Link>
            <Link className='desktopMenuListItem'>Interests</Link>
        
        </div>
        <button className='desktopMenuBtn'>
            <img src={contactImg} alt='' className='desktopMenuImg' />
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar;