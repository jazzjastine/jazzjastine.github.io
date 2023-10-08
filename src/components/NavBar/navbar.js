import React from 'react';
import './navbar.css';
import logo from '../../assets/LOGO.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Experiences</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to='footer' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact</Link>
            </div>
        </nav>
    )   
}

export default Navbar;